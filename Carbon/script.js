document.addEventListener('DOMContentLoaded', () => {
    // Menu functionality
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const submenu = item.nextElementSibling;
            
            // Close all other open submenus
            menuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.nextElementSibling.classList.remove('active');
                }
            });
            
            // Toggle the clicked submenu
            submenu.classList.toggle('active');
        });
    });

    // Close submenus when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.main-menu')) {
            document.querySelectorAll('.submenu').forEach(submenu => {
                submenu.classList.remove('active');
            });
        }
    });

    // Icon menu functionality
    const iconItems = document.querySelectorAll('.icon-item');
    const subcategoriesContainer = document.getElementById('subcategories');

    const data = [
        { category: "Stationery Items", item: "Paper", usage: "10 liters per sheet" },
        { category: "Stationery Items", item: "Books", usage: "700 liters per book" },
        { category: "Stationery Items", item: "Pens", usage: "7.5 liters per pen" },
        { category: "Stationery Items", item: "Pencils", usage: "0.7 liters per pencil" },
        { category: "Stationery Items", item: "Erasers", usage: "3.2 liters per eraser" },
        { category: "Personal Hygiene Products", item: "Perfume", usage: "600 liters per 100ml bottle" },
        { category: "Personal Hygiene Products", item: "Face Cream", usage: "400 liters per 100ml jar" },
        { category: "Personal Hygiene Products", item: "Shampoo", usage: "800 liters per 100ml bottle" },
        { category: "Personal Hygiene Products", item: "Conditioner", usage: "800 liters per 100ml bottle" },
        { category: "Personal Hygiene Products", item: "Body Lotion", usage: "300 liters per 100ml bottle" },
        { category: "Personal Hygiene Products", item: "Toothbrush", usage: "1.5 liters per toothbrush" },
        { category: "Personal Hygiene Products", item: "Toothpaste", usage: "5 liters per 100ml tube" },
        { category: "Personal Hygiene Products", item: "Facewash", usage: "8 liters per 100ml bottle" },
        { category: "Personal Hygiene Products", item: "Soap", usage: "10 liters per bar" },
        { category: "Electronic Devices", item: "Mobile Phone", usage: "1270 liters per phone" },
        { category: "Electronic Devices", item: "Desktop Computer", usage: "19000 liters per computer" },
        { category: "Electronic Devices", item: "Laptop", usage: "1900 liters per laptop" },
        { category: "Electronic Devices", item: "Tablet", usage: "1200 liters per tablet" },
        { category: "Electronic Devices", item: "Television", usage: "14000 liters per TV" },
        { category: "Electronic Devices", item: "Smartwatch", usage: "250 liters per smartwatch" },
        { category: "Food Items", item: "Apple", usage: "70 liters per apple" },
        { category: "Food Items", item: "Banana", usage: "160 liters per banana" },
        { category: "Food Items", item: "Bread", usage: "40 liters per loaf" },
        { category: "Food Items", item: "Chicken", usage: "4300 liters per kilogram" },
        { category: "Food Items", item: "Chocolate", usage: "17196 liters per kilogram" },
        { category: "Food Items", item: "Egg", usage: "200 liters per egg" },
        { category: "Food Items", item: "Rice", usage: "2500 liters per kilogram" },
        { category: "Food Items", item: "Tomato", usage: "13 liters per tomato" },
        { category: "Food Items", item: "Potato", usage: "25 liters per potato" },
        { category: "Food Items", item: "Beef", usage: "15400 liters per kilogram" },
        { category: "Food Items", item: "Pasta", usage: "180 liters per kilogram" },
        { category: "Household Items", item: "Cotton T-shirt", usage: "2700 liters per T-shirt" },
        { category: "Household Items", item: "Jeans", usage: "8000 liters per pair of jeans" },
        { category: "Household Items", item: "Paper", usage: "10 liters per sheet" },
        { category: "Household Items", item: "Smartphone", usage: "910 liters per phone" },
        { category: "Household Items", item: "Laptop", usage: "50000 liters per laptop" },
        { category: "Household Items", item: "Newspaper", usage: "300 liters per newspaper" },
        { category: "Utilities", item: "Shower", usage: "90 liters per shower" },
        { category: "Utilities", item: "Washing Clothes", usage: "75 liters per load" },
        { category: "Utilities", item: "Washing Dishes", usage: "40 liters per load (hand washing)" },
        { category: "Utilities", item: "Dishwashing (machine)", usage: "8 liters per load" },
        { category: "Utilities", item: "Toilet Flush", usage: "7.5 liters per flush" },
        { category: "Utilities", item: "Brushing Teeth", usage: "6 liters per brushing" },
        { category: "Beverages", item: "Beer", usage: "298 liters per liter of beer" },
        { category: "Beverages", item: "Soft Drink", usage: "280 liters per liter of soft drink" },
        { category: "Beverages", item: "Milk", usage: "1020 liters per liter of milk" },
        { category: "Beverages", item: "Coffee", usage: "140 liters per cup (125ml)" },
        { category: "Beverages", item: "Tea", usage: "30 liters per cup (125ml)" }
    ];

    iconItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.dataset.category;
            showSubcategories(category);
            setActiveItem(item);
        });
    });

    function showSubcategories(category) {
        const filteredData = data.filter(item => item.category === category);
        subcategoriesContainer.innerHTML = '';

        filteredData.forEach(item => {
            const subcategoryElement = document.createElement('div');
            subcategoryElement.classList.add('subcategory');
            subcategoryElement.innerHTML = `
                <h3>${item.item}</h3>
                <p class="usage-info">Usage: <span>${item.usage}</span></p>
            `;
            subcategoriesContainer.appendChild(subcategoryElement);

            subcategoryElement.addEventListener('click', (e) => {
                // Deactivate all other subcategories
                document.querySelectorAll('.subcategory').forEach(subcat => {
                    if (subcat !== subcategoryElement) {
                        subcat.classList.remove('active');
                    }
                });

                // Toggle the clicked subcategory
                subcategoryElement.classList.toggle('active');
            });
        });

        // Animate subcategories appearance
        subcategoriesContainer.style.opacity = '0';
        subcategoriesContainer.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            subcategoriesContainer.style.opacity = '1';
            subcategoriesContainer.style.transform = 'translateY(0)';
        }, 50);
    }

    function setActiveItem(clickedItem) {
        iconItems.forEach(item => item.classList.remove('active'));
        clickedItem.classList.add('active');
    }
});