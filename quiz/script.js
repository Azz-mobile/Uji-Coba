/* AZZ Quiz TKJ - Interactive Application Script */

const categories = [
  { id: 'jaringan', name: 'Jaringan Dasar', icon: 'fas fa-network-wired', color: '#2563EB', count: 10 },
  { id: 'mikrotik', name: 'Mikrotik', icon: 'fas fa-router', color: '#8B5CF6', count: 10 },
  { id: 'linux', name: 'Linux Server', icon: 'fab fa-linux', color: '#F59E0B', count: 10 },
  { id: 'fiber', name: 'Fiber Optik', icon: 'fas fa-satellite-dish', color: '#10B981', count: 10 },
  { id: 'security', name: 'Keamanan Jaringan', icon: 'fas fa-shield-alt', color: '#EF4444', count: 10 },
  { id: 'cisco', name: 'Cisco Dasar', icon: 'fas fa-server', color: '#06B6D4', count: 10 },
];

const allQuestions = [
  // JARINGAN
  { cat: 'jaringan', diff: 'easy', q: 'Kepanjangan dari LAN adalah...', opts: ['Local Area Network', 'Large Area Network', 'Linked Area Network', 'Local Access Node'], ans: 0, exp: 'LAN singkatan dari Local Area Network, jaringan yang mencakup area terbatas.' },
  { cat: 'jaringan', diff: 'easy', q: 'Berapa layer yang ada pada model OSI?', opts: ['5', '6', '7', '8'], ans: 2, exp: 'Model OSI memiliki 7 layer: Physical, Data Link, Network, Transport, Session, Presentation, Application.' },
  { cat: 'jaringan', diff: 'easy', q: 'Layer berapa yang bertanggung jawab untuk pengalamatan IP?', opts: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4'], ans: 2, exp: 'Layer 3 (Network Layer) bertanggung jawab untuk pengalamatan logis (IP) dan routing.' },
  { cat: 'jaringan', diff: 'medium', q: 'Network Address dari 192.168.1.50/26 adalah...', opts: ['192.168.1.0', '192.168.1.32', '192.168.1.48', '192.168.1.64'], ans: 1, exp: 'Untuk /26, subnet kelipatan 64. Host 50 berada di subnet 192.168.1.32 (32-63).' },
  { cat: 'jaringan', diff: 'medium', q: 'Berapa jumlah host yang dapat digunakan pada subnet /27?', opts: ['30', '32', '62', '64'], ans: 0, exp: 'Subnet /27 memiliki 32 alamat (2^5). Host yang dapat digunakan = 32 - 2 = 30.' },
  { cat: 'jaringan', diff: 'medium', q: 'Protokol yang digunakan untuk menerjemahkan domain ke IP adalah...', opts: ['DHCP', 'DNS', 'HTTP', 'FTP'], ans: 1, exp: 'DNS (Domain Name System) menerjemahkan nama domain seperti google.com menjadi alamat IP.' },
  { cat: 'jaringan', diff: 'hard', q: 'Broadcast address dari network 10.10.0.0/20 adalah...', opts: ['10.10.15.255', '10.10.16.255', '10.10.255.255', '10.255.255.255'], ans: 0, exp: '/20 berarti subnet mask 255.255.240.0. Network 10.10.0.0 broadcast di 10.10.15.255.' },
  { cat: 'jaringan', diff: 'hard', q: 'Protokol mana yang menggunakan three-way handshake?', opts: ['UDP', 'IP', 'TCP', 'ICMP'], ans: 2, exp: 'TCP menggunakan three-way handshake (SYN, SYN-ACK, ACK) untuk membuat koneksi yang andal.' },
  { cat: 'jaringan', diff: 'easy', q: 'Apa fungsi dari MAC Address?', opts: ['Pengalamatan logical', 'Pengalamatan fisik', 'Enkripsi data', 'Routing paket'], ans: 1, exp: 'MAC Address adalah identifikasi unik perangkat jaringan pada layer Data Link (Layer 2).' },
  { cat: 'jaringan', diff: 'medium', q: 'Perangkat yang bekerja pada layer 3 OSI adalah...', opts: ['Hub', 'Switch', 'Router', 'Repeater'], ans: 2, exp: 'Router bekerja pada layer 3 (Network) untuk melakukan routing antar jaringan berdasarkan IP.' },
  
  // MIKROTIK
  { cat: 'mikrotik', diff: 'easy', q: 'Perintah untuk melihat semua interface di MikroTik CLI adalah...', opts: ['interface show', 'interface print', 'show interface', 'display interface'], ans: 1, exp: 'Di MikroTik CLI, perintah "interface print" digunakan untuk melihat semua interface yang ada.' },
  { cat: 'mikrotik', diff: 'easy', q: 'Default username untuk login MikroTik pertama kali adalah...', opts: ['root', 'admin', 'user', 'mikrotik'], ans: 1, exp: 'Username default MikroTik adalah "admin" dengan password kosong (blank).' },
  { cat: 'mikrotik', diff: 'medium', q: 'Apa fungsi dari fitur Queue di MikroTik?', opts: ['Firewall', 'Bandwidth management', 'VPN', 'DNS'], ans: 1, exp: 'Queue di MikroTik digunakan untuk manajemen bandwidth, membatasi atau menjamin kecepatan koneksi.' },
  { cat: 'mikrotik', diff: 'medium', q: 'Chain "forward" pada firewall MikroTik digunakan untuk...', opts: ['Traffic masuk router', 'Traffic keluar router', 'Traffic melewati router', 'Traffic lokal'], ans: 2, exp: 'Chain forward memproses paket yang melewati router (dari interface satu ke interface lain).' },
  { cat: 'mikrotik', diff: 'medium', q: 'Perintah untuk menambah IP address ke interface ether1 di MikroTik...', opts: ['ip address add 192.168.1.1/24 ether1', 'ip address add address=192.168.1.1/24 interface=ether1', 'set ip 192.168.1.1/24 ether1', 'ip add 192.168.1.1/24 int=ether1'], ans: 1, exp: 'Sintaks lengkap MikroTik untuk menambah IP: ip address add address=X.X.X.X/XX interface=ethX' },
  { cat: 'mikrotik', diff: 'hard', q: 'Apa perbedaan Simple Queue dengan Queue Tree di MikroTik?', opts: ['Simple Queue lebih cepat', 'Queue Tree mendukung PCQ', 'Simple Queue untuk upload saja', 'Tidak ada perbedaan'], ans: 1, exp: 'Queue Tree lebih fleksibel, mendukung Parent Queue, PCQ (Per Connection Queue), dan HTB.' },
  { cat: 'mikrotik', diff: 'easy', q: 'Winbox adalah aplikasi untuk...', opts: ['Monitoring jaringan', 'Remote management MikroTik', 'Scan jaringan', 'Enkripsi data'], ans: 1, exp: 'Winbox adalah aplikasi GUI resmi MikroTik untuk mengkonfigurasi RouterOS secara remote.' },
  { cat: 'mikrotik', diff: 'medium', q: 'Protokol apa yang digunakan Winbox untuk terhubung ke MikroTik?', opts: ['HTTP', 'SSH', 'Proprietary (MAC/IP)', 'Telnet'], ans: 2, exp: 'Winbox menggunakan protokol proprietary MikroTik yang bisa terkoneksi via MAC Address atau IP.' },
  { cat: 'mikrotik', diff: 'hard', q: 'Apa fungsi dari OSPF di MikroTik?', opts: ['DHCP dinamis', 'Dynamic routing protocol', 'VPN tunnel', 'Bandwidth limiter'], ans: 1, exp: 'OSPF (Open Shortest Path First) adalah protokol routing dinamis yang menentukan jalur terpendek.' },
  { cat: 'mikrotik', diff: 'hard', q: 'Masquerade pada MikroTik NAT berfungsi untuk...', opts: ['Memblok akses internet', 'Mengubah IP private ke public', 'Membatasi bandwidth', 'Redirect port'], ans: 1, exp: 'Masquerade (Source NAT) mengubah IP sumber private menjadi IP public untuk akses internet.' },

  // LINUX
  { cat: 'linux', diff: 'easy', q: 'Perintah untuk melihat isi direktori di Linux adalah...', opts: ['dir', 'list', 'ls', 'show'], ans: 2, exp: 'Perintah "ls" (list) digunakan untuk melihat isi direktori di Linux/Unix.' },
  { cat: 'linux', diff: 'easy', q: 'Perintah untuk berpindah direktori di Linux adalah...', opts: ['mv', 'cd', 'dir', 'go'], ans: 1, exp: 'Perintah "cd" (change directory) digunakan untuk berpindah dari satu direktori ke direktori lain.' },
  { cat: 'linux', diff: 'medium', q: 'Perintah untuk menginstall paket di Ubuntu/Debian adalah...', opts: ['yum install', 'pacman -S', 'apt install', 'dnf install'], ans: 2, exp: 'Ubuntu/Debian menggunakan APT (Advanced Package Tool). Perintah: sudo apt install nama-paket' },
  { cat: 'linux', diff: 'medium', q: 'File konfigurasi jaringan di Ubuntu 18.04+ menggunakan...', opts: ['interfaces', 'netplan', 'ifcfg', 'network.conf'], ans: 1, exp: 'Ubuntu 18.04+ menggunakan Netplan dengan file YAML di /etc/netplan/ untuk konfigurasi jaringan.' },
  { cat: 'linux', diff: 'hard', q: 'Perintah untuk melihat port yang sedang terbuka di Linux...', opts: ['netstat -an', 'ifconfig -a', 'route -n', 'arp -a'], ans: 0, exp: '"netstat -an" atau "ss -tulpn" menampilkan semua koneksi dan port yang sedang listen.' },
  { cat: 'linux', diff: 'easy', q: 'Perintah untuk melihat penggunaan disk di Linux adalah...', opts: ['ds -h', 'df -h', 'du -sh', 'diskusage'], ans: 1, exp: '"df -h" (disk free) menampilkan penggunaan ruang disk secara human-readable.' },
  { cat: 'linux', diff: 'medium', q: 'File permission 755 di Linux berarti...', opts: ['rwxr-xr-x', 'rwxrwxrwx', 'rw-r--r--', 'rwx------'], ans: 0, exp: '755 = rwxr-xr-x: owner=rwx(7), group=r-x(5), others=r-x(5). Owner bisa read/write/execute.' },
  { cat: 'linux', diff: 'hard', q: 'Untuk menjalankan service Apache secara otomatis saat boot...', opts: ['service apache2 start', 'systemctl start apache2', 'systemctl enable apache2', 'apache2 -k start'], ans: 2, exp: '"systemctl enable" membuat service dijalankan otomatis saat boot. "start" hanya untuk sekarang.' },
  { cat: 'linux', diff: 'medium', q: 'Perintah untuk melihat proses yang sedang berjalan secara real-time...', opts: ['ps aux', 'top', 'list proc', 'jobs -l'], ans: 1, exp: '"top" atau "htop" menampilkan proses yang berjalan secara real-time dengan penggunaan CPU/RAM.' },
  { cat: 'linux', diff: 'easy', q: 'Simbol ~ dalam Linux merujuk ke...', opts: ['Root directory', 'Current directory', 'Home directory user', 'Parent directory'], ans: 2, exp: 'Simbol ~ (tilde) adalah shortcut untuk home directory dari user yang sedang login.' },

  // FIBER OPTIK
  { cat: 'fiber', diff: 'easy', q: 'Satuan yang digunakan untuk mengukur redaman fiber optik adalah...', opts: ['dBm', 'dB', 'Watt', 'MHz'], ans: 1, exp: 'Redaman (attenuation) diukur dalam dB (decibel). Semakin kecil nilai dB, semakin baik kualitas fiber.' },
  { cat: 'fiber', diff: 'easy', q: 'Diameter core kabel single mode fiber optik adalah...', opts: ['50 μm', '62.5 μm', '8-10 μm', '125 μm'], ans: 2, exp: 'Single Mode Fiber (SMF) memiliki diameter core sangat kecil 8-10 μm untuk transmisi jarak jauh.' },
  { cat: 'fiber', diff: 'medium', q: 'Alat yang digunakan untuk mengukur redaman fiber optik adalah...', opts: ['OTDR', 'OPM', 'Multimeter', 'Spectrum Analyzer'], ans: 1, exp: 'OPM (Optical Power Meter) mengukur daya optik dan redaman. OTDR lebih untuk lokalisasi gangguan.' },
  { cat: 'fiber', diff: 'medium', q: 'Standar redaman maksimum untuk fusion splice fiber optik adalah...', opts: ['1 dB', '0.5 dB', '0.1 dB', '0.01 dB'], ans: 2, exp: 'Standar industri untuk fusion splice adalah < 0.1 dB. Semakin kecil semakin baik.' },
  { cat: 'fiber', diff: 'hard', q: 'OTDR digunakan untuk...', opts: ['Mengukur bandwidth', 'Mencari letak gangguan pada fiber', 'Mengkonversi sinyal optik', 'Menyambung fiber'], ans: 1, exp: 'OTDR (Optical Time Domain Reflectometer) digunakan untuk mendeteksi lokasi kerusakan/gangguan pada kabel fiber optik.' },
  { cat: 'fiber', diff: 'easy', q: 'Prinsip kerja fiber optik berdasarkan...', opts: ['Konduksi elektron', 'Refleksi total internal', 'Gelombang radio', 'Induksi magnetik'], ans: 1, exp: 'Fiber optik bekerja berdasarkan prinsip Total Internal Reflection (TIR) yang memantulkan cahaya di dalam core.' },
  { cat: 'fiber', diff: 'medium', q: 'Connector fiber optik yang paling umum digunakan untuk single mode adalah...', opts: ['BNC', 'SC', 'RJ45', 'SFP'], ans: 1, exp: 'SC (Subscriber Connector) adalah connector fiber optik yang paling umum untuk single mode.' },
  { cat: 'fiber', diff: 'hard', q: 'Berapa rentang panjang gelombang (wavelength) yang digunakan oleh single mode fiber untuk jarak jauh?', opts: ['850 nm', '1310 nm dan 1550 nm', '780 nm', '630 nm'], ans: 1, exp: 'SMF menggunakan 1310 nm dan 1550 nm. Sementara multimode menggunakan 850 nm dan 1300 nm.' },
  { cat: 'fiber', diff: 'medium', q: 'Alat yang digunakan untuk memotong fiber optik sebelum fusion splice disebut...', opts: ['Fiber stripper', 'Fiber cleaver', 'Fusion splicer', 'OPM'], ans: 1, exp: 'Fiber cleaver digunakan untuk memotong fiber optik secara presisi agar permukaannya rata sempurna.' },
  { cat: 'fiber', diff: 'easy', q: 'Lapisan terluar dari kabel fiber optik yang berfungsi sebagai pelindung mekanis adalah...', opts: ['Core', 'Cladding', 'Buffer', 'Jacket'], ans: 3, exp: 'Jacket adalah lapisan terluar yang melindungi kabel dari kerusakan fisik, panas, dan lingkungan.' },

  // SECURITY
  { cat: 'security', diff: 'easy', q: 'CIA dalam keamanan jaringan singkatan dari...', opts: ['Computer Internet Access', 'Confidentiality Integrity Availability', 'Central Intelligence Agency', 'Cipher Information Algorithm'], ans: 1, exp: 'CIA Triad adalah tiga pilar keamanan: Confidentiality (kerahasiaan), Integrity (integritas), Availability (ketersediaan).' },
  { cat: 'security', diff: 'easy', q: 'Serangan yang mencoba menebak password dengan mencoba semua kombinasi disebut...', opts: ['SQL Injection', 'Brute Force', 'Phishing', 'DDoS'], ans: 1, exp: 'Brute Force Attack mencoba semua kemungkinan kombinasi password secara sistematis.' },
  { cat: 'security', diff: 'medium', q: 'Protokol yang digunakan untuk mengamankan komunikasi web (HTTPS) adalah...', opts: ['SSL/TLS', 'SSH', 'IPSec', 'PPTP'], ans: 0, exp: 'HTTPS menggunakan SSL (Secure Sockets Layer) atau TLS (Transport Layer Security) untuk enkripsi.' },
  { cat: 'security', diff: 'medium', q: 'Apa yang dimaksud dengan Man-in-the-Middle Attack?', opts: ['Serangan langsung ke server', 'Penyadapan komunikasi antara dua pihak', 'Serangan DoS', 'Injection malware'], ans: 1, exp: 'MITM Attack adalah serangan di mana penyerang menyisipkan diri di antara dua pihak yang berkomunikasi.' },
  { cat: 'security', diff: 'hard', q: 'Algoritma enkripsi asimetris yang paling umum digunakan adalah...', opts: ['AES', 'DES', 'RSA', 'MD5'], ans: 2, exp: 'RSA (Rivest-Shamir-Adleman) adalah algoritma enkripsi asimetris paling populer menggunakan pasangan kunci publik-privat.' },
  { cat: 'security', diff: 'easy', q: 'Apa fungsi dari Firewall dalam keamanan jaringan?', opts: ['Mempercepat koneksi', 'Memfilter lalu lintas jaringan', 'Mengenkripsi data', 'Mengalokasikan IP address'], ans: 1, exp: 'Firewall memfilter dan mengontrol lalu lintas jaringan berdasarkan aturan yang ditetapkan administrator.' },
  { cat: 'security', diff: 'medium', q: 'IDS dalam keamanan jaringan singkatan dari...', opts: ['Internet Data System', 'Intrusion Detection System', 'Internal Defense Shield', 'Integrated Digital Security'], ans: 1, exp: 'IDS (Intrusion Detection System) memantau jaringan untuk mendeteksi aktivitas mencurigakan atau serangan.' },
  { cat: 'security', diff: 'hard', q: 'Protokol VPN yang paling aman dan modern saat ini adalah...', opts: ['PPTP', 'L2TP', 'OpenVPN', 'WireGuard'], ans: 3, exp: 'WireGuard adalah protokol VPN modern yang lebih cepat dan lebih aman dibanding protokol lama seperti PPTP.' },
  { cat: 'security', diff: 'medium', q: 'Apa itu Social Engineering dalam konteks keamanan?', opts: ['Rekayasa perangkat lunak', 'Manipulasi manusia untuk mendapat informasi rahasia', 'Serangan DDoS', 'Enkripsi sosial'], ans: 1, exp: 'Social Engineering adalah teknik manipulasi psikologis untuk menipu orang agar memberikan informasi rahasia.' },
  { cat: 'security', diff: 'easy', q: 'Hash MD5 menghasilkan output berukuran...', opts: ['64 bit', '128 bit', '256 bit', '512 bit'], ans: 1, exp: 'MD5 menghasilkan hash 128 bit (32 karakter hexadecimal). Namun MD5 sudah tidak aman untuk kriptografi.' },

  // CISCO
  { cat: 'cisco', diff: 'easy', q: 'Mode operasi dasar di Cisco IOS setelah login adalah...', opts: ['Global Config Mode', 'Privileged EXEC Mode', 'User EXEC Mode', 'Interface Mode'], ans: 2, exp: 'Setelah login, Cisco IOS masuk ke User EXEC Mode (ditandai dengan prompt Switch>).' },
  { cat: 'cisco', diff: 'easy', q: 'Perintah untuk masuk ke Privileged EXEC Mode di Cisco...', opts: ['login', 'su', 'enable', 'config'], ans: 2, exp: 'Perintah "enable" digunakan untuk masuk ke Privileged EXEC Mode (prompt Switch#).' },
  { cat: 'cisco', diff: 'medium', q: 'Perintah untuk menyimpan konfigurasi running ke startup config...', opts: ['save config', 'write memory', 'copy run start', 'store config'], ans: 2, exp: '"copy running-config startup-config" atau "write memory" menyimpan konfigurasi agar tidak hilang saat restart.' },
  { cat: 'cisco', diff: 'medium', q: 'Apa fungsi VLAN dalam jaringan Cisco?', opts: ['Mempercepat transfer data', 'Memisahkan jaringan secara logis', 'Mengenkripsi data', 'Membatasi bandwidth'], ans: 1, exp: 'VLAN (Virtual LAN) memisahkan jaringan secara logis dalam satu switch fisik untuk keamanan dan efisiensi.' },
  { cat: 'cisco', diff: 'hard', q: 'Protokol STP (Spanning Tree Protocol) berfungsi untuk...', opts: ['Routing dinamis', 'Mencegah broadcast storm dan loop', 'Enkripsi traffic', 'Load balancing'], ans: 1, exp: 'STP mencegah switching loop yang dapat menyebabkan broadcast storm dengan memblok port redundan.' },
  { cat: 'cisco', diff: 'easy', q: 'Perintah untuk melihat tabel ARP di Cisco adalah...', opts: ['show mac-address', 'show arp', 'display arp', 'arp -a'], ans: 1, exp: '"show arp" menampilkan tabel ARP yang berisi mapping antara IP address dan MAC address.' },
  { cat: 'cisco', diff: 'medium', q: 'Mode apa yang digunakan untuk mengkonfigurasi interface di Cisco?', opts: ['User EXEC', 'Privileged EXEC', 'Global Config', 'Interface Config'], ans: 3, exp: 'Interface Config Mode (prompt Switch(config-if)#) digunakan untuk mengkonfigurasi interface tertentu.' },
  { cat: 'cisco', diff: 'hard', q: 'Apa perbedaan Access Port dan Trunk Port pada VLAN Cisco?', opts: ['Access hanya untuk VLAN tunggal, Trunk untuk multiple VLAN', 'Access lebih cepat dari Trunk', 'Trunk untuk PC, Access untuk switch', 'Tidak ada perbedaan'], ans: 0, exp: 'Access port membawa traffic satu VLAN saja (untuk PC/server). Trunk port membawa traffic banyak VLAN (antar switch/router).' },
  { cat: 'cisco', diff: 'medium', q: 'Perintah untuk melihat status interface di Cisco...', opts: ['show interface status', 'show ip int brief', 'display interface', 'check interface'], ans: 1, exp: '"show ip interface brief" menampilkan ringkasan status semua interface termasuk IP dan status up/down.' },
  { cat: 'cisco', diff: 'easy', q: 'Default VLAN yang selalu ada di Cisco switch adalah...', opts: ['VLAN 0', 'VLAN 1', 'VLAN 99', 'VLAN 1000'], ans: 1, exp: 'VLAN 1 adalah default VLAN di Cisco switch yang tidak bisa dihapus dan semua port defaultnya berada di VLAN 1.' },
];

let selectedCats = [];
let selectedDiff = 'all';
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let wrongAnswers = 0;
let timerInterval;
let timeLeft = 30;
let totalTime = 0;
let answerSelected = false;

// THEME INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('azz-tkj-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        themeToggleBtn.querySelector('i').className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('azz-tkj-theme', newTheme);
            themeToggleBtn.querySelector('i').className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        });
    }

    renderCategories();
    renderRanking('rankingList');
});

