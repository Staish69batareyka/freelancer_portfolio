const btnDarkMode = document.querySelector('.dark-mode-btn')

// 1. Проверка тёмной темы в системных настройках

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add('dark-mode-btn--active')
    document.body.classList.add('dark')
}

// 2.  Проверка тёмной темы в localStorage

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active')
    document.body.classList.add('dark')
} else {
    btnDarkMode.classList.remove('dark-mode-btn--active')
    document.body.classList.remove('dark')
}

// 3. Если меняются системные настройки, меняем тему

window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', () => {
    const newColorSheme = event.matches ? 'dark' : 'light'

    if (newColorSheme === 'dark') {
        btnDarkMode.classList.add('dark-mode-btn--active')
        document.body.classList.add('dark')
        localStorage.steItem('darkMode', 'dark')
    }
    else {
        btnDarkMode.classList.remove('dark-mode-btn--active')
        document.body.classList.remove('dark')
        localStorage.steItem('darkMode', 'light')
    }
})

//включение ночного режима

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle('dark-mode-btn--active')
    const isDark = document.body.classList.toggle('dark')

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}