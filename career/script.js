/**
 * AZZ - Career Center TKJ
 * Interactive Scripts & QA Builder
 */

// Theme Handler (Dark / Light Mode)
const savedTheme = localStorage.getItem('tkj-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
  const themeIcon = themeToggleBtn.querySelector('i');
  if (themeIcon) {
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('tkj-theme', newTheme);
    
    if (themeIcon) {
      themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  });
}

// Tab Switching Mechanism
function showTab(tabId, buttonElement) {
  // Hide all tab panels
  const allPanels = document.querySelectorAll('.tab-panel');
  allPanels.forEach(panel => panel.classList.remove('active'));

  // Deactivate all tab buttons
  const allButtons = document.querySelectorAll('.tab-btn');
  allButtons.forEach(btn => btn.classList.remove('active'));

  // Show target tab panel
  const targetPanel = document.getElementById('tab-' + tabId);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // Activate clicked button
  if (buttonElement) {
    buttonElement.classList.add('active');
  }
}

// Interview Q&A Data Source
const hrQA = [
  {
    q: 'Ceritakan tentang diri Anda!',
    a: 'Fokus pada pengalaman teknis dan pendidikan TKJ. Contoh: "Saya lulusan SMK jurusan TKJ dengan keahlian di bidang jaringan komputer, konfigurasi Mikrotik, dan Linux server. Selama PKL, saya berhasil mengkonfigurasi jaringan VLAN untuk 3 departemen dan meningkatkan efisiensi bandwidth 40%."'
  },
  {
    q: 'Mengapa Anda tertarik bekerja di bidang IT/Jaringan?',
    a: 'Jelaskan minat genuine terhadap teknologi: "Saya memiliki passion dalam membangun dan mengelola infrastruktur jaringan sejak SMK. Saya tertarik karena bidang ini terus berkembang dan memberikan tantangan baru setiap hari."'
  },
  {
    q: 'Apa kelebihan dan kekurangan Anda?',
    a: 'Kelebihan: Sebutkan skill teknis spesifik. Kekurangan: Pilih yang bisa diperbaiki dan sudah ada upaya perbaikan. Contoh kekurangan: "Saya masih perlu meningkatkan kemampuan public speaking, dan saya sudah aktif berlatih presentasi."'
  },
  {
    q: 'Berapa ekspektasi gaji Anda?',
    a: 'Riset gaji pasar terlebih dahulu. Beri range: "Berdasarkan riset pasar untuk posisi ini, saya mengharapkan gaji di kisaran Rp 4-6 juta/bulan, namun saya terbuka untuk berdiskusi tergantung kompensasi total yang ditawarkan."'
  }
];

const techQA = [
  {
    q: 'Apa yang Anda lakukan jika komputer user tidak bisa terhubung ke internet?',
    a: 'Troubleshooting sistematis OSI bottom-up: (1) Cek fisik: kabel, LED, (2) Cek IP: <code>ipconfig/ifconfig</code>, (3) Ping gateway: <code>ping 192.168.1.1</code>, (4) Ping DNS: <code>ping 8.8.8.8</code>, (5) Test DNS: <code>nslookup google.com</code>, (6) Cek firewall dan proxy settings.'
  },
  {
    q: 'Jelaskan perbedaan Static IP dan Dynamic IP!',
    a: '<strong>Static IP</strong>: IP address yang tetap/manual, tidak berubah. Digunakan untuk server, printer, perangkat jaringan yang perlu diakses konsisten.<br><strong>Dynamic IP</strong>: IP yang diberikan otomatis oleh DHCP Server, bisa berubah. Lebih mudah dikelola untuk banyak perangkat.'
  },
  {
    q: 'Apa itu VLAN dan mengapa digunakan?',
    a: 'VLAN (Virtual LAN) memisahkan jaringan secara logis dalam satu switch fisik.<br>Manfaat: (1) Keamanan - memisahkan traffic sensitif, (2) Efisiensi - mengurangi broadcast domain, (3) Fleksibilitas - tidak perlu kabel fisik terpisah.<br>Contoh: VLAN 10 untuk HRD, VLAN 20 untuk IT, VLAN 30 untuk Keuangan.'
  },
  {
    q: 'Bagaimana cara mengamankan router/MikroTik dari akses tidak sah?',
    a: '(1) Ganti username dan password default admin, (2) Matikan service yang tidak digunakan (Telnet, API jika tidak perlu), (3) Batasi akses management via IP Firewall: <code>add chain=input src-address=!192.168.1.0/24 action=drop</code>, (4) Aktifkan firewall filter, (5) Update firmware secara berkala, (6) Gunakan SSH bukan Telnet.'
  }
];

