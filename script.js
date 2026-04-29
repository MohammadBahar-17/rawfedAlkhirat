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

// ============================================================================
// SHOPPING CART SYSTEM - Complete implementation with WhatsApp integration
// ============================================================================

/**
 * Cart Module - Handles all shopping cart operations
 * Features: Add/Remove items, quantity management, localStorage persistence
 */
const ShoppingCart = (() => {
    // Private properties
    let items = []; // Array of cart items: {id, name, price, quantity}
    const STORAGE_KEY = 'rwafed_cart'; // localStorage key

    // Load cart from localStorage on initialization
    function loadFromStorage() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                items = JSON.parse(stored);
                return true;
            }
        } catch (error) {
            console.error('Failed to load cart from storage:', error);
        }
        return false;
    }

    // Save cart to localStorage
    function saveToStorage() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
            return true;
        } catch (error) {
            console.error('Failed to save cart to storage:', error);
            return false;
        }
    }

    // Public methods (revealed module pattern)
    return {
        /**
         * Add product to cart or increase quantity if exists
         * @param {number} productId - Product ID
         * @param {string} productName - Product name
         * @param {number} price - Product price
         */
        addItem: function (productId, productName, price) {
            const existingItem = items.find(item => item.id === productId);

            if (existingItem) {
                // Item exists - increase quantity
                existingItem.quantity += 1;
            } else {
                // New item - add to cart
                items.push({
                    id: productId,
                    name: productName,
                    price: price,
                    quantity: 1
                });
            }

            saveToStorage();
            this.notifyUpdate(); // Trigger UI update
        },

        /**
         * Remove item from cart
         * @param {number} productId - Product ID to remove
         */
        removeItem: function (productId) {
            items = items.filter(item => item.id !== productId);
            saveToStorage();
            this.notifyUpdate();
        },

        /**
         * Update item quantity
         * @param {number} productId - Product ID
         * @param {number} quantity - New quantity (1 or more)
         */
        updateQuantity: function (productId, quantity) {
            const item = items.find(item => item.id === productId);
            if (item) {
                if (quantity <= 0) {
                    this.removeItem(productId);
                } else {
                    item.quantity = quantity;
                    saveToStorage();
                    this.notifyUpdate();
                }
            }
        },

        /**
         * Get all cart items
         * @returns {Array} Cart items
         */
        getItems: function () {
            return [...items]; // Return copy to prevent external modification
        },

        /**
         * Get cart item count
         * @returns {number} Total items in cart
         */
        getItemCount: function () {
            return items.reduce((total, item) => total + item.quantity, 0);
        },

        /**
         * Calculate total price
         * @returns {number} Total price in Shekels
         */
        getTotalPrice: function () {
            return items.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

        /**
         * Clear entire cart
         */
        clear: function () {
            items = [];
            saveToStorage();
            this.notifyUpdate();
        },

        /**
         * Check if cart is empty
         * @returns {boolean} True if empty
         */
        isEmpty: function () {
            return items.length === 0;
        },

        /**
         * Notify listeners of cart changes (triggers UI update)
         */
        notifyUpdate: function () {
            // Dispatch custom event for cart updates
            const event = new CustomEvent('cartUpdated', {
                detail: {
                    itemCount: this.getItemCount(),
                    totalPrice: this.getTotalPrice()
                }
            });
            document.dispatchEvent(event);
        },

        /**
         * Initialize cart from storage
         */
        init: function () {
            loadFromStorage();
            this.notifyUpdate();
        }
    };
})();

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function () {
    ShoppingCart.init();
});

/**
 * Cart UI Module - Handles cart display and interaction
 */
