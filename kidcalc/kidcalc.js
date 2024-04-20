
const selectedTheme = localStorage.getItem('selectedTheme');
if (selectedTheme) {
    document.querySelector('.theme-style').setAttribute('href', 'assets/' + selectedTheme + '-theme.css');
    document.getElementById('theme').value = selectedTheme;
}

document.getElementById('theme').addEventListener('change', function () {
    const selectedTheme = this.value;
    localStorage.setItem('selectedTheme', selectedTheme);
    document.querySelector('.theme-style').setAttribute('href', 'assets/' + selectedTheme + '-theme.css');
});
