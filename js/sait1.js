// Создаем переменную для хранения выбранной категории (1, 2 или 3)
let selectedCategory = null;

// Отримуємо всі кнопки та контент вкладок
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

// Отримуємо елемент для відображення вибраної категорії
const categoryValueElement = document.getElementById('category-value');

// Додаємо обробник подій для кожної кнопки
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Видаляємо клас "active" у всіх кнопок і контенту
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Додаємо клас "active" до обраної кнопки та відповідного контенту
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Отримуємо елементи сторінки вибору категорії та основної сторінки
const categoryPage = document.getElementById('category-page');
const mainPage = document.getElementById('main-page');
const teacherBtn = document.getElementById('teacher-btn');
const studentBtn = document.getElementById('student-btn');
const parentBtn = document.getElementById('parent-btn');

// Додаємо обробник подій для кнопок вибору категорії
teacherBtn.addEventListener('click', () => {
    selectedCategory = 1; // Вчитель = 1
    categoryPage.style.display = 'none';
    mainPage.style.display = 'flex';
    categoryValueElement.textContent = "Вчитель (1)"; // Оновлюємо текст
});

studentBtn.addEventListener('click', () => {
    selectedCategory = 2; // Учень = 2
    categoryPage.style.display = 'none';
    mainPage.style.display = 'flex';
    categoryValueElement.textContent = "Учень (2)"; // Оновлюємо текст
});

parentBtn.addEventListener('click', () => {
    selectedCategory = 3; // Батьки = 3
    categoryPage.style.display = 'none';
    mainPage.style.display = 'flex';
    categoryValueElement.textContent = "Батьки (3)"; // Оновлюємо текст
});