function renderCategories() {
    const categoryGrid = document.getElementById('categoryGrid');
    if (!categoryGrid) return;

    categoryGrid.innerHTML = categories.map(cat => `
        <div class="quiz-cat-card" data-cat="${cat.id}" onclick="toggleCat('${cat.id}', this)">
            <div class="qcc-check"><i class="fas fa-check"></i></div>
            <div class="qcc-icon" style="background:${cat.color}18; color:${cat.color}">
                <i class="${cat.icon}"></i>
            </div>
            <div class="qcc-title">${cat.name}</div>
            <div class="qcc-count">${cat.count} Soal</div>
        </div>
    `).join('');
}

function toggleCat(id, el) {
    el.classList.toggle('selected');
    if (selectedCats.includes(id)) {
        selectedCats = selectedCats.filter(c => c !== id);
    } else {
        selectedCats.push(id);
    }
}

function selectDiff(btn) {
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedDiff = btn.dataset.diff;
}

function startQuiz() {
    let pool = [...allQuestions];
    if (selectedCats.length > 0) {
        pool = pool.filter(q => selectedCats.includes(q.cat));
    }
    if (selectedDiff !== 'all') {
        pool = pool.filter(q => q.diff === selectedDiff);
    }

    if (pool.length === 0) {
        alert('Tidak ada soal untuk pilihan ini. Pilih kategori atau ubah tingkat kesulitan.');
        return;
    }

    pool.sort(() => Math.random() - 0.5);
    currentQuestions = pool.slice(0, Math.min(10, pool.length));
    currentIndex = 0;
    score = 0;
    wrongAnswers = 0;
    totalTime = 0;

    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    document.getElementById('resultScreen').style.display = 'none';

    const catName = selectedCats.length === 0 
        ? 'Semua Kategori' 
        : categories.filter(c => selectedCats.includes(c.id)).map(c => c.name).join(', ');
        
    document.getElementById('catBadge').innerHTML = `<i class="fas fa-tag"></i> ${catName}`;
    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    const total = currentQuestions.length;

    document.getElementById('questionBadge').textContent = `Soal ${currentIndex + 1}/${total}`;
    document.getElementById('quizProgress').style.width = ((currentIndex / total) * 100) + '%';
    document.getElementById('qNumber').textContent = `Pertanyaan ${currentIndex + 1} dari ${total}`;
    document.getElementById('qText').textContent = q.q;
    document.getElementById('answerFeedback').style.display = 'none';
    document.getElementById('nextBtn').disabled = true;
    answerSelected = false;

    const letters = ['A', 'B', 'C', 'D'];
    document.getElementById('optionsGrid').innerHTML = q.opts.map((opt, i) => `
        <button class="option-btn" onclick="selectAnswer(${i}, this)">
            <span class="opt-letter">${letters[i]}</span>
            <span>${opt}</span>
        </button>
    `).join('');

    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    document.getElementById('timerDisplay').textContent = timeLeft;
    document.getElementById('timerBox').classList.remove('warning');

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timerDisplay').textContent = timeLeft;
        if (timeLeft <= 10) {
            document.getElementById('timerBox').classList.add('warning');
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (!answerSelected) autoFail();
        }
    }, 1000);
}

