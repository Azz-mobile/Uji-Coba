/**
 * AZZ Network Tools - Main JavaScript Application
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSpeedComparison();
  calcMonthly();
});

/* -------------------------------------------------------------------------- */
/* Theme Switcher                                                             */
/* -------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem('azz-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    updateThemeIcon(themeBtn, savedTheme);
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('azz-theme', newTheme);
      updateThemeIcon(themeBtn, newTheme);
    });
  }
}

function updateThemeIcon(btn, theme) {
  const icon = btn.querySelector('i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

/* -------------------------------------------------------------------------- */
/* 1. Download / Upload Speed Calculator                                     */
/* -------------------------------------------------------------------------- */
function calcDownload() {
  const size = parseFloat(document.getElementById('fileSize').value);
  const sizeUnit = parseFloat(document.getElementById('fileSizeUnit').value);
  const speed = parseFloat(document.getElementById('connSpeed').value);
  const speedUnit = parseFloat(document.getElementById('connUnit').value);
  const eff = parseFloat(document.getElementById('efficiency').value) || 80;

  if (!size || size <= 0 || !speed || speed <= 0) {
    alert('Masukkan ukuran file dan kecepatan koneksi yang valid!');
    return;
  }

  const sizeKB = size * sizeUnit;
  const speedMbps = speed * speedUnit;
  const effectiveSpeed = speedMbps * (eff / 100);
  
  // (KB * 8) / (Mbps * 1024) -> time in seconds
  const seconds = (sizeKB * 8) / (effectiveSpeed * 1024);

  document.getElementById('rSec').textContent = seconds.toFixed(1) + 's';
  document.getElementById('rMin').textContent = (seconds / 60).toFixed(2) + 'm';
  document.getElementById('rHour').textContent = (seconds / 3600).toFixed(3) + 'h';
}

/* -------------------------------------------------------------------------- */
/* 2. Bandwidth Converter                                                     */
/* -------------------------------------------------------------------------- */
function convertBW() {
  const val = parseFloat(document.getElementById('bwValue').value);
  const unit = document.getElementById('bwFromUnit').value;
  const outputEl = document.getElementById('bwOutput');

  if (isNaN(val) || val <= 0) {
    outputEl.textContent = 'Masukkan nilai yang valid.';
    return;
  }

  const toBps = {
    bps: 1,
    kbps: 1e3,
    mbps: 1e6,
    gbps: 1e9,
    kBps: 8e3,
    MBps: 8e6,
    GBps: 8e9
  };

  const bps = val * (toBps[unit] || 1e6);

  outputEl.textContent = 
`${val} ${unit} =
├─ ${bps.toLocaleString('id-ID')} bps
├─ ${(bps / 1e3).toLocaleString('id-ID', { maximumFractionDigits: 3 })} Kbps
├─ ${(bps / 1e6).toLocaleString('id-ID', { maximumFractionDigits: 6 })} Mbps
├─ ${(bps / 1e9).toLocaleString('id-ID', { maximumFractionDigits: 9 })} Gbps
├─ ${(bps / 8e3).toLocaleString('id-ID', { maximumFractionDigits: 3 })} KBps (Kilobyte/s)
├─ ${(bps / 8e6).toLocaleString('id-ID', { maximumFractionDigits: 6 })} MBps (Megabyte/s)
└─ ${(bps / 8e9).toLocaleString('id-ID', { maximumFractionDigits: 9 })} GBps (Gigabyte/s)`;
}

/* -------------------------------------------------------------------------- */
/* 3. Bandwidth per User Calculator                                           */
/* -------------------------------------------------------------------------- */
function calcPerUser() {
  const total = parseFloat(document.getElementById('totalBW').value);
  const users = parseInt(document.getElementById('userCount').value);
  const methodEl = document.getElementById('shareMethod');
  const method = methodEl.value;
  const outputEl = document.getElementById('perUserOutput');

  if (isNaN(total) || total <= 0 || isNaN(users) || users <= 0) {
    alert('Masukkan total bandwidth dan jumlah user yang valid!');
    return;
  }

  let perUser = 0;
  let note = '';

  if (method === 'equal') {
    perUser = total / users;
    note = 'Setiap user mendapat alokasi bandwidth yang sama rata.';
  } else if (method === 'contention') {
    perUser = total;
    note = 'Contention 1:1 - Semua user dapat full bandwidth secara bersamaan (Dedicated).';
  } else {
    perUser = total / 5;
    note = 'Contention 1:5 - Pemakaian bersama standar ISP perumahan / SOHO.';
  }

  const recommended = Math.ceil(users * 2);

  outputEl.textContent = 
`HASIL KALKULASI BANDWIDTH PER USER
─────────────────────────────────────────────────
Total Bandwidth : ${total} Mbps
Jumlah User     : ${users} User
Metode          : ${methodEl.options[methodEl.selectedIndex].text}
─────────────────────────────────────────────────
Bandwidth / User: ${perUser.toFixed(2)} Mbps
Download / User : ${(perUser / 8).toFixed(2)} MBps
─────────────────────────────────────────────────
Catatan:
${note}

Rekomendasi Bandwidth total untuk ${users} user: ${recommended} Mbps`;
}

