/**
 * AZZ LEARNING HUB - JAVASCRIPT LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
});

/* ==========================================================================
   THEME TOGGLE SYSTEM
   ========================================================================== */
function initTheme() {
    const savedTheme = localStorage.getItem('azz-tkj-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', nextTheme);
            localStorage.setItem('azz-tkj-theme', nextTheme);
            updateThemeIcon(nextTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeBtn = document.getElementById('themeToggle');
    if (!themeBtn) return;
    const icon = themeBtn.querySelector('i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

/* ==========================================================================
   PRACTICUM NAVIGATION SYSTEM
   ========================================================================== */
function showPrak(id, event) {
    // Hide all panels
    const panels = document.querySelectorAll('.prak-panel');
    panels.forEach(panel => panel.classList.remove('active'));

    // Deactivate all menu items
    const menuItems = document.querySelectorAll('.prak-menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Activate selected panel & menu button
    const selectedPanel = document.getElementById('prak-' + id);
    if (selectedPanel) {
        selectedPanel.classList.add('active');
    }

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // Close mobile menu if open
    closeMobileSidebar();

    // Smooth scroll to top of content area on desktop/mobile
    const contentArea = document.querySelector('.praktikum-content');
    if (contentArea) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = contentArea.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

/* ==========================================================================
   MOBILE SIDEBAR DRAWER
   ========================================================================== */
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const overlay = document.getElementById('sidebarOverlay');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleMobileSidebar);
    }

    if (overlay) {
        overlay.addEventListener('click', closeMobileSidebar);
    }
}

function toggleMobileSidebar() {
    const sidebar = document.getElementById('prakSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('mobile-open');
        overlay.classList.toggle('active');
    }
}

function closeMobileSidebar() {
    const sidebar = document.getElementById('prakSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar && overlay) {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
    }
}

/* ==========================================================================
   CODE COPY TOOL
   ========================================================================== */
function copyCode(button) {
    const wrapper = button.closest('.code-block-wrapper');
    if (!wrapper) return;
    const codeElement = wrapper.querySelector('.step-code');
    if (!codeElement) return;

    const textToCopy = codeElement.textContent;

    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Tersalin!';
        button.style.background = 'var(--success)';
        button.style.color = '#fff';

        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin text: ', err);
    });
}