function autoFail() {
    answerSelected = true;
    wrongAnswers++;
    const q = currentQuestions[currentIndex];
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.ans) btn.classList.add('correct');
    });
    showFeedback(false, q.exp, 'Waktu habis! ');
    document.getElementById('nextBtn').disabled = false;
}

function selectAnswer(idx, btn) {
    if (answerSelected) return;
    answerSelected = true;
    clearInterval(timerInterval);

    const q = currentQuestions[currentIndex];
    const timeUsed = 30 - timeLeft;
    totalTime += timeUsed;

    document.querySelectorAll('.option-btn').forEach((b, i) => {
        b.disabled = true;
        b.classList.remove('correct', 'wrong');
        if (i === q.ans) b.classList.add('correct');
    });

    if (idx === q.ans) {
        score++;
        btn.classList.add('correct');
        showFeedback(true, q.exp);
    } else {
        btn.classList.add('wrong');
        wrongAnswers++;
        showFeedback(false, q.exp);
    }

    document.getElementById('nextBtn').disabled = false;
}

function showFeedback(isCorrect, exp, prefix = '') {
    const fb = document.getElementById('answerFeedback');
    fb.className = `answer-feedback ${isCorrect ? 'correct' : 'wrong'}`;
    fb.innerHTML = `<strong>${prefix}${isCorrect ? '✅ Benar!' : '❌ Salah!'}</strong> ${exp}`;
    fb.style.display = 'block';
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= currentQuestions.length) {
        showResult();
    } else {
        renderQuestion();
    }
}