/* -------------------------------------------------------------------------- */
/* 4. Estimasi Penggunaan Data Bulanan                                        */
/* -------------------------------------------------------------------------- */
function calcMonthly() {
  const browsing = parseFloat(document.getElementById('browsingHour').value) || 0;
  const streaming = parseFloat(document.getElementById('streamingHour').value) || 0;
  const videoCall = parseFloat(document.getElementById('videoCallHour').value) || 0;
  const gaming = parseFloat(document.getElementById('gamingHour').value) || 0;

  // Average usage per hour in MB
  const browsingMB = browsing * 60;
  const streamingMB = streaming * 2250;
  const videoCallMB = videoCall * 450;
  const gamingMB = gaming * 120;

  const totalPerDay = browsingMB + streamingMB + videoCallMB + gamingMB;
  const totalPerMonth = totalPerDay * 30;
  const totalGB = totalPerMonth / 1024;

  let recommended = 'Paket Unlimited';
  if (totalGB < 10) recommended = 'Paket 10 GB';
  else if (totalGB < 30) recommended = 'Paket 30 GB';
  else if (totalGB < 50) recommended = 'Paket 50 GB';

  const resultEl = document.getElementById('monthlyResult');
  if (resultEl) {
    resultEl.innerHTML = `
      <div class="code-box">ESTIMASI KONSUMSI DATA BULANAN
─────────────────────────────────────────────────
Browsing     : ${browsingMB.toFixed(0)} MB / hari
Streaming HD : ${(streamingMB / 1024).toFixed(2)} GB / hari
Video Call   : ${videoCallMB.toFixed(0)} MB / hari
Gaming       : ${gamingMB.toFixed(0)} MB / hari
─────────────────────────────────────────────────
Total / Hari : ${(totalPerDay / 1024).toFixed(2)} GB
Total / Bulan: ${totalGB.toFixed(2)} GB
─────────────────────────────────────────────────
Rekomendasi Paket: ${recommended}</div>`;
  }
}

/* -------------------------------------------------------------------------- */
/* 5. Speed Comparison Chart Renderer                                         */
/* -------------------------------------------------------------------------- */
function initSpeedComparison() {
  const speeds = [
    { name: 'Dial-up', mbps: 0.056, color: '#EF4444' },
    { name: 'ADSL 1Mbps', mbps: 1, color: '#F97316' },
    { name: '3G Mobile', mbps: 7.2, color: '#F59E0B' },
    { name: '4G LTE', mbps: 50, color: '#10B981' },
    { name: 'Cable 100M', mbps: 100, color: '#06B6D4' },
    { name: 'Fiber 1Gbps', mbps: 1000, color: '#3B82F6' },
    { name: '5G Mobile', mbps: 10000, color: '#8B5CF6' }
  ];

  const maxSpeed = Math.max(...speeds.map(s => s.mbps));
  const container = document.getElementById('speedComparison');

  if (!container) return;

  container.innerHTML = speeds.map(s => {
    // Logarithmic scaling for smooth visual contrast across huge differences
    const pct = (Math.log(s.mbps + 1) / Math.log(maxSpeed + 1)) * 100;
    const speedDisplay = s.mbps >= 1000 ? (s.mbps / 1000) + ' Gbps' : s.mbps + ' Mbps';

    return `
      <div class="speed-item">
        <div class="speed-info">
          <span class="speed-name"><i class="fas fa-network-wired" style="color: ${s.color}"></i> ${s.name}</span>
          <span class="speed-val">${speedDisplay}</span>
        </div>
        <div class="speed-bar-bg">
          <div class="speed-bar-fill" style="width: ${pct.toFixed(2)}%; background: ${s.color};"></div>
        </div>
      </div>
    `;
  }).join('');
}