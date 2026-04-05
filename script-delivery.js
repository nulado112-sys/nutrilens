// ==========================================
// VISIT ANFEH DELIVERY - INTERACTIVE SYSTEM
// Modern ordering system with WhatsApp integration
// ==========================================

// Restaurant Menu Data (includes the full Angels Sushi menu from screenshots)
const restaurantMenus = {
    'angels-sushi': {
        name: 'Angels Sushi',
        logo: 'assets/restaurants/angels-sushi/logo.png',
        items: [
            // Appetizers
            { name: 'Dumplings', desc: '5 pieces', price: 5.00 },
            { name: 'Shrimp Tempura', desc: 'Crispy fried shrimp', price: 9.00 },
            { name: 'Edamame', desc: 'Steamed soybeans', price: 5.00 },
            { name: 'Shrimp Dynamite', desc: 'Spicy shrimp appetizer', price: 9.00 },
            { name: 'Calamari', desc: 'Fried calamari rings', price: 9.00 },
            { name: 'Garlic Butter Mussels', desc: 'Fresh mussels', price: 9.00 },
            { name: 'Spring Rolls', desc: 'Crispy vegetable rolls', price: 5.00 },
            { name: 'Spicy Kani Rice Paper Boats', desc: 'Crab in rice paper', price: 9.00 },
            // Salads
            { name: 'Wakame Salad', desc: 'Seaweed salad with sesame', price: 8.00 },
            { name: 'Shrimp Rocca Salad', desc: 'Rocca, shrimp, avocado', price: 8.00 },
            { name: 'Crab Salad', desc: 'Crab, mango, avocado', price: 10.00 },
            { name: 'Summer Salad', desc: 'Mango, avocado, cucumber', price: 8.00 },
            { name: 'Salmon Salad', desc: 'Salmon, avocado, tomatoes', price: 11.00 },
            // Nigiri (2pcs)
            { name: 'Salmon Nigiri', desc: 'Fresh salmon - 2pcs', price: 4.00 },
            { name: 'Shrimp Nigiri', desc: 'Cooked shrimp - 2pcs', price: 5.00 },
            { name: 'Unagi Nigiri', desc: 'Grilled eel - 2pcs', price: 7.00 },
            { name: 'Crab Stick Nigiri', desc: 'Crab stick - 2pcs', price: 3.00 },
            { name: 'Tuna Nigiri', desc: 'Fresh tuna - 2pcs', price: 5.00 },
            { name: 'Avocado Nigiri', desc: 'Fresh avocado - 2pcs', price: 3.00 },
            // Sashimi (5pcs)
            { name: 'Tuna Sashimi', desc: 'Fresh tuna slices - 5pcs', price: 9.00 },
            { name: 'Salmon Sashimi', desc: 'Fresh salmon - 5pcs', price: 8.00 },
            { name: 'Unagi Sashimi', desc: 'Eel slices - 5pcs', price: 9.00 },
            { name: 'Shrimp Sashimi', desc: 'Cooked shrimp - 5pcs', price: 7.00 },
            { name: 'Octopus Sashimi', desc: 'Octopus slices - 5pcs', price: 7.00 },
            // Maki Rolls (8pcs)
            { name: 'California Maki', desc: 'Crab, avocado, cucumber - 8pcs', price: 8.00 },
            { name: 'Philly Salmon Maki', desc: 'Smoked salmon, cream cheese - 8pcs', price: 8.00 },
            { name: 'Spicy Tuna Maki', desc: 'Tuna with spicy mayo - 8pcs', price: 8.00 },
            { name: 'Shrimp Tempura Maki', desc: 'Crispy shrimp tempura - 8pcs', price: 8.00 },
            // Special Rolls (10pcs)
            { name: 'Dragon Roll', desc: 'Shrimp tempura, avocado - 10pcs', price: 10.00 },
            { name: 'Rainbow Roll', desc: 'Crab, mango, assorted fish - 10pcs', price: 10.00 },
            { name: 'Volcano Roll', desc: 'Cucumber, cream cheese, shrimp - 10pcs', price: 10.00 },
            { name: 'Crispy Salmon Roll', desc: 'Crab, cucumber, spiced salmon - 10pcs', price: 10.00 },
            // Drinks
            { name: 'Water', desc: 'Bottled water', price: 1.00 },
            { name: 'Soft Drinks', desc: 'Coca-Cola, Sprite, etc.', price: 2.00 },
            { name: 'Iced Tea', desc: 'Refreshing iced tea', price: 3.00 },
            { name: 'Boba Tea', desc: 'Flavored bubble tea', price: 7.00 }
        ]
    },
    'doze-lb': {
        name: 'Doze LB',
        logo: 'assets/restaurants/doze-lb/logo.png',
        items: [
            { name: 'Espresso', desc: 'Double shot espresso', price: 2.50 },
            { name: 'Cappuccino', desc: 'Espresso with steamed milk', price: 3.50 },
            { name: 'Iced Latte', desc: 'Cold coffee with milk', price: 4.00 },
            { name: 'Flat White', desc: 'Smooth coffee with microfoam', price: 3.75 },
            { name: 'Mocha', desc: 'Espresso with chocolate', price: 4.50 },
            { name: 'Chocolate Cake', desc: 'Rich chocolate layer cake', price: 5.00 },
            { name: 'Cheesecake', desc: 'Creamy New York style', price: 5.50 },
            { name: 'Tiramisu', desc: 'Italian coffee dessert', price: 6.00 },
            { name: 'Croissant', desc: 'Buttery French pastry', price: 3.00 },
            { name: 'Muffin', desc: 'Blueberry or chocolate', price: 3.50 }
        ]
    },
    'mayel-lb': {
        name: 'Mayel LB',
        logo: 'assets/restaurants/mayel-lb/logo.png',
        items: [
            { name: 'Shawarma Plate', desc: 'Chicken or beef with sides', price: 8.00 },
            { name: 'Falafel Wrap', desc: 'Crispy falafel with tahini', price: 5.50 },
            { name: 'Fattoush Salad', desc: 'Mixed greens with crispy pita', price: 5.00 },
            { name: 'Grilled Halloumi', desc: 'Grilled cheese with vegetables', price: 6.50 },
            { name: 'Lentil Soup', desc: 'Hearty red lentil soup', price: 3.50 },
            { name: 'Hummus Plate', desc: 'Chickpea dip with pita', price: 4.50 },
            { name: 'Chicken Taouk Plate', desc: 'Grilled chicken skewers', price: 9.00 },
            { name: 'Mixed Mezze', desc: 'Assorted Lebanese appetizers', price: 12.00 }
        ]
    },
    'machewee-express': {
        name: 'Machewee Express',
        logo: 'assets/restaurants/machewee-express/logo.png',
        items: [
            { name: 'Cheeseburger', desc: 'Beef patty, cheese, lettuce, tomato', price: 6.50 },
            { name: 'Chicken Sandwich', desc: 'Crispy or grilled chicken', price: 6.00 },
            { name: 'French Fries', desc: 'Crispy golden fries', price: 3.00 },
            { name: 'Onion Rings', desc: 'Breaded onion rings', price: 3.50 },
            { name: 'Chicken Nuggets', desc: '10 pieces with sauce', price: 5.50 },
            { name: 'Hot Dog', desc: 'Classic hot dog', price: 4.00 },
            { name: 'Chicken Wings', desc: '8 pieces with sauce', price: 7.00 },
            { name: 'Milkshake', desc: 'Vanilla, chocolate, or strawberry', price: 4.50 }
        ]
    },
    'doh-on-the-go': {
        name: 'Doh on the Go',
        logo: 'assets/restaurants/doh-on-the-go/logo.png',
        items: [
            { name: 'Margherita Pizza', desc: 'Tomato sauce, mozzarella, basil', price: 10.00 },
            { name: 'Pepperoni Pizza', desc: 'Classic pepperoni & cheese', price: 11.00 },
            { name: 'Veggie Pizza', desc: 'Mixed vegetables & cheese', price: 10.50 },
            { name: 'BBQ Chicken Pizza', desc: 'Chicken, BBQ sauce, onions', price: 12.00 },
            { name: 'Cheese Manakish', desc: 'Traditional cheese flatbread', price: 4.00 },
            { name: 'Zaatar Manakish', desc: 'Thyme & sesame flatbread', price: 3.50 },
            { name: 'Lahm bi Ajeen', desc: 'Meat flatbread', price: 4.50 },
            { name: 'Garlic Bread', desc: 'Toasted bread with garlic butter', price: 3.00 }
        ]
    },
    'zaher-eloz': {
        name: 'Zaher el Oz',
        logo: 'assets/restaurants/zaher-eloz/logo.png',
        items: [
            { name: 'Mixed Grill', desc: 'Assorted grilled meats', price: 15.00 },
            { name: 'Chicken Taouk', desc: 'Marinated grilled chicken skewers', price: 10.00 },
            { name: 'Kafta', desc: 'Spiced ground meat skewers', price: 9.00 },
            { name: 'Lamb Chops', desc: 'Grilled lamb chops', price: 16.00 },
            { name: 'Shish Taouk Plate', desc: 'Chicken with rice and salad', price: 11.00 },
            { name: 'Hummus', desc: 'Chickpea dip with olive oil', price: 4.00 },
            { name: 'Tabbouleh', desc: 'Fresh parsley salad', price: 5.00 },
            { name: 'Grilled Vegetables', desc: 'Mixed grilled veggies', price: 6.00 }
        ]
    },
    'ahwet-elestez': {
        name: 'Ahwet el Estez',
        logo: 'assets/restaurants/ahwet-elestez/logo.png',
        items: [
            { name: 'Turkish Coffee', desc: 'Traditional Arabic coffee', price: 2.00 },
            { name: 'Tea', desc: 'Hot tea with fresh mint', price: 1.50 },
            { name: 'Cheese Croissant', desc: 'Flaky croissant with cheese', price: 3.00 },
            { name: 'Zaatar Croissant', desc: 'Croissant with zaatar spread', price: 2.50 },
            { name: 'Fresh Juice', desc: 'Orange or lemon juice', price: 3.50 },
            { name: 'Manoushe', desc: 'Traditional flatbread', price: 2.50 },
            { name: 'Labneh Plate', desc: 'Yogurt cheese with olive oil', price: 3.50 },
            { name: 'Foul', desc: 'Fava beans dish', price: 4.00 }
        ]
    },
    'ahwet-zaman': {
        name: 'Ahwet Zaman',
        logo: 'assets/restaurants/ahwet-zaman/logo.png',
        items: [
            { name: 'Arabic Coffee', desc: 'Traditional cardamom coffee', price: 2.00 },
            { name: 'Nescafe', desc: 'Hot or iced nescafe', price: 2.50 },
            { name: 'Cheese Manoushe', desc: 'Fresh cheese flatbread', price: 3.50 },
            { name: 'Labneh Plate', desc: 'Strained yogurt with olive oil', price: 4.00 },
            { name: 'Eggs & Sausage', desc: 'Breakfast plate with bread', price: 6.00 },
            { name: 'Fatteh', desc: 'Yogurt and chickpea dish', price: 5.00 },
            { name: 'Fruit Cocktail', desc: 'Fresh mixed fruits', price: 5.50 },
            { name: 'Saj Wrap', desc: 'Lebanese wrap with fillings', price: 4.50 }
        ]
    },
    'macros-kitchen': {
        name: "Macro's Kitchen",
        logo: 'assets/restaurants/macros-kitchen/logo.png',
        items: [
            { name: 'Grilled Chicken Bowl', desc: 'Healthy grilled chicken with rice & vegetables', price: 8.50 },
            { name: 'Caesar Salad', desc: 'Fresh romaine, parmesan, croutons', price: 6.00 },
            { name: 'Protein Smoothie', desc: 'Banana, berries, protein powder', price: 5.00 },
            { name: 'Pasta Alfredo', desc: 'Creamy pasta with garlic bread', price: 9.00 },
            { name: 'Greek Wrap', desc: 'Chicken, feta, tomatoes, tzatziki', price: 7.50 },
            { name: 'Quinoa Bowl', desc: 'Quinoa with roasted vegetables', price: 8.00 },
            { name: 'Avocado Toast', desc: 'Whole grain bread with avocado', price: 6.50 },
            { name: 'Salmon Poke Bowl', desc: 'Fresh salmon with rice and veggies', price: 12.00 }
        ]
    }
};