const fiberQA = [
  {
    q: 'Apa perbedaan Single Mode dan Multi Mode Fiber?',
    a: '<strong>Single Mode (SMF)</strong>: Core kecil 8-10μm, satu jalur cahaya, jarak sangat jauh (>10km), warna jacket kuning. Digunakan untuk backbone dan ISP.<br><strong>Multi Mode (MMF)</strong>: Core besar 50/62.5μm, banyak jalur cahaya, jarak pendek (<2km), warna jacket orange/aqua. Digunakan untuk LAN dan datacenter.'
  },
  {
    q: 'Jelaskan prosedur fusion splicing fiber optik!',
    a: 'Langkah fusion splicing: (1) Strip jacket dan buffer fiber, (2) Bersihkan dengan alkohol 99%, (3) Pasang heat shrink sleeve, (4) Cleave fiber dengan fiber cleaver, (5) Masukkan ke fusion splicer dan jalankan proses fusion, (6) Cek estimasi loss (target <0.1 dB), (7) Panaskan heat shrink untuk proteksi, (8) Verifikasi dengan OTDR.'
  },
  {
    q: 'Apa fungsi OTDR dan OPM? Apa bedanya?',
    a: '<strong>OPM (Optical Power Meter)</strong>: Mengukur total daya optik dan loss keseluruhan link. Digunakan berpasangan dengan OLS (Light Source). Hasil: dBm atau total loss dB.<br><strong>OTDR</strong>: Mendeteksi lokasi event (splice, connector, break) sepanjang fiber. Menampilkan trace/grafik dengan posisi dan loss setiap event. Lebih detail namun alat lebih mahal.'
  }
];

// Helper Function to Render Q&A Items
function buildQA(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = list.map((item) => `
    <div class="qa-item">
      <div class="qa-question" onclick="toggleQA(this)">
        <span>
          <i class="fas fa-question-circle" style="color:var(--cyan); margin-top:3px;"></i>
          ${item.q}
        </span>
        <i class="fas fa-chevron-down" style="color:var(--text-muted); font-size:0.8rem; transition:transform 0.3s ease;"></i>
      </div>
      <div class="qa-answer">
        <div class="qa-answer-inner">${item.a}</div>
      </div>
    </div>
  `).join('');
}

// Accordion Toggle
function toggleQA(element) {
  const answerBlock = element.nextElementSibling;
  const icon = element.querySelector('.fa-chevron-down');
  const isOpen = answerBlock.classList.contains('open');

  // Close other open answers in the same container for clean accordion effect
  const parentList = element.closest('.qa-list');
  if (parentList) {
    const activeAnswers = parentList.querySelectorAll('.qa-answer.open');
    const activeIcons = parentList.querySelectorAll('.fa-chevron-down');
    
    activeAnswers.forEach(ans => ans.classList.remove('open'));
    activeIcons.forEach(ic => ic.style.transform = 'rotate(0deg)');
  }

  if (!isOpen) {
    answerBlock.classList.add('open');
    if (icon) icon.style.transform = 'rotate(180deg)';
  }
}

// Initialize QA lists on document ready
document.addEventListener('DOMContentLoaded', () => {
  buildQA(hrQA, 'qalist-hr');
  buildQA(techQA, 'qalist-tech');
  buildQA(fiberQA, 'qalist-fiber');
});
