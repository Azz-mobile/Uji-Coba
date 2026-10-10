/**
 * AZZ Learning Hub - Interactive Engine
 */

// Theme Management
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('azz-theme') || 'dark';

document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('azz-theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Data Soal Dataset
const soalData = [
    { id: 1, kelas: 'X', topic: 'jaringan', diff: 'easy', q: 'Apa kepanjangan dari IP?', opts: ['Internet Protocol', 'Interface Protocol', 'Internal Protocol', 'Internet Port'], ans: 0 },
    { id: 2, kelas: 'X', topic: 'jaringan', diff: 'easy', q: 'Berapa oktet yang dimiliki oleh IPv4?', opts: ['2', '4', '6', '8'], ans: 1 },
    { id: 3, kelas: 'X', topic: 'jaringan', diff: 'easy', q: 'Perangkat jaringan yang bekerja pada Layer 1 adalah...', opts: ['Switch', 'Router', 'Hub', 'Bridge'], ans: 2 },
    { id: 4, kelas: 'X', topic: 'jaringan', diff: 'easy', q: 'Urutan warna kabel straight-through (T568B) pin 1 adalah...', opts: ['Putih-Hijau', 'Putih-Orange', 'Orange', 'Hijau'], ans: 1 },
    { id: 5, kelas: 'X', topic: 'jaringan', diff: 'medium', q: 'IP 127.0.0.1 dikenal sebagai...', opts: ['Default Gateway', 'Broadcast Address', 'Loopback Address', 'Public IP'], ans: 2 },
    { id: 6, kelas: 'X', topic: 'jaringan', diff: 'easy', q: 'Topologi jaringan yang semua perangkat terhubung ke satu titik pusat disebut...', opts: ['Bus', 'Ring', 'Star', 'Mesh'], ans: 2 },
    { id: 7, kelas: 'X', topic: 'hardware', diff: 'easy', q: 'CPU singkatan dari...', opts: ['Central Processing Unit', 'Computer Power Unit', 'Central Program User', 'Common Processing Unit'], ans: 0 },
    { id: 8, kelas: 'X', topic: 'jaringan', diff: 'medium', q: 'Protokol yang bertugas memberikan IP otomatis kepada client adalah...', opts: ['DNS', 'HTTP', 'DHCP', 'FTP'], ans: 2 },
    { id: 9, kelas: 'X', topic: 'jaringan', diff: 'easy', q: 'Kabel yang digunakan untuk menghubungkan PC ke switch adalah...', opts: ['Cross-over', 'Straight-through', 'Rollover', 'Coaxial'], ans: 1 },
    { id: 10, kelas: 'X', topic: 'jaringan', diff: 'medium', q: 'Layer OSI yang bertanggung jawab untuk pengiriman end-to-end adalah...', opts: ['Network', 'Transport', 'Session', 'Data Link'], ans: 1 },
    { id: 11, kelas: 'XI', topic: 'mikrotik', diff: 'medium', q: 'Perintah untuk melihat IP address di MikroTik CLI adalah...', opts: ['ip address show', 'ip address print', 'show ip', 'display ip'], ans: 1 },
    { id: 12, kelas: 'XI', topic: 'mikrotik', diff: 'medium', q: 'Chain yang digunakan untuk traffic yang melewati router MikroTik adalah...', opts: ['input', 'output', 'forward', 'prerouting'], ans: 2 },
    { id: 13, kelas: 'XI', topic: 'linux', diff: 'medium', q: 'Perintah untuk melihat status service di Ubuntu adalah...', opts: ['service status', 'systemctl status', 'ps status', 'check service'], ans: 1 },
    { id: 14, kelas: 'XI', topic: 'jaringan', diff: 'medium', q: 'Berapa host yang dapat digunakan pada subnet /25?', opts: ['128', '126', '64', '62'], ans: 1 },
    { id: 15, kelas: 'XI', topic: 'mikrotik', diff: 'hard', q: 'Apa fungsi dari PCQ di Queue Tree MikroTik?', opts: ['Password Controlled Queue', 'Per Connection Queue', 'Public Connection Queue', 'Priority Connection Quality'], ans: 1 },
    { id: 16, kelas: 'XI', topic: 'cisco', diff: 'medium', q: 'Perintah Cisco untuk membuat VLAN 10 adalah...', opts: ['vlan create 10', 'create vlan 10', 'vlan 10', 'make vlan 10'], ans: 2 },
    { id: 17, kelas: 'XI', topic: 'linux', diff: 'medium', q: 'File konfigurasi network di Ubuntu 20.04 menggunakan...', opts: ['/etc/network/interfaces', '/etc/netplan/*.yaml', '/etc/ifcfg-eth0', '/etc/network.conf'], ans: 1 },
    { id: 18, kelas: 'XI', topic: 'security', diff: 'medium', q: 'Serangan yang mencoba semua kombinasi password secara sistematis disebut...', opts: ['Phishing', 'SQL Injection', 'Brute Force', 'DoS'], ans: 2 },
    { id: 19, kelas: 'XI', topic: 'fiber', diff: 'medium', q: 'Satuan yang digunakan untuk mengukur redaman fiber optik adalah...', opts: ['Hz', 'Watt', 'dB', 'm/s'], ans: 2 },
    { id: 20, kelas: 'XI', topic: 'wireless', diff: 'medium', q: 'Standar WiFi dengan kecepatan maksimum 9.6 Gbps adalah...', opts: ['802.11ac', '802.11n', '802.11ax', '802.11g'], ans: 2 },
    { id: 21, kelas: 'XII', topic: 'mikrotik', diff: 'hard', q: 'Perintah MikroTik untuk backup konfigurasi adalah...', opts: ['/system backup save name=backup', '/config save backup', 'save config /backup', '/backup system save'], ans: 0 },
    { id: 22, kelas: 'XII', topic: 'cisco', diff: 'hard', q: 'Fungsi spanning tree protocol (STP) adalah...', opts: ['Load balancing', 'Mencegah loop jaringan', 'Enkripsi data', 'Routing dinamis'], ans: 1 },
    { id: 23, kelas: 'XII', topic: 'linux', diff: 'hard', q: 'Perintah untuk melihat port yang sedang terbuka dan listen di Linux adalah...', opts: ['netstat -tulpn', 'ifconfig -a', 'route -n', 'ps aux'], ans: 0 },
    { id: 24, kelas: 'XII', topic: 'fiber', diff: 'hard', q: 'Alat yang digunakan untuk mendeteksi lokasi kerusakan pada kabel fiber optik adalah...', opts: ['OPM', 'OLS', 'OTDR', 'VFL'], ans: 2 },
    { id: 25, kelas: 'XII', topic: 'security', diff: 'hard', q: 'Protokol VPN yang paling modern dan cepat saat ini adalah...', opts: ['PPTP', 'L2TP', 'OpenVPN', 'WireGuard'], ans: 3 },
    { id: 26, kelas: 'UKK', topic: 'jaringan', diff: 'medium', q: 'Network address dari IP 192.168.5.130/26 adalah...', opts: ['192.168.5.0', '192.168.5.64', '192.168.5.128', '192.168.5.192'], ans: 2 },
    { id: 27, kelas: 'UKK', topic: 'jaringan', diff: 'hard', q: 'Broadcast address dari 172.16.50.0/20 adalah...', opts: ['172.16.63.255', '172.16.50.255', '172.16.55.255', '172.16.15.255'], ans: 0 },
    { id: 28, kelas: 'UKK', topic: 'mikrotik', diff: 'hard', q: 'Konfigurasi NAT masquerade di MikroTik dilakukan pada chain...', opts: ['input', 'output', 'srcnat', 'dstnat'], ans: 2 },
    { id: 29, kelas: 'UKK', topic: 'fiber', diff: 'medium', q: 'Standar redaman maksimum untuk fusion splice yang acceptable adalah...', opts: ['1 dB', '0.5 dB', '0.1 dB', '0.01 dB'], ans: 2 },
    { id: 30, kelas: 'UKK', topic: 'linux', diff: 'hard', q: 'Perintah untuk menginstall web server Apache di Ubuntu adalah...', opts: ['apt install httpd', 'yum install apache', 'apt install apache2', 'apt-get install www'], ans: 2 },
    { id: 31, kelas: 'BNSP', topic: 'jaringan', diff: 'hard', q: 'Suatu network 192.168.10.0/24 dibagi menjadi 4 subnet sama besar. CIDR yang digunakan adalah...', opts: ['/25', '/26', '/27', '/28'], ans: 1 },
    { id: 32, kelas: 'BNSP', topic: 'cisco', diff: 'hard', q: 'Perintah untuk menyimpan konfigurasi running-config ke startup-config di Cisco adalah...', opts: ['save config', 'write config', 'copy running-config startup-config', 'store config'], ans: 2 },
    { id: 33, kelas: 'BNSP', topic: 'security', diff: 'hard', q: 'Tiga pilar keamanan informasi yang dikenal sebagai CIA Triad terdiri dari...', opts: ['Confidentiality, Integrity, Availability', 'Control, Interface, Authentication', 'Cipher, Integrity, Access', 'Confidentiality, Infrastructure, Authentication'], ans: 0 },
    { id: 34, kelas: 'BNSP', topic: 'mikrotik', diff: 'hard', q: 'Untuk membatasi bandwidth client 2Mbps download dan 1Mbps upload di Simple Queue MikroTik, parameter max-limit yang benar adalah...', opts: ['2M/1M', '1M/2M', '2048k/1024k', '2000000/1000000'], ans: 0 },
    { id: 35, kelas: 'BNSP', topic: 'fiber', diff: 'hard', q: 'Diameter cladding kabel fiber optik standar (baik SMF maupun MMF) adalah...', opts: ['125 μm', '50 μm', '62.5 μm', '9 μm'], ans: 0 }
];

let currentKelas = 'all';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const diffFilter = document.getElementById('diffFilter');
const topicFilter = document.getElementById('topicFilter');
const soalGrid = document.getElementById('soalGrid');
const soalCount = document.getElementById('soalCount');

// Event Listeners
searchInput.addEventListener('input', () => {
    toggleClearButton();
    renderSoal();
});

clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    toggleClearButton();
    renderSoal();
});

