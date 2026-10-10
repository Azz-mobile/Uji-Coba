/* ==========================================
   AZZ DOWNLOAD CENTER - JAVASCRIPT
   Interactive Functionality & Logic
   ========================================== */

// Theme Management
const savedTheme = localStorage.getItem('azz-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
    const icon = themeToggleBtn.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('azz-theme', newTheme);
        
        icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        showToast(`Mode ${newTheme === 'dark' ? 'Gelap' : 'Terang'} diaktifkan`, 'info');
    });
}

// Download Data Store
const dlData = [
    { cat: 'modul', icon: 'fas fa-book', color: '#2563EB', title: 'Modul Jaringan Dasar Kelas X', desc: 'Modul lengkap pembelajaran jaringan komputer dasar untuk siswa kelas X SMK TKJ. Mencakup OSI model, TCP/IP, pengkabelan, dan konfigurasi dasar.', size: '2.4 MB', pages: '120 hal', format: 'PDF', downloads: 1250 },
    { cat: 'modul', icon: 'fas fa-router', color: '#8B5CF6', title: 'Modul Konfigurasi MikroTik', desc: 'Panduan lengkap konfigurasi MikroTik RouterOS dari dasar hingga lanjut. DHCP, NAT, Firewall, Hotspot, VPN, dan bandwidth management.', size: '3.8 MB', pages: '185 hal', format: 'PDF', downloads: 2100 },
    { cat: 'modul', icon: 'fab fa-linux', color: '#F59E0B', title: 'Modul Administrasi Linux Server', desc: 'Modul pembelajaran Linux Server Ubuntu 22.04 LTS. Instalasi, konfigurasi jaringan, web server, DNS, DHCP, dan keamanan server.', size: '4.2 MB', pages: '210 hal', format: 'PDF', downloads: 1875 },
    { cat: 'modul', icon: 'fas fa-satellite-dish', color: '#10B981', title: 'Modul Fiber Optik & Splicing', desc: 'Panduan praktik fiber optik lengkap: jenis kabel, connector, fusion splicing, penggunaan OTDR dan OPM, serta standar instalasi.', size: '5.1 MB', pages: '156 hal', format: 'PDF', downloads: 980 },
    { cat: 'modul', icon: 'fas fa-shield-alt', color: '#EF4444', title: 'Modul Keamanan Jaringan', desc: 'Materi keamanan jaringan komputer: firewall, enkripsi, VPN, IDS/IPS, ethical hacking dasar, dan implementasi keamanan.', size: '3.5 MB', pages: '168 hal', format: 'PDF', downloads: 1420 },
    { cat: 'modul', icon: 'fas fa-server', color: '#06B6D4', title: 'Modul Cisco Networking Dasar', desc: 'Pengenalan Cisco IOS, konfigurasi switch dan router, VLAN, Spanning Tree, routing statis dan dinamis untuk pemula.', size: '4.7 MB', pages: '200 hal', format: 'PDF', downloads: 1650 },
    { cat: 'ebook', icon: 'fas fa-graduation-cap', color: '#2563EB', title: 'Ebook Persiapan UKK TKJ Lengkap', desc: 'Panduan lengkap persiapan Uji Kompetensi Keahlian (UKK) TKJ. 500+ soal latihan, tips dan trik ujian, serta contoh jawaban.', size: '6.2 MB', pages: '280 hal', format: 'PDF', downloads: 3200 },
    { cat: 'ebook', icon: 'fas fa-network-wired', color: '#10B981', title: 'Ebook Subnetting & IP Address Mastery', desc: 'Ebook khusus subnetting dari dasar hingga mahir. Ratusan soal latihan dengan pembahasan lengkap. Wajib untuk ujian TKJ.', size: '2.8 MB', pages: '95 hal', format: 'PDF', downloads: 4100 },
    { cat: 'ebook', icon: 'fas fa-certificate', color: '#F59E0B', title: 'Ebook Persiapan Sertifikasi BNSP TKJ', desc: 'Panduan persiapan sertifikasi BNSP (Badan Nasional Sertifikasi Profesi) untuk skema kompetensi Teknik Komputer dan Jaringan.', size: '3.9 MB', pages: '145 hal', format: 'PDF', downloads: 1890 },
    { cat: 'cv', icon: 'fas fa-file-alt', color: '#8B5CF6', title: 'Template CV ATS-Friendly TKJ (Modern)', desc: 'Template CV profesional yang lolos sistem ATS. Desain bersih dan modern, cocok untuk fresh graduate SMK TKJ melamar kerja pertama.', size: '245 KB', pages: '1 hal', format: 'DOCX', downloads: 5600 },
    { cat: 'cv', icon: 'fas fa-file-pdf', color: '#EF4444', title: 'Template CV Network Engineer (Senior)', desc: 'Template CV untuk posisi Network Engineer dengan pengalaman 2+ tahun. Layout profesional dengan section skill teknis yang detail.', size: '189 KB', pages: '2 hal', format: 'DOCX', downloads: 2300 },
    { cat: 'cv', icon: 'fas fa-file-word', color: '#06B6D4', title: 'Template CV IT Support Minimalis', desc: 'Template CV minimalis dan bersih untuk posisi IT Support dan Helpdesk. Fokus pada skill teknis dan pengalaman troubleshooting.', size: '175 KB', pages: '1 hal', format: 'DOCX', downloads: 3100 },
    { cat: 'surat', icon: 'fas fa-envelope', color: '#10B981', title: 'Template Surat Lamaran Kerja TKJ', desc: 'Template surat lamaran kerja formal untuk posisi di bidang IT dan jaringan. Tersedia dalam Bahasa Indonesia dan Bahasa Inggris.', size: '45 KB', pages: '1 hal', format: 'DOCX', downloads: 4200 },
    { cat: 'surat', icon: 'fas fa-envelope-open', color: '#2563EB', title: 'Template Surat Lamaran PKL/Magang', desc: 'Template surat lamaran Praktik Kerja Lapangan (PKL) yang formal dan profesional untuk siswa SMK TKJ kelas XI.', size: '38 KB', pages: '1 hal', format: 'DOCX', downloads: 6800 },
    { cat: 'laporan', icon: 'fas fa-file-contract', color: '#F59E0B', title: 'Template Laporan PKL TKJ Standar', desc: 'Template laporan Praktik Kerja Lapangan (PKL) lengkap sesuai format standar SMK. Termasuk cover, kata pengantar, dan lampiran.', size: '892 KB', pages: '30+ hal', format: 'DOCX', downloads: 7500 },
    { cat: 'laporan', icon: 'fas fa-book-open', color: '#EF4444', title: 'Template Laporan Praktikum Jaringan', desc: 'Template laporan praktikum jaringan komputer standar lab TKJ. Mencakup tujuan, alat, langkah kerja, hasil, analisis, dan kesimpulan.', size: '458 KB', pages: '15 hal', format: 'DOCX', downloads: 3900 },
    { cat: 'laporan', icon: 'fas fa-project-diagram', color: '#8B5CF6', title: 'Template Laporan Proyek Akhir TKJ', desc: 'Template laporan proyek akhir (capstone project) kelas XII TKJ yang komprehensif. Standar penulisan ilmiah SMK dengan panduan pengisian.', size: '1.2 MB', pages: '50+ hal', format: 'DOCX', downloads: 2150 }
];

