// Product Data
const products = [
    // Fruits
    {
        id: 1,
        name: 'تفاح أحمر طازج',
        category: 'fruits',
        price: 15,
        unit: 'كيلو',
        description: 'تفاح أحمر عالي الجودة وطازج',
        icon: '🍎',
        badge: 'جديد'
    },
    {
        id: 2,
        name: 'برتقال حلو',
        category: 'fruits',
        price: 12,
        unit: 'كيلو',
        description: 'برتقال حلو وعصيري',
        icon: '🍊'
    },
    {
        id: 3,
        name: 'موز أصفر',
        category: 'fruits',
        price: 8,
        unit: 'كيلو',
        description: 'موز طازج وغني بالألياف',
        icon: '🍌'
    },
    {
        id: 4,
        name: 'عنب أحمر',
        category: 'fruits',
        price: 25,
        unit: 'كيلو',
        description: 'عنب أحمر حلو ومنعش',
        icon: '🍇',
        badge: 'عضوي'
    },
    {
        id: 5,
        name: 'فراولة طازة',
        category: 'fruits',
        price: 30,
        unit: 'صندوق',
        description: 'فراولة طازة وحمراء',
        icon: '🍓'
    },
    {
        id: 6,
        name: 'شمام طازج',
        category: 'fruits',
        price: 20,
        unit: 'الحبة',
        description: 'شمام حلو وعطري',
        icon: '🍈'
    },
    // Vegetables
    {
        id: 7,
        name: 'طماطم عضوية',
        category: 'vegetables',
        price: 10,
        unit: 'كيلو',
        description: 'طماطم طازة وعضوية معتمدة',
        icon: '🍅',
        badge: 'عضوي'
    },
    {
        id: 8,
        name: 'خيار أخضر',
        category: 'vegetables',
        price: 8,
        unit: 'كيلو',
        description: 'خيار أخضر غني بالماء',
        icon: '🥒'
    },
    {
        id: 9,
        name: 'فلفل أحمر',
        category: 'vegetables',
        price: 12,
        unit: 'كيلو',
        description: 'فلفل أحمر حلو ومرين',
        icon: '🫑'
    },
    {
        id: 10,
        name: 'جزر برتقالي',
        category: 'vegetables',
        price: 7,
        unit: 'كيلو',
        description: 'جزر حلو غني بالكاروتين',
        icon: '🥕'
    },
    {
        id: 11,
        name: 'بروكلي طازج',
        category: 'vegetables',
        price: 15,
        unit: 'الحبة',
        description: 'بروكلي أخضر غني بالفيتامينات',
        icon: '🥦'
    },
    {
        id: 12,
        name: 'بصل أبيض',
        category: 'vegetables',
        price: 5,
        unit: 'كيلو',
        description: 'بصل أبيض طازج',
        icon: '🧅'
    },
    // Dairy
    {
        id: 13,
        name: 'حليب كامل الدسم',
        category: 'dairy',
        price: 9,
        unit: 'لتر',
        description: 'حليب بقري طازج كامل الدسم',
        icon: '🥛'
    },
    {
        id: 14,
        name: 'زبادي طبيعي',
        category: 'dairy',
        price: 8,
        unit: 'علبة 500g',
        description: 'زبادي طبيعي بدون إضافات',
        icon: '🍨'
    },
    {
        id: 15,
        name: 'جبن أبيض',
        category: 'dairy',
        price: 20,
        unit: 'كيلو',
        description: 'جبن أبيض طازج عالي الجودة',
        icon: '🧀',
        badge: 'جديد'
    },
    {
        id: 16,
        name: 'زبدة عضوية',
        category: 'dairy',
        price: 25,
        unit: '500g',
        description: 'زبدة عضوية معتمدة',
        icon: '🧈',
        badge: 'عضوي'
    },
    {
        id: 17,
        name: 'لبن رايب',
        category: 'dairy',
        price: 6,
        unit: 'لتر',
        description: 'لبن رايب تقليدي طازج',
        icon: '🥛'
    },
    // Beverages
    {
        id: 18,
        name: 'عصير برتقال',
        category: 'beverages',
        price: 10,
        unit: 'لتر',
        description: 'عصير برتقال طازج طبيعي',
        icon: '🧃'
    },
    {
        id: 19,
        name: 'عصير ليمون',
        category: 'beverages',
        price: 8,
        unit: 'لتر',
        description: 'عصير ليمون حامض وحلو',
        icon: '🍋'
    },
    {
        id: 20,
        name: 'ماء معدني',
        category: 'beverages',
        price: 5,
        unit: 'عبوة 1.5L',
        description: 'ماء معدني نقي',
        icon: '💧'
    },
    {
        id: 21,
        name: 'شاي أسود',
        category: 'beverages',
        price: 12,
        unit: 'علبة 250g',
        description: 'شاي أسود عطري وفاخر',
        icon: '🍵'
    },
    {
        id: 22,
        name: 'قهوة عربية',
        category: 'beverages',
        price: 30,
        unit: 'علبة 500g',
        description: 'قهوة عربية أصلية محمصة',
        icon: '☕',
        badge: 'مميز'
    },
    {
        id: 23,
        name: 'عصير تفاح',
        category: 'beverages',
        price: 9,
        unit: 'لتر',
        description: 'عصير تفاح طبيعي 100%',
        icon: '🍎'
    },
    // Household Items
    {
        id: 24,
        name: 'صابون غسيل',
        category: 'household',
        price: 15,
        unit: 'علبة 3 قطع',
        description: 'صابون غسيل منعش وفعال',
        icon: '🧼'
    },
    {
        id: 25,
        name: 'منظف الأرضيات',
        category: 'household',
        price: 12,
        unit: 'زجاجة 1L',
        description: 'منظف أرضيات قوي وآمن',
        icon: '🧹'
    },
    {
        id: 26,
        name: 'ورق مطبخ',
        category: 'household',
        price: 8,
        unit: 'علبة 4 رولات',
        description: 'ورق مطبخ ماص وقوي',
        icon: '🧻'
    },
    {
        id: 27,
        name: 'منظف زجاج',
        category: 'household',
        price: 10,
        unit: 'زجاجة 500ml',
        description: 'منظف زجاج لامع بدون تخطيط',
        icon: '✨'
    },
    {
        id: 28,
        name: 'مسحوق غسيل',
        category: 'household',
        price: 20,
        unit: 'علبة 1kg',
        description: 'مسحوق غسيل فعال ولطيف',
        icon: '🧺'
    },
    {
        id: 29,
        name: 'شموع معطرة',
        category: 'household',
        price: 18,
        unit: 'علبة',
        description: 'شموع معطرة برائحة فاخرة',
        icon: '🕯️'
    }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const categoryButtons = document.querySelectorAll('.category-card');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

let currentCategory = 'all';
let currentSearchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    renderProducts(products);
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Category filtering
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.getAttribute('data-category');
            filterAndSearch();
        });
    });

    // Search functionality
    searchInput.addEventListener('input', function () {
        currentSearchQuery = this.value.toLowerCase();
        filterAndSearch();
    });

    // Search button
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function () {
            const query = searchInput.value;
            if (query) {
                filterAndSearch();
            }
        });
    }

    // Search on Enter key
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            filterAndSearch();
        }
    });
}