function quitQuiz() {
    if (confirm('Yakin ingin keluar dari quiz? Progress saat ini tidak akan disimpan.')) {
        clearInterval(timerInterval);
        backToHome();
    }
}

function showResult() {
    clearInterval(timerInterval);
    const total = currentQuestions.length;
    const pct = Math.round((score / total) * 100);

    let grade, cls, title, desc;
    if (pct >= 85) {
        grade = 'A'; cls = 'excellent'; title = 'Luar Biasa! 🎉'; desc = 'Penguasaan materimu sangat baik. Pertahankan!';
    } else if (pct >= 70) {
        grade = 'B'; cls = 'good'; title = 'Bagus! 👍'; desc = 'Kemampuanmu sudah baik. Terus tingkatkan!';
    } else if (pct >= 55) {
        grade = 'C'; cls = 'good'; title = 'Cukup 📚'; desc = 'Kamu perlu lebih banyak berlatih.';
    } else {
        grade = 'D'; cls = 'poor'; title = 'Perlu Belajar Lebih 💪'; desc = 'Jangan menyerah! Pelajari materi dan coba lagi.';
    }

    document.getElementById('resultCircle').className = `result-circle ${cls}`;
    document.getElementById('resultScore').textContent = pct + '%';
    document.getElementById('resultGrade').textContent = 'Nilai ' + grade;
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultDesc').textContent = desc;
    document.getElementById('statCorrect').textContent = score;
    document.getElementById('statWrong').textContent = wrongAnswers;
    document.getElementById('statTime').textContent = Math.round(totalTime) + 's';

    saveScore(pct, grade);

    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    renderRanking('resultRankingList');
}

