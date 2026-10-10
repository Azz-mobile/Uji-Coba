// AZZ Learning Hub - Functional Script
const materiData = [
  {
    id: 1,
    cat: 'jaringan',
    title: 'Pengenalan Jaringan Komputer',
    desc: 'Konsep dasar jaringan komputer, jenis-jenis jaringan LAN, WAN, MAN, dan topologi jaringan.',
    icon: 'fas fa-network-wired',
    color: '#2563EB',
    time: '45 menit',
    diff: 'dasar',
    content: `<h3>Apa itu Jaringan Komputer?</h3><p>Jaringan komputer adalah sekumpulan komputer yang saling terhubung satu sama lain sehingga dapat berbagi sumber daya seperti data, printer, dan internet.</p><h3>Jenis-jenis Jaringan</h3><ul><li><strong>LAN (Local Area Network)</strong> - Jaringan dalam area terbatas seperti ruangan atau gedung</li><li><strong>WAN (Wide Area Network)</strong> - Jaringan yang mencakup area luas seperti kota atau negara</li><li><strong>MAN (Metropolitan Area Network)</strong> - Jaringan yang mencakup area kota</li><li><strong>PAN (Personal Area Network)</strong> - Jaringan personal jarak pendek</li></ul><h3>Topologi Jaringan</h3><p>Topologi jaringan adalah cara komputer-komputer dihubungkan dalam suatu jaringan:</p><ul><li><strong>Star</strong> - Semua perangkat terhubung ke switch/hub pusat</li><li><strong>Bus</strong> - Semua perangkat terhubung pada satu kabel utama</li><li><strong>Ring</strong> - Perangkat terhubung membentuk lingkaran</li><li><strong>Mesh</strong> - Setiap perangkat terhubung ke semua perangkat lain</li></ul>`
  },
  {
    id: 2,
    cat: 'jaringan',
    title: 'Model OSI 7 Layer',
    desc: 'Memahami 7 lapisan OSI: Physical, Data Link, Network, Transport, Session, Presentation, Application.',
    icon: 'fas fa-layer-group',
    color: '#06B6D4',
    time: '60 menit',
    diff: 'dasar',
    content: `<h3>Model OSI (Open Systems Interconnection)</h3><p>Model OSI adalah kerangka kerja konseptual yang mendefinisikan fungsi jaringan dalam 7 lapisan berbeda.</p><h3>7 Layer OSI</h3><ul><li><strong>Layer 7 - Application</strong>: HTTP, FTP, SMTP, DNS</li><li><strong>Layer 6 - Presentation</strong>: Enkripsi, kompresi data</li><li><strong>Layer 5 - Session</strong>: Manajemen sesi komunikasi</li><li><strong>Layer 4 - Transport</strong>: TCP, UDP - pengiriman end-to-end</li><li><strong>Layer 3 - Network</strong>: IP, routing, pengalamatan logis</li><li><strong>Layer 2 - Data Link</strong>: MAC Address, framing, switch</li><li><strong>Layer 1 - Physical</strong>: Kabel, sinyal elektrik, bit</li></ul><div class="code-block">Mnemonik: Please Do Not Throw Sausage Pizza Away\nPhysical → Data Link → Network → Transport → Session → Presentation → Application</div>`
  },
  {
    id: 3,
    cat: 'jaringan',
    title: 'IP Address & Subnetting',
    desc: 'Konsep IP Address versi 4, kelas IP, subnet mask, dan cara menghitung subnetting.',
    icon: 'fas fa-sitemap',
    color: '#8B5CF6',
    time: '90 menit',
    diff: 'menengah',
    content: `<h3>IP Address</h3><p>IP Address adalah alamat unik yang diberikan kepada setiap perangkat dalam jaringan. Format IPv4: 32 bit (4 oktet).</p><h3>Kelas IP Address</h3><ul><li><strong>Kelas A</strong>: 1.0.0.0 - 126.255.255.255 (255.0.0.0)</li><li><strong>Kelas B</strong>: 128.0.0.0 - 191.255.255.255 (255.255.0.0)</li><li><strong>Kelas C</strong>: 192.0.0.0 - 223.255.255.255 (255.255.255.0)</li></ul><h3>Contoh Subnetting</h3><div class="code-block">Network: 192.168.1.0/24\nSubnet Mask: 255.255.255.0\nNetwork Address: 192.168.1.0\nBroadcast: 192.168.1.255\nHost Range: 192.168.1.1 - 192.168.1.254\nTotal Host: 254</div>`
  },
  {
    id: 4,
    cat: 'jaringan',
    title: 'Protocol TCP/IP',
    desc: 'Memahami protokol TCP/IP, perbedaan TCP dan UDP, three-way handshake.',
    icon: 'fas fa-exchange-alt',
    color: '#10B981',
    time: '60 menit',
    diff: 'dasar',
    content: `<h3>TCP vs UDP</h3><p><strong>TCP (Transmission Control Protocol)</strong> adalah protokol yang berorientasi koneksi, handal, dan memastikan data sampai dengan benar. Digunakan untuk HTTP, FTP, Email.</p><p><strong>UDP (User Datagram Protocol)</strong> adalah protokol tanpa koneksi, cepat, namun tidak menjamin pengiriman. Digunakan untuk streaming, gaming, DNS.</p><h3>TCP Three-Way Handshake</h3><div class="code-block">Client → Server: SYN (synchronize)\nServer → Client: SYN-ACK (synchronize-acknowledge)\nClient → Server: ACK (acknowledge)\nKoneksi berhasil dibuat!</div>`
  },
  {
    id: 5,
    cat: 'jaringan',
    title: 'DNS (Domain Name System)',
    desc: 'Cara kerja DNS, record DNS (A, AAAA, MX, CNAME, PTR), dan konfigurasi DNS.',
    icon: 'fas fa-globe',
    color: '#F59E0B',
    time: '45 menit',
    diff: 'dasar',
    content: `<h3>Apa itu DNS?</h3><p>DNS adalah sistem yang menerjemahkan nama domain (contoh: google.com) menjadi alamat IP (142.250.196.14).</p><h3>Jenis Record DNS</h3><ul><li><strong>A Record</strong>: Menunjuk domain ke IPv4</li><li><strong>AAAA Record</strong>: Menunjuk domain ke IPv6</li><li><strong>CNAME</strong>: Alias untuk domain lain</li><li><strong>MX Record</strong>: Server email</li><li><strong>PTR Record</strong>: Reverse lookup</li><li><strong>NS Record</strong>: Name server</li></ul><div class="code-block">Perintah DNS di Linux:\n$ nslookup google.com\n$ dig google.com\n$ host google.com</div>`
  },
  {
    id: 6,
    cat: 'mikrotik',
    title: 'Pengenalan MikroTik RouterOS',
    desc: 'Mengenal MikroTik RouterOS, antarmuka Winbox, CLI dasar, dan konfigurasi awal.',
    icon: 'fas fa-router',
    color: '#8B5CF6',
    time: '60 menit',
    diff: 'menengah',
    content: `<h3>Apa itu MikroTik?</h3><p>MikroTik adalah perusahaan Latvia yang memproduksi perangkat jaringan berbasis RouterOS. RouterOS adalah sistem operasi jaringan berbasis Linux.</p><h3>Cara Akses MikroTik</h3><ul><li><strong>Winbox</strong>: Aplikasi GUI resmi MikroTik (Windows)</li><li><strong>WebFig</strong>: Interface web browser</li><li><strong>SSH/Telnet</strong>: Command line</li><li><strong>Console</strong>: Serial port</li></ul><h3>Konfigurasi Dasar</h3><div class="code-block"># Login via CLI\nadmin@ (password kosong default)\n\n# Lihat interface\n[admin@MikroTik] > interface print\n\n# Set IP Address\n[admin@MikroTik] > ip address add address=192.168.1.1/24 interface=ether1</div>`
  },
  {
    id: 7,
    cat: 'mikrotik',
    title: 'DHCP Server MikroTik',
    desc: 'Konfigurasi DHCP Server di MikroTik untuk mendistribusikan IP otomatis ke client.',
    icon: 'fas fa-server',
    color: '#2563EB',
    time: '45 menit',
    diff: 'menengah',
    content: `<h3>Konfigurasi DHCP Server MikroTik</h3><p>DHCP Server memungkinkan MikroTik membagikan IP address secara otomatis kepada client yang terhubung.</p><h3>Langkah Konfigurasi</h3><div class="code-block"># 1. Buat IP Pool\n[admin@MikroTik] > ip pool add name=dhcp-pool ranges=192.168.1.100-192.168.1.200\n\n# 2. Tambah DHCP Server\n[admin@MikroTik] > ip dhcp-server add name=dhcp1 interface=ether2 address-pool=dhcp-pool disabled=no\n\n# 3. Tambah DHCP Network\n[admin@MikroTik] > ip dhcp-server network add address=192.168.1.0/24 gateway=192.168.1.1 dns-server=8.8.8.8\n\n# 4. Cek DHCP Lease\n[admin@MikroTik] > ip dhcp-server lease print</div>`
  },
  {
    id: 8,
    cat: 'mikrotik',
    title: 'Firewall MikroTik',
    desc: 'Konfigurasi firewall filter, NAT, dan mangle di MikroTik untuk keamanan jaringan.',
    icon: 'fas fa-fire-alt',
    color: '#EF4444',
    time: '90 menit',
    diff: 'lanjut',
    content: `<h3>Firewall MikroTik</h3><p>MikroTik memiliki firewall yang powerful dengan tiga chain utama: INPUT, OUTPUT, dan FORWARD.</p><h3>Firewall Filter Rules</h3><div class="code-block"># Block akses dari IP tertentu\n[admin@MikroTik] > ip firewall filter add chain=input src-address=192.168.2.0/24 action=drop\n\n# Izinkan port tertentu\n[admin@MikroTik] > ip firewall filter add chain=input protocol=tcp dst-port=22 action=accept\n\n# NAT Masquerade (internet sharing)\n[admin@MikroTik] > ip firewall nat add chain=srcnat out-interface=ether1 action=masquerade</div>`
  },
  {
    id: 9,
    cat: 'linux',
    title: 'Pengenalan Linux & Perintah Dasar',
    desc: 'Sejarah Linux, distribusi populer, navigasi terminal, dan perintah dasar Linux.',
    icon: 'fab fa-linux',
    color: '#F59E0B',
    time: '60 menit',
    diff: 'dasar',
    content: `<h3>Apa itu Linux?</h3><p>Linux adalah sistem operasi open-source berbasis kernel Linux yang dikembangkan oleh Linus Torvalds pada 1991. Banyak digunakan sebagai server karena stabil dan aman.</p><h3>Perintah Dasar Linux</h3><div class="code-block"># Navigasi\nls -la          # Lihat isi folder\ncd /home        # Pindah direktori\npwd             # Lokasi sekarang\nmkdir nama      # Buat folder\nrm -rf folder   # Hapus folder\n\n# File\ncat file.txt    # Tampilkan isi file\nnano file.txt   # Edit file\ncp src dst      # Copy file\nmv src dst      # Pindah/rename\n\n# System\nsudo su         # Login root\napt update      # Update package\napt install pkg # Install package\nsystemctl start nginx  # Jalankan service</div>`
  },
  {
    id: 10,
    cat: 'linux',
    title: 'Instalasi & Konfigurasi Ubuntu Server',
    desc: 'Cara instalasi Ubuntu Server, konfigurasi network, SSH, dan administrasi dasar.',
    icon: 'fas fa-hdd',
    color: '#EF4444',
    time: '120 menit',
    diff: 'menengah',
    content: `<h3>Instalasi Ubuntu Server</h3><p>Ubuntu Server adalah distribusi Linux populer untuk server, gratis dan didukung komunitas besar.</p><h3>Konfigurasi Jaringan Ubuntu</h3><div class="code-block"># Edit Netplan (Ubuntu 18.04+)\nsudo nano /etc/netplan/00-installer-config.yaml\n\nnetwork:\n  version: 2\n  ethernets:\n    ens33:\n      dhcp4: no\n      addresses: [192.168.1.10/24]\n      gateway4: 192.168.1.1\n      nameservers:\n        addresses: [8.8.8.8, 8.8.4.4]\n\nsudo netplan apply</div><h3>Konfigurasi SSH</h3><div class="code-block">sudo apt install openssh-server\nsudo systemctl enable ssh\nsudo systemctl start ssh\n\n# Koneksi dari client\nssh admin@192.168.1.10</div>`
  },
  {
    id: 11,
    cat: 'linux',
    title: 'Web Server Apache di Linux',
    desc: 'Instalasi dan konfigurasi Apache web server, virtual host, dan SSL di Ubuntu Server.',
    icon: 'fas fa-globe',
    color: '#06B6D4',
    time: '90 menit',
    diff: 'menengah',
    content: `<h3>Instalasi Apache Web Server</h3><div class="code-block">sudo apt update\nsudo apt install apache2\nsudo systemctl enable apache2\nsudo systemctl start apache2</div><h3>Virtual Host Configuration</h3><div class="code-block">sudo nano /etc/apache2/sites-available/tkj.conf\n\n&lt;VirtualHost *:80&gt;\n    ServerName tkj.local\n    DocumentRoot /var/www/tkj\n    &lt;Directory /var/www/tkj&gt;\n        Options Indexes FollowSymLinks\n        AllowOverride All\n        Require all granted\n    &lt;/Directory&gt;\n&lt;/VirtualHost&gt;\n\nsudo a2ensite tkj.conf\nsudo systemctl reload apache2</div>`
  },
  {
    id: 12,
    cat: 'cisco',
    title: 'Pengenalan Cisco IOS',
    desc: 'Dasar-dasar Cisco IOS, mode operasi, perintah dasar konfigurasi switch dan router.',
    icon: 'fas fa-server',
    color: '#06B6D4',
    time: '60 menit',
    diff: 'dasar',
    content: `<h3>Cisco IOS (Internetwork Operating System)</h3><p>Cisco IOS adalah sistem operasi yang digunakan pada perangkat jaringan Cisco seperti router dan switch.</p><h3>Mode Operasi Cisco IOS</h3><ul><li><strong>User EXEC Mode</strong>: Switch> (akses terbatas)</li><li><strong>Privileged EXEC Mode</strong>: Switch# (full access)</li><li><strong>Global Config Mode</strong>: Switch(config)# (konfigurasi global)</li><li><strong>Interface Config Mode</strong>: Switch(config-if)# (konfigurasi interface)</li></ul><h3>Perintah Dasar</h3><div class="code-block">Switch> enable                    # Masuk ke privileged mode\nSwitch# configure terminal        # Masuk global config\nSwitch(config)# hostname AZZ-SW    # Ganti nama perangkat\nSwitch(config)# interface fa0/1   # Masuk interface\nSwitch(config-if)# no shutdown    # Aktifkan interface\nSwitch# show running-config       # Tampilkan konfigurasi\nSwitch# copy run start            # Simpan konfigurasi</div>`
  },
  {
    id: 13,
    cat: 'cisco',
    title: 'VLAN di Cisco Switch',
    desc: 'Konfigurasi VLAN, trunking, dan inter-VLAN routing menggunakan Cisco switch.',
    icon: 'fas fa-code-branch',
    color: '#8B5CF6',
    time: '90 menit',
    diff: 'menengah',
    content: `<h3>VLAN (Virtual Local Area Network)</h3><p>VLAN memungkinkan satu switch fisik dibagi menjadi beberapa jaringan virtual yang terpisah secara logis.</p><h3>Konfigurasi VLAN</h3><div class="code-block"># Buat VLAN\nSwitch(config)# vlan 10\nSwitch(config-vlan)# name GURU\nSwitch(config)# vlan 20\nSwitch(config-vlan)# name SISWA\n\n# Assign port ke VLAN\nSwitch(config)# interface fa0/1\nSwitch(config-if)# switchport mode access\nSwitch(config-if)# switchport access vlan 10\n\n# Konfigurasi Trunk\nSwitch(config)# interface fa0/24\nSwitch(config-if)# switchport mode trunk</div>`
  },
  {
    id: 14,
    cat: 'fiber',
    title: 'Pengenalan Fiber Optik',
    desc: 'Jenis kabel fiber optik, komponen, cara kerja, dan keunggulan fiber optik.',
    icon: 'fas fa-satellite-dish',
    color: '#10B981',
    time: '45 menit',
    diff: 'dasar',
    content: `<h3>Apa itu Fiber Optik?</h3><p>Fiber optik adalah teknologi transmisi data menggunakan cahaya melalui serat kaca atau plastik. Jauh lebih cepat dan aman dari gangguan elektromagnetik dibanding kabel tembaga.</p><h3>Jenis Fiber Optik</h3><ul><li><strong>Single Mode (SMF)</strong>: Core kecil 8-10μm, jarak jauh (>100km), digunakan backbone</li><li><strong>Multi Mode (MMF)</strong>: Core besar 50-62.5μm, jarak pendek (<2km), digunakan LAN</li></ul><h3>Komponen Fiber Optik</h3><ul><li>Core: Serat kaca inti penghantar cahaya</li><li>Cladding: Lapisan refleksi cahaya</li><li>Buffer/Coating: Pelindung mekanis</li><li>Jacket: Selubung luar</li></ul>`
  },
  {
    id: 15,
    cat: 'fiber',
    title: 'Splicing & Terminasi Fiber Optik',
    desc: 'Teknik penyambungan fiber optik menggunakan fusion splicer dan mechanical splice.',
    icon: 'fas fa-cut',
    color: '#F59E0B',
    time: '90 menit',
    diff: 'menengah',
    content: `<h3>Jenis Penyambungan (Splicing)</h3><p><strong>Fusion Splicing</strong>: Penyambungan menggunakan mesin fusion splicer dengan panas listrik. Redaman rendah (0.01-0.1 dB), permanen.</p><p><strong>Mechanical Splicing</strong>: Penyambungan menggunakan mekanis/connector. Mudah dipasang, redaman lebih tinggi (0.1-0.5 dB).</p><h3>Prosedur Fusion Splicing</h3><ul><li>Kupas jacket, buffer, dan cladding fiber</li><li>Bersihkan dengan alkohol 99%</li><li>Cleave (potong) fiber dengan fiber cleaver</li><li>Pasang di fusion splicer</li><li>Jalankan proses fusion</li><li>Cek hasil dengan OTDR</li><li>Lindungi dengan heat shrink</li></ul><div class="code-block">Standar redaman splice: &lt; 0.1 dB\nPengujian menggunakan OTDR atau OPM</div>`
  },
  {
    id: 16,
    cat: 'security',
    title: 'Pengenalan Keamanan Jaringan',
    desc: 'Konsep dasar keamanan jaringan, jenis ancaman, CIA Triad, dan prinsip keamanan.',
    icon: 'fas fa-shield-alt',
    color: '#EF4444',
    time: '60 menit',
    diff: 'dasar',
    content: `<h3>CIA Triad - Pilar Keamanan Jaringan</h3><ul><li><strong>Confidentiality (Kerahasiaan)</strong>: Data hanya bisa diakses oleh yang berhak</li><li><strong>Integrity (Integritas)</strong>: Data tidak boleh diubah tanpa izin</li><li><strong>Availability (Ketersediaan)</strong>: Sistem harus selalu tersedia ketika dibutuhkan</li></ul><h3>Jenis Ancaman Jaringan</h3><ul><li><strong>Malware</strong>: Virus, worm, trojan, ransomware</li><li><strong>DoS/DDoS</strong>: Serangan untuk melumpuhkan server</li><li><strong>Man-in-the-Middle</strong>: Menyadap komunikasi</li><li><strong>Phishing</strong>: Penipuan untuk mencuri kredensial</li><li><strong>SQL Injection</strong>: Menyerang database</li></ul>`
  },
  {
    id: 17,
    cat: 'security',
    title: 'Enkripsi & Kriptografi',
    desc: 'Dasar kriptografi, enkripsi simetris dan asimetris, SSL/TLS, dan VPN.',
    icon: 'fas fa-lock',
    color: '#8B5CF6',
    time: '75 menit',
    diff: 'menengah',
    content: `<h3>Jenis Enkripsi</h3><p><strong>Enkripsi Simetris</strong>: Menggunakan kunci yang sama untuk enkripsi dan dekripsi. Contoh: AES, DES, 3DES. Cepat, cocok untuk data besar.</p><p><strong>Enkripsi Asimetris</strong>: Menggunakan sepasang kunci (public & private). Contoh: RSA, ECC. Lebih aman untuk pertukaran kunci.</p><h3>SSL/TLS</h3><p>SSL/TLS mengamankan komunikasi web (HTTPS). Menggunakan kombinasi enkripsi asimetris untuk pertukaran kunci dan simetris untuk transfer data.</p><div class="code-block"># Generate SSL Certificate (OpenSSL)\nopenssl genrsa -out private.key 2048\nopenssl req -new -key private.key -out cert.csr\nopenssl x509 -req -in cert.csr -signkey private.key -out certificate.crt</div>`
  },
  {
    id: 18,
    cat: 'wireless',
    title: 'Standar WiFi & Frekuensi',
    desc: 'Standar IEEE 802.11 (a/b/g/n/ac/ax), frekuensi 2.4GHz vs 5GHz, dan channel.',
    icon: 'fas fa-wifi',
    color: '#2563EB',
    time: '45 menit',
    diff: 'dasar',
    content: `<h3>Standar IEEE 802.11</h3><ul><li><strong>802.11b</strong>: 2.4GHz, max 11Mbps (legacy)</li><li><strong>802.11g</strong>: 2.4GHz, max 54Mbps</li><li><strong>802.11n (WiFi 4)</strong>: 2.4/5GHz, max 600Mbps</li><li><strong>802.11ac (WiFi 5)</strong>: 5GHz, max 3.5Gbps</li><li><strong>802.11ax (WiFi 6)</strong>: 2.4/5/6GHz, max 9.6Gbps</li></ul><h3>2.4GHz vs 5GHz</h3><ul><li><strong>2.4GHz</strong>: Jangkauan lebih jauh, lebih banyak gangguan, 3 channel non-overlap (1,6,11)</li><li><strong>5GHz</strong>: Kecepatan lebih tinggi, jangkauan lebih pendek, lebih sedikit gangguan</li></ul>`
  },
  {
    id: 19,
    cat: 'cloud',
    title: 'Pengenalan Cloud Computing',
    desc: 'Konsep cloud computing, model layanan (IaaS, PaaS, SaaS), dan model deployment.',
    icon: 'fas fa-cloud',
    color: '#06B6D4',
    time: '60 menit',
    diff: 'dasar',
    content: `<h3>Apa itu Cloud Computing?</h3><p>Cloud Computing adalah pengiriman layanan komputasi melalui internet. Pengguna dapat mengakses server, storage, database, networking, software, dan kecerdasan buatan kapan saja.</p><h3>Model Layanan Cloud</h3><ul><li><strong>IaaS (Infrastructure as a Service)</strong>: Menyewakan infrastruktur IT (server, jaringan, storage). Contoh: AWS EC2, Google Compute Engine</li><li><strong>PaaS (Platform as a Service)</strong>: Platform untuk pengembangan aplikasi. Contoh: Heroku, Google App Engine</li><li><strong>SaaS (Software as a Service)</strong>: Aplikasi siap pakai via internet. Contoh: Gmail, Microsoft 365, Zoom</li></ul><h3>Model Deployment</h3><ul><li><strong>Public Cloud</strong>: Dikelola vendor, shared infrastructure</li><li><strong>Private Cloud</strong>: Infrastruktur dedicated satu organisasi</li><li><strong>Hybrid Cloud</strong>: Kombinasi public dan private</li></ul>`
  },
  {
    id: 20,
    cat: 'troubleshoot',
    title: 'Troubleshooting Jaringan Sistematis',
    desc: 'Metodologi troubleshooting jaringan, penggunaan tools ping, traceroute, dan analisis.',
    icon: 'fas fa-wrench',
    color: '#F59E0B',
    time: '60 menit',
    diff: 'menengah',
    content: `<h3>Metodologi Troubleshooting OSI</h3><p>Troubleshooting jaringan paling efektif dilakukan secara sistematis dari layer bawah ke atas:</p><ol style="padding-left:1.5rem;"><li style="margin-bottom:0.5rem;color:var(--text-secondary)">Layer 1 Physical: Cek kabel, LED, koneksi fisik</li><li style="margin-bottom:0.5rem;color:var(--text-secondary)">Layer 2 Data Link: Cek MAC address, ARP</li><li style="margin-bottom:0.5rem;color:var(--text-secondary)">Layer 3 Network: Cek IP address, routing</li><li style="margin-bottom:0.5rem;color:var(--text-secondary)">Layer 4 Transport: Cek port, firewall</li><li style="margin-bottom:0.5rem;color:var(--text-secondary)">Layer 7 Application: Cek service, DNS</li></ol><h3>Tools Troubleshooting</h3><div class="code-block">ping 8.8.8.8              # Test konektivitas\ntraceroute google.com     # Trace rute paket\nnslookup google.com       # Cek DNS\nnetstat -an               # Lihat koneksi aktif\nifconfig / ip addr        # Cek konfigurasi IP\narp -a                    # Lihat ARP table\nnmap -sV 192.168.1.0/24  # Scan jaringan</div>`
  },
  {
    id: 21,
    cat: 'hardware',
    title: 'Komponen Komputer & Fungsinya',
    desc: 'CPU, RAM, Storage, Motherboard, PSU, dan komponen komputer lainnya secara lengkap.',
    icon: 'fas fa-microchip',
    color: '#F59E0B',
    time: '60 menit',
    diff: 'dasar',
    content: `<h3>Komponen Utama Komputer</h3><ul><li><strong>CPU (Central Processing Unit)</strong>: Otak komputer yang memproses semua instruksi. Diukur dalam GHz (kecepatan) dan core (jumlah prosesor).</li><li><strong>RAM (Random Access Memory)</strong>: Memori sementara untuk menjalankan program. Semakin besar RAM, semakin banyak program yang bisa berjalan bersamaan.</li><li><strong>Storage (HDD/SSD)</strong>: Penyimpanan data permanen. SSD jauh lebih cepat dari HDD tradisional.</li><li><strong>Motherboard</strong>: Papan induk yang menghubungkan semua komponen.</li><li><strong>PSU (Power Supply Unit)</strong>: Mengubah arus AC menjadi DC untuk komponen.</li><li><strong>GPU (Graphics Processing Unit)</strong>: Memproses grafis dan visualisasi.</li></ul>`
  },
  {
    id: 22,
    cat: 'hardware',
    title: 'Perawatan & Troubleshooting Hardware',
    desc: 'Cara merawat komputer, mendiagnosis kerusakan hardware, dan solusi masalah umum.',
    icon: 'fas fa-tools',
    color: '#EF4444',
    time: '75 menit',
    diff: 'menengah',
    content: `<h3>Diagnosa Kerusakan Hardware</h3><ul><li><strong>Komputer tidak menyala</strong>: Cek PSU, kabel power, tombol power</li><li><strong>Beep saat booting</strong>: Kode beep menunjukkan komponen bermasalah (RAM, VGA)</li><li><strong>Blue Screen (BSOD)</strong>: Biasanya masalah driver, RAM, atau HDD</li><li><strong>Overheat</strong>: Cek thermal paste, kipas, debu pada heatsink</li></ul><h3>Perawatan Rutin Komputer</h3><ul><li>Bersihkan debu setiap 3-6 bulan menggunakan compressed air</li><li>Ganti thermal paste CPU setiap 2-3 tahun</li><li>Defrag HDD secara berkala (bukan SSD)</li><li>Update driver dan OS secara rutin</li><li>Scan antivirus secara berkala</li></ul>`
  },
  {
    id: 23,
    cat: 'mikrotik',
    title: 'Bandwidth Management MikroTik',
    desc: 'Konfigurasi Simple Queue dan Queue Tree untuk manajemen bandwidth di MikroTik.',
    icon: 'fas fa-tachometer-alt',
    color: '#06B6D4',
    time: '75 menit',
    diff: 'lanjut',
    content: `<h3>Bandwidth Management di MikroTik</h3><p>MikroTik menyediakan dua metode manajemen bandwidth: Simple Queue dan Queue Tree.</p><h3>Simple Queue</h3><div class="code-block"># Batasi bandwidth client tertentu\n[admin@MikroTik] > queue simple add\n  name=client-01\n  target=192.168.1.100\n  max-limit=2M/2M\n\n# Batasi seluruh subnet\n[admin@MikroTik] > queue simple add\n  name=all-client\n  target=192.168.1.0/24\n  max-limit=10M/10M</div><h3>Queue Tree dengan PCQ</h3><div class="code-block"># PCQ untuk pembagian merata\n[admin@MikroTik] > queue type add\n  name=pcq-download\n  kind=pcq pcq-classifier=dst-address\n  pcq-rate=1M</div>`
  },
  {
    id: 24,
    cat: 'linux',
    title: 'DHCP Server di Linux (ISC DHCP)',
    desc: 'Instalasi dan konfigurasi ISC DHCP Server di Ubuntu/Debian untuk jaringan lokal.',
    icon: 'fas fa-database',
    color: '#10B981',
    time: '60 menit',
    diff: 'menengah',
    content: `<h3>Instalasi ISC DHCP Server</h3><div class="code-block">sudo apt update\nsudo apt install isc-dhcp-server</div><h3>Konfigurasi DHCP Server</h3><div class="code-block">sudo nano /etc/dhcp/dhcpd.conf\n\ndefault-lease-time 600;\nmax-lease-time 7200;\n\nsubnet 192.168.1.0 netmask 255.255.255.0 {\n  range 192.168.1.100 192.168.1.200;\n  option routers 192.168.1.1;\n  option domain-name-servers 8.8.8.8, 8.8.4.4;\n  option broadcast-address 192.168.1.255;\n}\n\nsudo systemctl restart isc-dhcp-server\nsudo systemctl enable isc-dhcp-server</div>`
  },
  {
    id: 25,
    cat: 'security',
    title: 'VPN (Virtual Private Network)',
    desc: 'Konsep VPN, jenis protokol VPN, dan konfigurasi VPN sederhana untuk keamanan.',
    icon: 'fas fa-user-shield',
    color: '#06B6D4',
    time: '90 menit',
    diff: 'lanjut',
    content: `<h3>Apa itu VPN?</h3><p>VPN menciptakan tunnel terenkripsi antara perangkat dan server VPN, menyembunyikan traffic dan IP asli pengguna.</p><h3>Protokol VPN Populer</h3><ul><li><strong>OpenVPN</strong>: Open source, sangat aman, lintas platform</li><li><strong>WireGuard</strong>: Modern, cepat, sederhana</li><li><strong>IPSec</strong>: Standar industri, sering dikombinasi dengan L2TP</li><li><strong>PPTP</strong>: Lama, mudah setup, keamanan rendah (tidak direkomendasikan)</li></ul><h3>VPN di MikroTik (PPTP)</h3><div class="code-block">[admin@MikroTik] > interface pptp-server server set enabled=yes\n[admin@MikroTik] > ppp secret add name=user1 password=pass123 service=pptp local-address=10.0.0.1 remote-address=10.0.0.2</div>`
  }
];

