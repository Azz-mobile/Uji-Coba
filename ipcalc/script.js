// Theme Management
const savedTheme = localStorage.getItem('azz-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.querySelector('i').className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('azz-theme', nextTheme);
        themeToggle.querySelector('i').className = nextTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
}

// Tab Switching Mechanism
function showTab(id) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabContents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(btn => btn.classList.remove('active'));

    const selectedTab = document.getElementById('tab-' + id);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    const tabOrder = ['ipv4', 'cidr', 'subnet', 'binary', 'wildcard'];
    const index = tabOrder.indexOf(id);
    if (index !== -1 && tabButtons[index]) {
        tabButtons[index].classList.add('active');
    }

    if (id === 'subnet') {
        buildSubnetTable();
    }
}

// Helper IP Math Functions
function ipToNum(ip) {
    return ip.split('.').reduce((acc, oct) => ((acc << 8) + parseInt(oct, 10)), 0) >>> 0;
}

function numToIp(n) {
    return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');
}

function cidrToMask(cidr) {
    return cidr === 0 ? 0 : (0xFFFFFFFF << (32 - cidr)) >>> 0;
}

function maskToCidr(mask) {
    let m = ipToNum(mask);
    let c = 0;
    while (m) {
        c += (m >>> 31) & 1;
        m <<= 1;
    }
    return c;
}

function ipClass(ip) {
    const f = parseInt(ip.split('.')[0], 10);
    if (f >= 1 && f <= 126) return { class: 'A', color: '#10B981' };
    if (f >= 128 && f <= 191) return { class: 'B', color: '#3B82F6' };
    if (f >= 192 && f <= 223) return { class: 'C', color: '#8B5CF6' };
    if (f >= 224 && f <= 239) return { class: 'D (Multicast)', color: '#F59E0B' };
    return { class: 'E (Reserved)', color: '#EF4444' };
}

// TAB 1: IPv4 Calculator
function calcIPv4() {
    const ip = document.getElementById('ipInput').value.trim();
    const cidr = parseInt(document.getElementById('cidrSelect').value, 10);
    const resultsContainer = document.getElementById('ipv4Results');

    if (!/^(\d{1,3}\.){3}\d{1,3}$/.test(ip)) {
        resultsContainer.innerHTML = '<div class="info-box" style="border-color:var(--danger);color:var(--danger)"><i class="fas fa-exclamation-circle"></i> Format IP tidak valid. Gunakan format: X.X.X.X</div>';
        return;
    }

    const ipNum = ipToNum(ip);
    const mask = cidrToMask(cidr);
    const maskStr = numToIp(mask);
    const netAddr = ipNum & mask;
    const broadcast = netAddr | (~mask >>> 0);
    const firstHost = netAddr + 1;
    const lastHost = broadcast - 1;
    const totalHost = Math.pow(2, 32 - cidr) - 2;
    const totalAddr = Math.pow(2, 32 - cidr);
    const cls = ipClass(ip);
    const isPrivate = ip.startsWith('192.168.') || ip.startsWith('10.') || (ip.startsWith('172.') && parseInt(ip.split('.')[1], 10) >= 16 && parseInt(ip.split('.')[1], 10) <= 31);

    resultsContainer.innerHTML = `
        <div class="result-item"><span class="result-label"><i class="fas fa-network-wired"></i> IP Address</span><span class="result-value" onclick="copyVal('${ip}')">${ip}/${cidr}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-mask"></i> Subnet Mask</span><span class="result-value" onclick="copyVal('${maskStr}')">${maskStr}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-home"></i> Network Address</span><span class="result-value" onclick="copyVal('${numToIp(netAddr)}')">${numToIp(netAddr)}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-broadcast-tower"></i> Broadcast Address</span><span class="result-value" onclick="copyVal('${numToIp(broadcast)}')">${numToIp(broadcast)}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-arrow-right"></i> Host Pertama</span><span class="result-value" onclick="copyVal('${numToIp(firstHost)}')">${numToIp(firstHost)}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-arrow-left"></i> Host Terakhir</span><span class="result-value" onclick="copyVal('${numToIp(lastHost)}')">${numToIp(lastHost)}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-users"></i> Total Host</span><span class="result-value">${totalHost > 0 ? totalHost.toLocaleString() : 0}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-th"></i> Total Alamat</span><span class="result-value">${totalAddr.toLocaleString()}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-tag"></i> Kelas IP</span><span class="result-value"><span class="class-badge" style="background:${cls.color}22;color:${cls.color};border:1px solid ${cls.color}55">Kelas ${cls.class}</span></span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-shield-alt"></i> Jenis IP</span><span class="result-value" style="color:${isPrivate ? 'var(--success)' : 'var(--warning)'}">${isPrivate ? 'Private' : 'Public'}</span></div>
        <div style="margin-top:1.25rem;font-size:0.75rem;color:var(--text-muted)"><i class="fas fa-info-circle"></i> Klik nilai untuk menyalin ke clipboard</div>
    `;
}

