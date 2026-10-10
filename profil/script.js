document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Functionality
  const THEME_KEY = 'azz-tkj-theme';
  const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = themeToggleBtn.querySelector('i');

  // Set initial theme
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Toggle Event Listener
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      themeIcon.className = 'fas fa-sun';
      themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      themeIcon.className = 'fas fa-moon';
      themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
});
