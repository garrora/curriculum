// Variables
const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const toggleColors = document.getElementById('toggle-colors');

const rootStyles = document.documentElement.style;

toggleTheme.addEventListener('click', () => {

    // Cambia el color del body y su respectivo icono
    document.body.classList.toggle('dark');
    toggleIcon.src.includes('moon.svg') ? (toggleIcon.src = 'assets/icons/sun.svg', toggleText.textContent = 'Tema claro') : (toggleIcon.src = 'assets/icons/moon.svg', toggleText.textContent = 'Tema oscuro');

})

toggleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
})