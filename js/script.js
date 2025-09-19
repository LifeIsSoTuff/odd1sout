// Theme toggle (persists)
const themeToggle = (id) => {
  const btn = document.getElementById(id);
  if(!btn) return;
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');
    // persist
    const isLight = document.documentElement.classList.contains('light-mode');
    localStorage.setItem('themeLight', isLight ? '1' : '0');
    btn.textContent = isLight ? '☀️' : '🌙';
  });
};

['themeToggle','themeToggleTop','themeToggleDonate','themeToggleFeed'].forEach(themeToggle);

window.addEventListener('DOMContentLoaded', () => {
  // restore theme
  if(localStorage.getItem('themeLight') === '1'){
    document.documentElement.classList.add('light-mode');
    document.querySelectorAll('.btn-icon').forEach(b => b.textContent = '☀️');
  }
});