// State Management
let currentCat = 'all';
let searchQuery = '';

// Category Filter Function
function filterCat(el, cat) {
    document.querySelectorAll('.cat-tab').forEach(btn => btn.classList.remove('active'));
    el.classList.add('active');
    currentCat = cat;
    renderDl();
}

// Search Function
function handleSearch(query) {
    searchQuery = query.toLowerCase().trim();
    const clearBtn = document.getElementById('searchClear');
    if (clearBtn) {
        clearBtn.style.display = searchQuery ? 'block' : 'none';
    }
    renderDl();
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
        handleSearch('');
        searchInput.focus();
    }
}

// Render Download Items Grid
function renderDl() {
    const grid = document.getElementById('dlGrid');
    const emptyState = document.getElementById('emptyState');
    const resultCount = document.getElementById('resultCount');
    
    if (!grid) return;

    // Filter Logic
    const filtered = dlData.filter(item => {
        const matchesCat = (currentCat === 'all' || item.cat === currentCat);
        const matchesSearch = !searchQuery || 
            item.title.toLowerCase().includes(searchQuery) || 
            item.desc.toLowerCase().includes(searchQuery) ||
            item.format.toLowerCase().includes(searchQuery);
        return matchesCat && matchesSearch;
    });

    // Color & Badge Styling Config
    const catStyles = {
        modul: { bg: 'rgba(37, 99, 235, 0.15)', color: '#60A5FA', label: 'Modul PDF' },
        ebook: { bg: 'rgba(16, 185, 129, 0.15)', color: '#6EE7B7', label: 'Ebook AZZ' },
        cv: { bg: 'rgba(139, 92, 246, 0.15)', color: '#A78BFA', label: 'Template CV' },
        surat: { bg: 'rgba(6, 182, 212, 0.15)', color: '#67E8F9', label: 'Template Surat' },
        laporan: { bg: 'rgba(245, 158, 11, 0.15)', color: '#FCD34D', label: 'Template Laporan' }
    };

    // Update Result Count Text
    if (resultCount) {
        resultCount.textContent = `Menampilkan ${filtered.length} dari ${dlData.length} resource`;
    }

    // Handle Empty Result
    if (filtered.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    } else {
        if (emptyState) emptyState.style.display = 'none';
    }

    // Inject Grid Content
    grid.innerHTML = filtered.map(d => {
        const style = catStyles[d.cat] || { bg: 'rgba(255, 255, 255, 0.1)', color: '#FFF', label: 'Umum' };
        return `
            <div class="dl-card">
                <div class="dl-card-header">
                    <div class="dl-type-icon" style="background: ${d.color}1A; color: ${d.color};">
                        <i class="${d.icon}"></i>
                    </div>
                    <span class="cat-badge" style="background: ${style.bg}; color: ${style.color};">
                        ${style.label}
                    </span>
                </div>
                <h3 class="dl-title">${d.title}</h3>
                <p class="dl-desc">${d.desc}</p>
                <div class="dl-meta">
                    <span class="dl-meta-item" title="Format File">
                        <i class="fas fa-file"></i> ${d.format}
                    </span>
                    <span class="dl-meta-item" title="Ukuran File">
                        <i class="fas fa-weight-hanging"></i> ${d.size}
                    </span>
                    <span class="dl-meta-item" title="Jumlah Halaman">
                        <i class="fas fa-book-open"></i> ${d.pages}
                    </span>
                    <span class="dl-meta-item" title="Total Unduhan">
                        <i class="fas fa-download"></i> ${d.downloads.toLocaleString()}x
                    </span>
                </div>
                <div class="dl-footer">
                    <button class="btn-download" onclick="simulateDownload('${escapeQuotes(d.title)}')">
                        <i class="fas fa-download"></i> Download Gratis
                    </button>
                    <button class="btn-preview" onclick="showToast('Preview untuk ${escapeQuotes(d.title)} akan segera tersedia', 'info')" title="Pratinjau Dokumen">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Utility Helper
function escapeQuotes(str) {
    return str.replace(/'/g, "\'");
}

// Simulate Download Event
function simulateDownload(title) {
    showToast(`Memproses unduhan: ${title.substring(0, 30)}...`, 'info');
    setTimeout(() => {
        showToast(`✅ Berhasil mengunduh ${title.substring(0, 25)}...`, 'success');
    }, 1800);
}

// Toast Notification System
function showToast(msg, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const iconClass = type === 'success' ? 'fas fa-check-circle' : 'fas fa-info-circle';
    toast.innerHTML = `<i class="${iconClass}"></i> <span>${msg}</span>`;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

// Initial Render on Page Load
document.addEventListener('DOMContentLoaded', () => {
    renderDl();
});