diffFilter.addEventListener('change', renderSoal);
topicFilter.addEventListener('change', renderSoal);

function toggleClearButton() {
    clearSearch.style.display = searchInput.value ? 'block' : 'none';
}

function selectKelas(el, kelas) {
    document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    
    // Sync Stat Cards
    document.querySelectorAll('.stat-card').forEach(sc => {
        sc.classList.toggle('active', sc.dataset.filter === kelas);
    });

    currentKelas = kelas;
    renderSoal();
}

function filterKelas(kelas) {
    currentKelas = kelas;
    
    // Sync Category Tabs
    document.querySelectorAll('.cat-tab').forEach(b => {
        b.classList.toggle('active', b.dataset.kelas === kelas);
    });

    // Sync Stat Cards
    document.querySelectorAll('.stat-card').forEach(sc => {
        sc.classList.toggle('active', sc.dataset.filter === kelas);
    });

    renderSoal();
}

function renderSoal() {
    const search = searchInput.value.toLowerCase().trim();
    const diff = diffFilter.value;
    const topic = topicFilter.value;

    let filtered = soalData.filter(s => {
        const matchKelas = currentKelas === 'all' || s.kelas === currentKelas;
        const matchDiff = diff === 'all' || s.diff === diff;
        const matchTopic = topic === 'all' || s.topic === topic;
        const matchSearch = s.q.toLowerCase().includes(search) || s.opts.some(o => o.toLowerCase().includes(search));
        return matchKelas && matchDiff && matchTopic && matchSearch;
    });

    soalCount.textContent = `Menampilkan ${filtered.length} Soal`;

    if (filtered.length === 0) {
        soalGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search-minus"></i>
                <h3>Soal Tidak Ditemukan</h3>
                <p>Coba gunakan kata kunci lain atau ubah filter pencarian Anda.</p>
            </div>
        `;
        return;
    }

    const letters = ['A', 'B', 'C', 'D'];
    const diffClass = { easy: 'badge-diff-easy', medium: 'badge-diff-medium', hard: 'badge-diff-hard' };
    const diffLabel = { easy: 'Mudah', medium: 'Sedang', hard: 'Sulit' };

    soalGrid.innerHTML = filtered.map(s => `
        <div class="soal-card">
            <div class="soal-card-header">
                <div class="soal-badges">
                    <span class="badge badge-kelas">Kelas ${s.kelas}</span>
                    <span class="badge ${diffClass[s.diff]}">${diffLabel[s.diff]}</span>
                    <span class="badge badge-topic">${s.topic.toUpperCase()}</span>
                </div>
                <span class="soal-num">#${s.id}</span>
            </div>
            
            <div class="soal-question">${s.q}</div>
            
            <div class="soal-options" id="opts-${s.id}">
                ${s.opts.map((opt, i) => `
                    <div class="soal-option">
                        <span class="opt-label">${letters[i]}.</span>
                        <span>${opt}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="soal-footer">
                <button class="show-answer-btn" onclick="showAnswer(this, ${s.id}, ${s.ans})">
                    <i class="fas fa-eye"></i> Lihat Jawaban
                </button>
                <span class="soal-topic-footer">
                    <i class="fas fa-tag"></i> Topik: ${s.topic}
                </span>
            </div>
        </div>
    `).join('');
}

function showAnswer(btn, id, ansIdx) {
    const container = document.getElementById('opts-' + id);
    if (!container) return;

    container.querySelectorAll('.soal-option').forEach((el, i) => {
        el.classList.toggle('correct', i === ansIdx);
    });

    const letters = ['A', 'B', 'C', 'D'];
    btn.innerHTML = `<i class="fas fa-check-circle"></i> Jawaban: ${letters[ansIdx]}`;
    btn.disabled = true;
}

// Initial Render
renderSoal();