let currentCat = 'all';
let bookmarks = JSON.parse(localStorage.getItem('azz-bookmarks') || '[]');
let readItems = JSON.parse(localStorage.getItem('azz-read') || '[]');

function renderMateri() {
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  const search = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const sort = sortSelect ? sortSelect.value : 'default';

  let filtered = materiData.filter(m => {
    const matchCat = currentCat === 'all' || m.cat === currentCat;
    const matchSearch = m.title.toLowerCase().includes(search) || m.desc.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  if (sort === 'asc') filtered.sort((a, b) => a.title.localeCompare(b.title));
  else if (sort === 'desc') filtered.sort((a, b) => b.title.localeCompare(a.title));
  else if (sort === 'easy') filtered.sort((a, b) => ['dasar', 'menengah', 'lanjut'].indexOf(a.diff) - ['dasar', 'menengah', 'lanjut'].indexOf(b.diff));
  else if (sort === 'hard') filtered.sort((a, b) => ['lanjut', 'menengah', 'dasar'].indexOf(a.diff) - ['lanjut', 'menengah', 'dasar'].indexOf(b.diff));

  const resultCount = document.getElementById('resultCount');
  if (resultCount) resultCount.textContent = filtered.length;

  const grid = document.getElementById('materiGrid');
  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-result"><i class="fas fa-search"></i><p>Materi AZZ tidak ditemukan</p></div>';
    return;
  }

  const catColors = {
    jaringan: 'rgba(37,99,235,0.15);color:#60A5FA',
    hardware: 'rgba(245,158,11,0.15);color:#FCD34D',
    mikrotik: 'rgba(139,92,246,0.15);color:#A78BFA',
    linux: 'rgba(16,185,129,0.15);color:#6EE7B7',
    cisco: 'rgba(6,182,212,0.15);color:#67E8F9',
    fiber: 'rgba(16,185,129,0.15);color:#6EE7B7',
    security: 'rgba(239,68,68,0.15);color:#FCA5A5',
    wireless: 'rgba(37,99,235,0.15);color:#93C5FD',
    cloud: 'rgba(6,182,212,0.15);color:#67E8F9',
    troubleshoot: 'rgba(245,158,11,0.15);color:#FCD34D'
  };

  grid.innerHTML = filtered.map(m => {
    const isBookmarked = bookmarks.includes(m.id);
    const isRead = readItems.includes(m.id);
    const progress = isRead ? 100 : 0;
    const diffClass = m.diff === 'dasar' ? 'diff-dasar' : m.diff === 'menengah' ? 'diff-menengah' : 'diff-lanjut';
    const tagStyle = catColors[m.cat] || 'rgba(37,99,235,0.15);color:#60A5FA';
    const [bgStyle, colorStyle] = tagStyle.split(';');

    return `
    <div class="materi-card">
      <div class="materi-card-top">
        <span class="materi-category-tag" style="background:${bgStyle};${colorStyle}">${m.cat.toUpperCase()}</span>
        <button class="bookmark-btn ${isBookmarked ? 'saved' : ''}" onclick="toggleBookmark(${m.id}, this)" aria-label="Bookmark">
          <i class="fa${isBookmarked ? 's' : 'r'} fa-bookmark"></i>
        </button>
      </div>
      <div class="materi-icon" style="background:${m.color}22;color:${m.color}">
        <i class="${m.icon}"></i>
      </div>
      <h3 class="materi-title">${m.title}</h3>
      <p class="materi-desc">${m.desc}</p>
      <div class="materi-meta">
        <span class="meta-item"><i class="fas fa-clock"></i>${m.time}</span>
        <span class="difficulty-badge ${diffClass}">
          ${m.diff === 'dasar' ? '⚡ Dasar' : m.diff === 'menengah' ? '🔥 Menengah' : '💎 Lanjut'}
        </span>
      </div>
      <div class="materi-progress">
        <div class="mp-label">
          <span>${isRead ? 'Selesai' : 'Belum dibaca'}</span>
          <span>${progress}%</span>
        </div>
        <div class="mp-bar"><div class="mp-fill" style="width:${progress}%"></div></div>
      </div>
      <div class="materi-footer">
        <a href="#" class="btn-read" onclick="openModal(${m.id}); return false;">
          <i class="fas fa-book-open"></i> Baca Materi
        </a>
        <button class="btn-secondary" onclick="markRead(${m.id})" aria-label="Tandai Selesai">
          <i class="fas fa-${isRead ? 'check-circle' : 'circle'}"></i>
        </button>
      </div>
    </div>`;
  }).join('');

  updateProgress();
}

function toggleBookmark(id, btn) {
  if (bookmarks.includes(id)) {
    bookmarks = bookmarks.filter(b => b !== id);
    if (btn) {
      btn.classList.remove('saved');
      btn.innerHTML = '<i class="far fa-bookmark"></i>';
    }
    showToast('Bookmark dihapus', 'success');
  } else {
    bookmarks.push(id);
    if (btn) {
      btn.classList.add('saved');
      btn.innerHTML = '<i class="fas fa-bookmark"></i>';
    }
    showToast('Disimpan ke bookmark!', 'success');
  }
  localStorage.setItem('azz-bookmarks', JSON.stringify(bookmarks));
  updateProgress();
}

function markRead(id) {
  if (!readItems.includes(id)) {
    readItems.push(id);
    localStorage.setItem('azz-read', JSON.stringify(readItems));
    showToast('Materi ditandai selesai!', 'success');
  } else {
    readItems = readItems.filter(item => item !== id);
    localStorage.setItem('azz-read', JSON.stringify(readItems));
    showToast('Status baca dibatalkan', 'success');
  }
  renderMateri();
}

function updateProgress() {
  const pct = Math.round((readItems.length / materiData.length) * 100);
  const fill = document.getElementById('progressFill');
  const pctText = document.getElementById('progressPct');
  const readCount = document.getElementById('readCount');
  const bookmarkCount = document.getElementById('bookmarkCount');

  if (fill) fill.style.width = pct + '%';
  if (pctText) pctText.textContent = pct + '%';
  if (readCount) readCount.textContent = readItems.length;
  if (bookmarkCount) bookmarkCount.textContent = bookmarks.length;
}

function openModal(id) {
  const m = materiData.find(x => x.id === id);
  if (!m) return;

  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalBody = document.getElementById('modalBody');
  const modal = document.getElementById('materiModal');

  if (modalTitle) modalTitle.textContent = m.title;
  if (modalMeta) modalMeta.innerHTML = `<i class="fas fa-clock"></i> ${m.time} &nbsp;|&nbsp; <i class="fas fa-signal"></i> ${m.diff.toUpperCase()}`;
  if (modalBody) modalBody.innerHTML = m.content;

  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  if (!readItems.includes(id)) {
    readItems.push(id);
    localStorage.setItem('azz-read', JSON.stringify(readItems));
  }
  setTimeout(() => renderMateri(), 300);
}

function closeModal() {
  const modal = document.getElementById('materiModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Modal Backdrop Click
const modalOverlay = document.getElementById('materiModal');
if (modalOverlay) {
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });
}

// Mobile Sidebar Logic
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');

function openSidebar() {
  if (sidebar) sidebar.classList.add('active');
  if (sidebarOverlay) sidebarOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  if (sidebar) sidebar.classList.remove('active');
  if (sidebarOverlay) sidebarOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (sidebarToggle) sidebarToggle.addEventListener('click', openSidebar);
if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

// Category Filtering
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    renderMateri();
    if (window.innerWidth <= 992) {
      closeSidebar();
    }
  });
});

// Search & Sort Event Listeners
const searchInput = document.getElementById('searchInput');
if (searchInput) searchInput.addEventListener('input', renderMateri);

const sortSelect = document.getElementById('sortSelect');
if (sortSelect) sortSelect.addEventListener('change', renderMateri);

// URL Search Params
const urlParams = new URLSearchParams(window.location.search);
const catParam = urlParams.get('cat');
if (catParam) {
  const btn = document.querySelector(`.cat-btn[data-cat="${catParam}"]`);
  if (btn) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = catParam;
  }
}

// Theme Switcher Logic
const savedTheme = localStorage.getItem('azz-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
  const icon = themeToggle.querySelector('i');
  if (icon) icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('azz-theme', newTheme);
    if (icon) icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  });
}

// Toast Function
function showToast(msg, type = 'success') {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderMateri();
});