// Order State
let currentRestaurant = null;
let selectedItems = [];
const DELIVERY_FEE = 1.00;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeSmoothScrolling();
});

// Animations on scroll
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) translateX(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

    if (navMenu && mobileMenuBtn) {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    }
}

// Search/Filter Restaurants
function filterRestaurants() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const restaurantCards = document.querySelectorAll('.restaurant-card');

    restaurantCards.forEach(card => {
        const restaurantName = card.querySelector('.restaurant-name').textContent.toLowerCase();
        const restaurantDesc = card.querySelector('.restaurant-description').textContent.toLowerCase();

        if (restaurantName.includes(searchTerm) || restaurantDesc.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// Open Restaurant Modal
function openRestaurant(restaurantId) {
    currentRestaurant = restaurantId;
    const restaurant = restaurantMenus[restaurantId];

    if (!restaurant) {
        alert('Restaurant menu not available');
        return;
    }

    // Set restaurant info
    document.getElementById('modalRestaurantName').textContent = restaurant.name;
    document.getElementById('modalRestaurantLogo').src = restaurant.logo;
    document.getElementById('modalRestaurantLogo').alt = restaurant.name;

    // Clear previous menu items
    const menuContainer = document.getElementById('menuItems');
    menuContainer.innerHTML = '';

    // Add menu items
    restaurant.items.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <input type="checkbox" id="item-${index}" data-name="${item.name}" data-price="${item.price}" onchange="updateOrder()">
            <div class="menu-item-details">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-desc">${item.desc}</div>
                <div class="menu-item-price">$${item.price.toFixed(2)}</div>
            </div>
        `;
        menuContainer.appendChild(menuItem));
    });

    // Reset form
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('orderNotes').value = '';

    selectedItems = [];
    updateOrderSummary();

    // Show modal
    const modal = document.getElementById('orderModal');
    modal.classList.add('active');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('orderModal');
    modal.classList.remove('active');

    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentRestaurant = null;
        selectedItems = [];
    }, 300);
}

// Update Order
function updateOrder() {
    selectedItems = [];
    const checkboxes = document.querySelectorAll('#menuItems input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox => {
        selectedItems.push({
            name: checkbox.dataset.name,
            price: parseFloat(checkbox.dataset.price)
        });
    });

    updateOrderSummary();
}

// Update Order Summary
function updateOrderSummary() {
    const subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal + DELIVERY_FEE;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Send Order via WhatsApp
function sendOrder() {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const notes = document.getElementById('orderNotes').value.trim();

    // Validation
    if (!name || !phone || !address) {
        alert('Please fill in all required fields (Name, Phone, Address)');
        return;
    }

    if (selectedItems.length === 0) {
        alert('Please select at least one item from the menu');
        return;
    }

    // Calculate totals
    const subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal + DELIVERY_FEE;

    // Build order message
    let orderText = '';
    selectedItems.forEach(item => {
        orderText += `• ${item.name} - $${item.price.toFixed(2)}%0A`;
    });

    const message =
        `🛒 *New Order - Visit Anfeh Delivery*%0A%0A` +
        `🏪 *Restaurant:* ${restaurantMenus[currentRestaurant].name}%0A%0A` +
        `📋 *Customer Details:*%0A` +
        `Name: ${name}%0A` +
        `Phone: ${phone}%0A` +
        `Address: ${address}%0A` +
        (notes ? `Notes: ${notes}%0A` : '') +
        `%0A🍽️ *Order Items:*%0A${orderText}%0A` +
        `💵 *Order Summary:*%0A` +
        `Subtotal: $${subtotal.toFixed(2)}%0A` +
        `Delivery Fee: $${DELIVERY_FEE.toFixed(2)}%0A` +
        `*Total: $${total.toFixed(2)}*`;

    // Send to WhatsApp
    const whatsappNumber = '96181526075';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');

    // Close modal after sending
    setTimeout(() => {
        closeModal();
    }, 1000);
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