const CartUI = (() => {
    let isOpen = false;

    return {
        /**
         * Initialize cart UI components
         */
        init: function () {
            // Listen for cart updates
            document.addEventListener('cartUpdated', () => {
                this.updateCartBadge();
                this.renderCart();
            });

            // Cart button click handler
            const cartBtn = document.getElementById('cartBtn');
            if (cartBtn) {
                cartBtn.addEventListener('click', () => this.toggleCart());
            }

            // Close cart when clicking outside
            document.addEventListener('click', (e) => {
                const cartPanel = document.getElementById('cartPanel');
                const cartBtn = document.getElementById('cartBtn');
                if (cartPanel && cartBtn && isOpen &&
                    !cartPanel.contains(e.target) && !cartBtn.contains(e.target)) {
                    this.closeCart();
                }
            });

            this.updateCartBadge();
        },

        /**
         * Toggle cart panel visibility
         */
        toggleCart: function () {
            if (isOpen) {
                this.closeCart();
            } else {
                this.openCart();
            }
        },

        /**
         * Open cart panel
         */
        openCart: function () {
            const cartPanel = document.getElementById('cartPanel');
            if (cartPanel) {
                cartPanel.classList.add('active');
                isOpen = true;
                this.renderCart();
            }
        },

        /**
         * Close cart panel
         */
        closeCart: function () {
            const cartPanel = document.getElementById('cartPanel');
            if (cartPanel) {
                cartPanel.classList.remove('active');
                isOpen = false;
            }
        },

        /**
         * Update cart badge with item count
         */
        updateCartBadge: function () {
            const badge = document.getElementById('cartBadge');
            const count = ShoppingCart.getItemCount();
            if (badge) {
                badge.textContent = count;
                badge.style.display = count > 0 ? 'flex' : 'none';
            }
        },

        /**
         * Render cart items in the cart panel
         */
        renderCart: function () {
            const cartItems = document.getElementById('cartItems');
            const cartEmpty = document.getElementById('cartEmpty');
            const cartTotal = document.getElementById('cartTotal');

            if (!cartItems) return;

            const items = ShoppingCart.getItems();

            if (items.length === 0) {
                cartItems.innerHTML = '';
                if (cartEmpty) cartEmpty.style.display = 'block';
                if (cartTotal) cartTotal.style.display = 'none';
                return;
            }

            if (cartEmpty) cartEmpty.style.display = 'none';
            if (cartTotal) cartTotal.style.display = 'block';

            // Render each item
            cartItems.innerHTML = items.map(item => `
                <div class="cart-item" data-product-id="${item.id}">
                    <div class="cart-item-details">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <p class="cart-item-price">${item.price} ₪</p>
                    </div>
                    <div class="cart-item-controls">
                        <button class="qty-btn qty-decrease" data-product-id="${item.id}">-</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn qty-increase" data-product-id="${item.id}">+</button>
                    </div>
                    <button class="cart-item-remove" data-product-id="${item.id}" title="حذف">🗑️</button>
                </div>
            `).join('');

            // Update total
            const total = ShoppingCart.getTotalPrice();
            if (cartTotal) {
                cartTotal.innerHTML = `<strong>المجموع: ${total} ₪</strong>`;
            }

            // Attach event listeners to quantity controls
            document.querySelectorAll('.qty-increase').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const productId = parseInt(e.target.dataset.productId);
                    const item = ShoppingCart.getItems().find(i => i.id === productId);
                    if (item) ShoppingCart.updateQuantity(productId, item.quantity + 1);
                });
            });

            document.querySelectorAll('.qty-decrease').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const productId = parseInt(e.target.dataset.productId);
                    const item = ShoppingCart.getItems().find(i => i.id === productId);
                    if (item) ShoppingCart.updateQuantity(productId, item.quantity - 1);
                });
            });

            // Attach event listeners to remove buttons
            document.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const productId = parseInt(e.target.dataset.productId);
                    ShoppingCart.removeItem(productId);
                });
            });
        }
    };
})();

/**
 * WhatsApp Integration Module - Generate and send orders via WhatsApp
 */
const WhatsAppOrder = (() => {
    const WHATSAPP_NUMBER = '972594454879'; // Palestinian phone number (without +)
    const STORE_NAME = 'مؤسسة روافد الخيرات';

    return {
        /**
         * Generate WhatsApp message from cart items
         * @returns {string} Formatted order message
         */
        generateMessage: function () {
            const items = ShoppingCart.getItems();
            const total = ShoppingCart.getTotalPrice();

            if (items.length === 0) {
                return 'السلة فارغة!';
            }

            // Build message
            let message = `*مرحباً بك في ${STORE_NAME}*\n`;
            message += `أريد طلب المنتجات التالية:\n\n`;

            // Add items
            items.forEach((item, index) => {
                message += `${index + 1}. ${item.name}\n`;
                message += `   الكمية: ${item.quantity}\n`;
                message += `   السعر: ${item.price} ₪ × ${item.quantity} = ${item.price * item.quantity} ₪\n\n`;
            });

            // Add total
            message += `*المجموع: ${total} ₪*\n\n`;
            message += `_الرجاء تأكيد الطلب والعنوان_`;

            return message;
        },

        /**
         * Send order via WhatsApp
         */
        sendOrder: function () {
            const message = this.generateMessage();

            if (ShoppingCart.isEmpty()) {
                alert('السلة فارغة! أضف منتجات قبل الطلب.');
                return;
            }

            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);

            // WhatsApp Web URL (works on desktop and mobile)
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Clear cart after order
            ShoppingCart.clear();
        }
    };
})();

// ============================================================================
// PRODUCT CARD MODIFICATION - Add "Add to Cart" button
// ============================================================================

// Store original createProductCard function
const originalCreateProductCard = createProductCard;

// Override createProductCard to include "Add to Cart" button
createProductCard = function (product) {
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
            <button class="add-to-cart-btn" data-product-id="${product.id}" data-product-name="${product.name}" data-product-price="${product.price}">
                🛒 أضف للسلة
            </button>
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
};

/**
 * Setup add to cart button event handler
 */
function setupAddToCartButton(btn) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const productId = parseInt(this.dataset.productId);
        const productName = this.dataset.productName;
        const productPrice = parseInt(this.dataset.productPrice);

        ShoppingCart.addItem(productId, productName, productPrice);

        // Visual feedback
        this.textContent = '✓ تمت الإضافة!';
        this.style.background = '#4CAF50';
        setTimeout(() => {
            this.textContent = '🛒 أضف للسلة';
            this.style.background = '';
        }, 1500);
    });
}

// Initialize Cart UI when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    CartUI.init();

    // Setup event listeners for all add to cart buttons (including static ones in offers section)
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        setupAddToCartButton(btn);
    });
});
