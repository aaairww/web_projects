document.addEventListener("DOMContentLoaded", () => {
    const categoryFilter = document.getElementById("category");
    const minPriceInput = document.getElementById("min-price");
    const maxPriceInput = document.getElementById("max-price");
    const applyFiltersButton = document.getElementById("apply-filters");
    const clearFiltersButton = document.createElement("button");
    const products = document.querySelectorAll(".product");

    // Добавляем кнопку "Очистить" в интерфейс
    clearFiltersButton.textContent = "Очистить";
    clearFiltersButton.style.marginLeft = "10px"; // Отступ для кнопки
    applyFiltersButton.insertAdjacentElement("afterend", clearFiltersButton);

    // Обработчик кнопки "Применить"
    applyFiltersButton.addEventListener("click", () => {
        const selectedCategory = categoryFilter.value;
        const minPrice = parseFloat(minPriceInput.value) || 0; // Если поле пустое, берем 0
        const maxPrice = parseFloat(maxPriceInput.value) || Infinity; // Если поле пустое, берем бесконечность

        products.forEach(product => {
            const productCategory = product.dataset.category;
            const productPrice = parseFloat(product.dataset.price);

            // Проверка на соответствие фильтрам
            const matchesCategory = selectedCategory === "all" || productCategory === selectedCategory;
            const matchesPrice = productPrice >= minPrice && productPrice <= maxPrice;

            // Показать или скрыть продукт
            if (matchesCategory && matchesPrice) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });

    // Обработчик кнопки "Очистить"
    clearFiltersButton.addEventListener("click", () => {
        // Сброс значений фильтров
        categoryFilter.value = "all";
        minPriceInput.value = "";
        maxPriceInput.value = "";

        // Скрываем все карточки товаров
        products.forEach(product => {
            product.style.display = "none"; // Прячем все товары
        });

        // Прокрутка страницы к началу
        window.scrollTo(0, 0); // Возвращает страницу к началу
    });
});