// Filter and Search Products
function filterAndSearch() {
    let filtered = products;

    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(product => product.category === currentCategory);
    }

    // Filter by search query
    if (currentSearchQuery) {
        filtered = filtered.filter(product =>
            product.name.includes(currentSearchQuery) ||
            product.description.includes(currentSearchQuery)
        );
    }

    // Render filtered products
    if (filtered.length === 0) {
        productsGrid.innerHTML = '';
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
        renderProducts(filtered);
    }
}

// Render Products
function renderProducts(productList) {
    productsGrid.innerHTML = '';

    productList.forEach((product, index) => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);

        // Animate card on render
        setTimeout(() => {
            productCard.style.animation = `slideUp 0.5s ease-out forwards`;
        }, index * 50);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            ${product.icon}
            ${product.badge ? `<div style="position: absolute; bottom: 10px; right: 10px;">
                <span class="product-badge">${product.badge}</span>
            </div>` : ''}
        </div>
        <div class="product-info">
            <p class="product-category">${getCategoryLabel(product.category)}</p>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div>
                    <div class="product-price">${product.price} ₪</div>
                    <span class="product-price-unit">/ ${product.unit}</span>
                </div>
            </div>
        </div>
    `;

    // Add hover effect
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });

    return card;
}

// Get Category Label
function getCategoryLabel(category) {
    const labels = {
        fruits: 'الفواكه',
        vegetables: 'الخضروات',
        dairy: 'الألبان',
        beverages: 'المشروبات',
        household: 'منتجات منزلية'
    };
    return labels[category] || category;
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for elements on load
function addScrollAnimation() {
    const elements = document.querySelectorAll('.product-card, .offer-card, .contact-item');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(el => observer.observe(el));
}

// Call on page load
window.addEventListener('load', addScrollAnimation);

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    // Alt + S for search
    if (e.altKey && e.key === 's') {
        e.preventDefault();
        searchInput.focus();
    }

    // Escape to clear search
    if (e.key === 'Escape' && searchInput === document.activeElement) {
        searchInput.value = '';
        currentSearchQuery = '';
        filterAndSearch();
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        // Toggle mobile menu functionality
        console.log('Menu toggled');
    });
}

// Add loading animation simulation
window.addEventListener('load', function () {
    // Fade in sections on load
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s forwards`;
    });
});