function resetIPv4() {
    document.getElementById('ipInput').value = '192.168.1.0';
    document.getElementById('cidrSelect').value = '24';
    calcIPv4();
}

// TAB 2: CIDR Calculator
function calcCIDR() {
    const cidrText = document.getElementById('cidrInput').value.trim();
    const hostNeeded = parseInt(document.getElementById('hostNeeded').value, 10) || 0;
    const resultsContainer = document.getElementById('cidrResults');

    const parts = cidrText.split('/');
    if (parts.length !== 2) {
        resultsContainer.innerHTML = '<div class="info-box" style="border-color:var(--danger);color:var(--danger)"><i class="fas fa-exclamation-circle"></i> Format salah! Gunakan: 192.168.1.0/24</div>';
        return;
    }

    const ip = parts[0];
    const cidr = parseInt(parts[1], 10);

    if (isNaN(cidr) || cidr < 1 || cidr > 32) {
        resultsContainer.innerHTML = '<div class="info-box" style="border-color:var(--danger);color:var(--danger)"><i class="fas fa-exclamation-circle"></i> CIDR harus antara 1-32</div>';
        return;
    }

    const mask = cidrToMask(cidr);
    const maskStr = numToIp(mask);
    const ipNum = ipToNum(ip);
    const netAddr = ipNum & mask;
    const broadcast = netAddr | (~mask >>> 0);
    const totalHost = Math.pow(2, 32 - cidr) - 2;

    let recCidr = cidr;
    if (hostNeeded > 0) {
        for (let c = 30; c >= 1; c--) {
            if (Math.pow(2, 32 - c) - 2 >= hostNeeded) {
                recCidr = c;
            } else {
                break;
            }
        }
    }
    const recHosts = Math.pow(2, 32 - recCidr) - 2;

    resultsContainer.innerHTML = `
        <div class="result-item"><span class="result-label"><i class="fas fa-network-wired"></i> Input</span><span class="result-value">${cidrText}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-mask"></i> Subnet Mask</span><span class="result-value" onclick="copyVal('${maskStr}')">${maskStr}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-home"></i> Network</span><span class="result-value" onclick="copyVal('${numToIp(netAddr)}/${cidr}')">${numToIp(netAddr)}/${cidr}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-broadcast-tower"></i> Broadcast</span><span class="result-value" onclick="copyVal('${numToIp(broadcast)}')">${numToIp(broadcast)}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-users"></i> Total Host</span><span class="result-value">${totalHost > 0 ? totalHost.toLocaleString() : 0}</span></div>
        ${hostNeeded > 0 ? `<div class="result-item"><span class="result-label"><i class="fas fa-lightbulb" style="color:var(--warning)"></i> Rekomendasi CIDR</span><span class="result-value" style="color:var(--warning)" onclick="copyVal('/${recCidr}')">/${recCidr} (${recHosts.toLocaleString()} host)</span></div>` : ''}
        <div style="margin-top:1.25rem;font-size:0.75rem;color:var(--text-muted)"><i class="fas fa-info-circle"></i> Klik nilai untuk menyalin</div>
    `;
}

function resetCIDR() {
    document.getElementById('cidrInput').value = '192.168.1.0/24';
    document.getElementById('hostNeeded').value = '';
    calcCIDR();
}

// TAB 3: Subnet Table Builder
function buildSubnetTable() {
    const specs = [
        [8, '255.0.0.0', 16777214],
        [9, '255.128.0.0', 8388606],
        [10, '255.192.0.0', 4194302],
        [16, '255.255.0.0', 65534],
        [17, '255.255.128.0', 32766],
        [18, '255.255.192.0', 16382],
        [20, '255.255.240.0', 4094],
        [22, '255.255.252.0', 1022],
        [23, '255.255.254.0', 510],
        [24, '255.255.255.0', 254],
        [25, '255.255.255.128', 126],
        [26, '255.255.255.192', 62],
        [27, '255.255.255.224', 30],
        [28, '255.255.255.240', 14],
        [29, '255.255.255.248', 6],
        [30, '255.255.255.252', 2]
    ];

    const rows = specs.map(([cidr, mask, hosts]) => {
        const wc = mask.split('.').map(o => 255 - parseInt(o, 10)).join('.');
        const total = hosts + 2;
        const cls = cidr <= 8 ? 'A' : cidr <= 16 ? 'B' : 'C';
        return `<tr>
            <td>/${cidr}</td>
            <td>${mask}</td>
            <td>${wc}</td>
            <td>${hosts.toLocaleString()}</td>
            <td>${total.toLocaleString()}</td>
            <td>${cls}</td>
        </tr>`;
    }).join('');

    document.getElementById('subnetTable').innerHTML = `
        <thead>
            <tr>
                <th>CIDR</th>
                <th>Subnet Mask</th>
                <th>Wildcard Mask</th>
                <th>Total Host</th>
                <th>Total Alamat</th>
                <th>Kelas</th>
            </tr>
        </thead>
        <tbody>${rows}</tbody>
    `;
}