function saveScore(pct, grade) {
    const scores = JSON.parse(localStorage.getItem('azz-tkj-scores') || '[]');
    const catName = selectedCats.length === 0 
        ? 'Semua' 
        : categories.filter(c => selectedCats.includes(c.id)).map(c => c.name).join(', ');

    scores.push({
        name: 'AZZ Player',
        score: pct,
        grade,
        cat: catName,
        date: new Date().toLocaleDateString('id-ID'),
        time: Date.now()
    });

    scores.sort((a, b) => b.score - a.score);
    localStorage.setItem('azz-tkj-scores', JSON.stringify(scores.slice(0, 10)));
}

function renderRanking(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const scores = JSON.parse(localStorage.getItem('azz-tkj-scores') || '[]');
    const rankClasses = ['rank-1', 'rank-2', 'rank-3'];

    if (scores.length === 0) {
        container.innerHTML = '<div class="empty-state">Belum ada skor tersimpan. Selesaikan quiz untuk masuk ke leaderboard!</div>';
        return;
    }

    container.innerHTML = scores.map((s, i) => `
        <div class="rank-item">
            <span class="rank-num ${i < 3 ? rankClasses[i] : 'rank-n'}">${i + 1}</span>
            <div class="rank-info">
                <div class="rank-name">
                    ${s.name} 
                    <span style="color:var(--warning); font-size:0.8rem;">[${s.grade}]</span>
                </div>
                <div class="rank-cat">${s.cat} • ${s.date}</div>
            </div>
            <span class="rank-score">${s.score}%</span>
        </div>
    `).join('');
}

function restartQuiz() {
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    currentIndex = 0;
    score = 0;
    wrongAnswers = 0;
    totalTime = 0;
    currentQuestions.sort(() => Math.random() - 0.5);
    renderQuestion();
}

function backToHome() {
    document.getElementById('homeScreen').style.display = 'block';
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'none';
    renderRanking('rankingList');
}