// TAB 4: IP to Binary
function calcBinary() {
    const ip = document.getElementById('binIpInput').value.trim();
    const mask = document.getElementById('binMaskInput').value.trim();
    const resultsContainer = document.getElementById('binaryResults');

    if (!/^(\d{1,3}\.){3}\d{1,3}$/.test(ip)) {
        return;
    }

    const toBin = (str) => str.split('.').map(n => {
        const b = parseInt(n, 10).toString(2).padStart(8, '0');
        return b.split('').map(bit => `<span class="${bit === '1' ? 'bit-1' : 'bit-0'}">${bit}</span>`).join('') + `<span class="bit-sep">.</span>`;
    }).join('');

    const ipBin = toBin(ip);
    const maskBin = mask && /^(\d{1,3}\.){3}\d{1,3}$/.test(mask) ? toBin(mask) : '';
    let andResult = '';
    let bcastBin = '';

    if (mask && /^(\d{1,3}\.){3}\d{1,3}$/.test(mask)) {
        const ipNum = ipToNum(ip);
        const maskNum = ipToNum(mask);
        const net = ipNum & maskNum;
        const bcast = net | (~maskNum >>> 0);
        andResult = `<div class="result-item"><span class="result-label"><i class="fas fa-home"></i> Network Address</span><span class="result-value" onclick="copyVal('${numToIp(net)}')">${numToIp(net)}</span></div>`;
        bcastBin = `<div class="result-item"><span class="result-label"><i class="fas fa-broadcast-tower"></i> Broadcast</span><span class="result-value" onclick="copyVal('${numToIp(bcast)}')">${numToIp(bcast)}</span></div>`;
    }

    resultsContainer.innerHTML = `
        <div style="margin-bottom:1rem;">
            <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:0.35rem;">IP Address: <strong style="color:var(--text-secondary)">${ip}</strong></div>
            <div class="binary-display">${ipBin}</div>
        </div>
        ${maskBin ? `<div style="margin-bottom:1rem;">
            <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:0.35rem;">Subnet Mask: <strong style="color:var(--text-secondary)">${mask}</strong></div>
            <div class="binary-display">${maskBin}</div>
        </div>` : ''}
        ${andResult}${bcastBin}
        <div style="margin-top:1rem;font-size:0.75rem;color:var(--text-muted)">
            <span style="color:var(--primary-light)">■</span> bit-1 &nbsp; <span style="color:var(--text-muted)">■</span> bit-0
        </div>
    `;
}

// TAB 5: Wildcard Mask Calculator
function calcWildcard() {
    const mask = document.getElementById('wcMaskInput').value.trim();
    const resultsContainer = document.getElementById('wildcardResults');

    if (!/^(\d{1,3}\.){3}\d{1,3}$/.test(mask)) {
        return;
    }

    const wc = mask.split('.').map(o => 255 - parseInt(o, 10)).join('.');
    const cidr = maskToCidr(mask);
    const totalHosts = Math.pow(2, 32 - cidr) - 2;

    resultsContainer.innerHTML = `
        <div class="result-item"><span class="result-label"><i class="fas fa-mask"></i> Subnet Mask</span><span class="result-value" onclick="copyVal('${mask}')">${mask}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-magic"></i> Wildcard Mask</span><span class="result-value" style="color:var(--warning)" onclick="copyVal('${wc}')">${wc}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-hashtag"></i> CIDR Prefix</span><span class="result-value" onclick="copyVal('/${cidr}')">/${cidr}</span></div>
        <div class="result-item"><span class="result-label"><i class="fas fa-users"></i> Total Host</span><span class="result-value">${totalHosts > 0 ? totalHosts.toLocaleString() : 0}</span></div>
        <div style="margin-top:1.25rem;padding:0.85rem;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.2);border-radius:var(--radius-md);font-size:0.825rem;color:var(--text-secondary)">
            <i class="fas fa-lightbulb" style="color:var(--warning);margin-right:0.35rem;"></i> Wildcard mask digunakan dalam ACL Cisco dan konfigurasi OSPF.
        </div>
    `;
}

function wcFromCidr() {
    const cidr = document.getElementById('wcCidrSelect').value;
    if (!cidr) return;
    const mask = numToIp(cidrToMask(parseInt(cidr, 10)));
    document.getElementById('wcMaskInput').value = mask;
    calcWildcard();
}

// Clipboard Copy Utility
function copyVal(val) {
    if (!val) return;
    navigator.clipboard.writeText(val).then(() => {
        showToast('Disalin: ' + val);
    }).catch(() => {
        // Fallback for copy failure
    });
}

// Toast Notifications
function showToast(msg) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2200);
}

// Initial Calculations on Load
document.addEventListener('DOMContentLoaded', () => {
    calcIPv4();
    calcBinary();
    calcWildcard();
});
