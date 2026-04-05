// Restaurant Menu Data
const restaurantMenus = {
    'macros-kitchen': {
        name: "Macro's Kitchen",
        logo: 'assets/restaurants/macros-kitchen/logo.png',
        items: [
            { name: 'Grilled Chicken Bowl', desc: 'Healthy grilled chicken with rice & vegetables', price: 8.50 },
            { name: 'Caesar Salad', desc: 'Fresh romaine, parmesan, croutons', price: 6.00 },
            { name: 'Protein Smoothie', desc: 'Banana, berries, protein powder', price: 5.00 },
            { name: 'Pasta Alfredo', desc: 'Creamy pasta with garlic bread', price: 9.00 },
            { name: 'Greek Wrap', desc: 'Chicken, feta, tomatoes, tzatziki', price: 7.50 }
        ]
    },
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
            { name: 'Garlic Butter Mussels', desc: 'Fresh mussels in garlic butter', price: 9.00 },
            { name: 'Spring Rolls', desc: 'Crispy vegetable rolls', price: 5.00 },
            { name: 'Spicy Kani Rice Paper Boats', desc: 'Crab in rice paper', price: 9.00 },
            // Salads
            { name: 'Wakame Salad', desc: 'Seaweed salad with sesame dressing', price: 8.00 },
            { name: 'Shrimp Rocca Salad', desc: 'Rocca, shrimp, avocado with lemon vinaigrette', price: 8.00 },
            { name: 'Crab Salad', desc: 'Imitation crab, mango, avocado with mango dressing', price: 10.00 },
            { name: 'Summer Salad', desc: 'Mango, avocado, cucumber, onion with mint dressing', price: 8.00 },
            { name: 'Salmon Salad', desc: 'Salmon, avocado, cucumber, cherry tomatoes with balsamic sesame dressing', price: 11.00 },
            // Nigiri (2pcs)
            { name: 'N.1 Salmon Nigiri', desc: 'Sushi rice, raw salmon - 2pcs', price: 4.00 },
            { name: 'N.2 Shrimp Nigiri', desc: 'Sushi rice, shrimp - 2pcs', price: 5.00 },
            { name: 'N.3 Unagi Nigiri', desc: 'Sushi rice, eel, nori, sesame - 2pcs', price: 7.00 },
            { name: 'N.4 Crab Stick Nigiri', desc: 'Sushi rice, imitation crab, nori - 2pcs', price: 3.00 },
            { name: 'N.5 Tuna Nigiri', desc: 'Sushi rice, tuna, nori - 2pcs', price: 5.00 },
            { name: 'N.6 Avocado Nigiri', desc: 'Sushi rice, avocado, nori - 2pcs', price: 3.00 },
            // Sashimi (5pcs)
            { name: 'S.1 Tuna Sashimi', desc: 'Fresh tuna slices - 5pcs', price: 9.00 },
            { name: 'S.2 Salmon Sashimi', desc: 'Fresh salmon slices - 5pcs', price: 8.00 },
            { name: 'S.3 Unagi Sashimi', desc: 'Eel slices - 5pcs', price: 9.00 },
            { name: 'S.4 Shrimp Sashimi', desc: 'Cooked shrimp - 5pcs', price: 7.00 },
            { name: 'S.5 Octopus Sashimi', desc: 'Octopus slices - 5pcs', price: 7.00 },
            { name: 'S.6 Crab Stick Sashimi', desc: 'Crab stick - 5pcs', price: 7.00 },
            // Gunkan (2pcs)
            { name: 'G.1 Salmon Gunkan', desc: 'Salmon gunkan - 2pcs', price: 8.00 },
            { name: 'G.2 Shrimp Gunkan', desc: 'Shrimp gunkan - 2pcs', price: 7.00 },
            { name: 'G.3 Unagi Gunkan', desc: 'Eel gunkan - 2pcs', price: 8.00 },
            { name: 'G.4 Crazy Crab Gunkan', desc: 'Spicy crab gunkan - 2pcs', price: 7.00 },
            { name: 'G.5 Tobiko Gunkan', desc: 'Flying fish roe gunkan - 2pcs', price: 7.00 },
            { name: 'G.6 Wakame Gunkan', desc: 'Seaweed gunkan - 2pcs', price: 6.00 },
            // Hosomaki (8pcs)
            { name: 'H.1 Kappa Hosomaki', desc: 'Sushi rice, cucumber, nori - 8pcs', price: 4.00 },
            { name: 'H.2 Shinso Hosomaki', desc: 'Sushi rice, carrot, nori - 8pcs', price: 5.00 },
            { name: 'H.3 Avocado Hosomaki', desc: 'Sushi rice, avocado, nori - 8pcs', price: 5.00 },
            { name: 'H.4 Crab Hosomaki', desc: 'Sushi rice, imitation crab, nori - 8pcs', price: 5.00 },
            { name: 'H.5 Salmon Hosomaki', desc: 'Sushi rice, salmon, nori - 8pcs', price: 4.00 },
            { name: 'H.6 Shrimp Hosomaki', desc: 'Sushi rice, shrimp, nori - 8pcs', price: 6.00 },
            { name: 'H.7 Tuna Hosomaki', desc: 'Sushi rice, tuna, nori - 8pcs', price: 6.00 },
            { name: 'H.8 Tempura Hosomaki', desc: 'Sushi rice, tempura, nori - 8pcs', price: 6.00 },
            // Uramaki (8pcs)
            { name: 'U.1 Philly Salmon Maki', desc: 'Sushi rice, smoked salmon, cream cheese, avocado, sesame - 8pcs', price: 8.00 },
            { name: 'U.2 Tuna Avocado Maki', desc: 'Sushi rice, tuna, avocado, japanese mayo, sesame - 8pcs', price: 8.00 },
            { name: 'U.3 Sesame Salmon Maki', desc: 'Sushi rice, salmon, cucumber, cream cheese, tobiko, sesame - 8pcs', price: 8.00 },
            { name: 'U.4 Salmon Maki', desc: 'Sushi rice, salmon, avocado, spicy mayo, sesame - 8pcs', price: 8.00 },
            { name: 'U.5 Shrimp Tempura Maki', desc: 'Sushi rice, shrimp tempura, teriyaki sauce, furikake - 8pcs', price: 8.00 },
            { name: 'U.6 Crispy Philadelphia Maki', desc: 'Sushi rice, crispy crab, cream cheese, avocado, tobiko, sesame - 8pcs', price: 8.00 },
            { name: 'U.7 California Maki', desc: 'Sushi rice, imitation crab, avocado, cucumber, tobiko - 8pcs', price: 8.00 },
            { name: 'U.8 Crispy Crazy Maki', desc: 'Sushi rice, crazy crab, cucumber, japanese mayo, tobiko - 8pcs', price: 8.00 },
            { name: 'U.9 Crazy Masago Maki', desc: 'Sushi rice, crazy crab, masago, japanese mayo, tobiko - 8pcs', price: 8.00 },
            { name: 'U.10 Golden Philly Maki', desc: 'Sushi rice, smoked salmon, cream cheese, tobiko, sesame - 8pcs', price: 8.00 },
            { name: 'U.11 Spicy Tuna Mango Maki', desc: 'Sushi rice, raw tuna, mango, sesame, togarashi powder and spicy mayo - 8pcs', price: 8.00 },
            { name: 'U.12 Crispy Mango Maki', desc: 'Sushi rice, crabstick, mango topped with panko and japanese mayo - 8pcs', price: 8.00 },
            { name: 'U.13 Purple Flame Maki', desc: 'Sushi rice, cooked tuna, avocado, cucumber topped with red cabbage and spicy mayo - 8pcs', price: 8.00 },
            // Special Rolls (10pcs)
            { name: 'SR.1 Dragon Roll', desc: 'Sushi rice, shrimp tempura topped with avocado, tobiko, spicy mayo, sesame and unagi sauce - 10pcs', price: 10.00 },
            { name: 'SR.2 Special Crab Roll', desc: 'Sushi rice, crazy crab, cream cheese, avocado topped with spicy mayo - 10pcs', price: 10.00 },
            { name: 'SR.3 Salmon Philadelphia Roll', desc: 'Sushi rice, wrapped in salmon, topped with spicy mayo and unagi sauce - 10pcs', price: 10.00 },
            { name: 'SR.4 Spiced Salmon Roll', desc: 'Sushi rice, cream cheese, topped with spiced salmon - 10pcs', price: 10.00 },
            { name: 'SR.5 Crunchy Tempura Roll', desc: 'Sushi rice, eel tempura, avocado topped with salmon, spicy mayo and unagi sauce - 10pcs', price: 10.00 },
            { name: 'SR.6 Volcano Roll', desc: 'Sushi rice, cucumber, cream cheese, avocado topped with shrimp, volcano sauce and fried onions - 10pcs', price: 10.00 },
            { name: 'SR.7 Viking Roll', desc: 'Sushi rice, crab stick, tempura, avocado, topped with crazy crab, spicy mayo and unagi sauce - 10pcs', price: 10.00 },
            { name: 'SR.8 Ebi Chiri Roll', desc: 'Sushi rice, crab stick, cucumber, cream cheese topped with shrimp and unagi sauce - 10pcs', price: 10.00 },
            { name: 'SR.9 Crispy Spiced Salmon Roll', desc: 'Sushi rice, crabstick, cucumber, topped with spiced salmon, mayo, tobiko and teriyaki sauce - 10pcs', price: 10.00 },
            { name: 'SR.10 Shrimp Salad Roll', desc: 'Sushi rice, shrimp, cream cheese, tobiko topped with salmon - 10pcs', price: 10.00 },
            { name: 'SR.11 Mango Tango Roll', desc: 'Sushi rice, shrimp tempura, avocado topped with mango japanese mayo and unagi sauce with tobiko - 10pcs', price: 11.00 },
            { name: 'SR.12 Crispy Lobster Roll', desc: 'Sushi rice, cream cheese, avocado, cucumber, topped with salmon lobster, spicy mayo sauce and tobiko - 10pcs', price: 11.00 },
            { name: 'SR.13 Rainbow Roll', desc: 'Sushi rice, crabstick, mango, cream cheese, topped with salmon, avocado, spicy mayo and teriyaki sauce - 10pcs', price: 10.00 },
            // Burrito
            { name: 'All In Burrito', desc: 'Sushi rice, crazy crab, tempura, spicy salmon, cream cheese, avocado, cucumber, carrots, tobiko - Half $8.00 / Whole $13.00', price: 13.00 },
            // Onigiri (1pc)
            { name: 'Philly Salmon Onigiri', desc: 'Rice ball with salmon - $9', price: 9.00 },
            { name: 'Crazy Crab Onigiri', desc: 'Rice ball with crab - $9', price: 9.00 },
            { name: 'Crispy Shrimp Onigiri', desc: 'Rice ball with shrimp - $9', price: 9.00 },
            { name: 'Tuna Mayo Onigiri', desc: 'Rice ball with tuna - $9', price: 9.00 },
            // Drinks
            { name: 'Water', desc: 'Bottled water', price: 1.00 },
            { name: 'Soft Drinks', desc: 'Coca-Cola, Sprite, etc.', price: 2.00 },
            { name: 'Iced Tea', desc: 'Refreshing iced tea', price: 3.00 },
            { name: 'Boba Tea', desc: 'Brown Sugar, Chocolate, Matcha, Strawberry', price: 7.00 }
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
            { name: 'Chicken Nuggets', desc: '10 pieces with sauce', price: 5.50 }
        ]
    },
    'doh-on-the-go': {
        name: 'Doh on the Go',
        logo: 'assets/restaurants/doh-on-the-go/logo.png',
        items: [
            { name: 'Margherita Pizza', desc: 'Tomato sauce, mozzarella, basil', price: 10.00 },
            { name: 'Pepperoni Pizza', desc: 'Classic pepperoni & cheese', price: 11.00 },
            { name: 'Veggie Pizza', desc: 'Mixed vegetables & cheese', price: 10.50 },
            { name: 'Cheese Manakish', desc: 'Traditional Lebanese cheese flatbread', price: 4.00 },
            { name: 'Zaatar Manakish', desc: 'Thyme & sesame seed flatbread', price: 3.50 }
        ]
    },
    'doze-lb': {
        name: 'Doze LB',
        logo: 'assets/restaurants/doze-lb/logo.png',
        items: [
            { name: 'Espresso', desc: 'Double shot espresso', price: 2.50 },
            { name: 'Cappuccino', desc: 'Espresso with steamed milk', price: 3.50 },
            { name: 'Iced Latte', desc: 'Cold coffee with milk', price: 4.00 },
            { name: 'Chocolate Cake', desc: 'Rich chocolate layer cake', price: 5.00 },
            { name: 'Cheesecake', desc: 'Creamy New York style', price: 5.50 }
        ]
    },
    'zaher-eloz': {
        name: 'Zaher el Oz',
        logo: 'assets/restaurants/zaher-eloz/logo.png',
        items: [
            { name: 'Mixed Grill', desc: 'Assorted grilled meats', price: 15.00 },
            { name: 'Chicken Taouk', desc: 'Marinated grilled chicken skewers', price: 10.00 },
            { name: 'Kafta', desc: 'Spiced ground meat skewers', price: 9.00 },
            { name: 'Hummus', desc: 'Chickpea dip with olive oil', price: 4.00 },
            { name: 'Tabbouleh', desc: 'Fresh parsley salad', price: 5.00 }
        ]
    },
    'mayel-lb': {
        name: 'Mayel LB',
        logo: 'assets/restaurants/mayel-lb/logo.png',
        items: [
            { name: 'Shawarma Plate', desc: 'Chicken or beef shawarma with sides', price: 8.00 },
            { name: 'Falafel Wrap', desc: 'Crispy falafel with tahini', price: 5.50 },
            { name: 'Fattoush Salad', desc: 'Mixed greens with crispy pita', price: 5.00 },
            { name: 'Grilled Halloumi', desc: 'Grilled cheese with vegetables', price: 6.50 },
            { name: 'Lentil Soup', desc: 'Hearty red lentil soup', price: 3.50 }
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
            { name: 'Fresh Juice', desc: 'Orange or lemon juice', price: 3.50 }
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
            { name: 'Eggs & Sausage', desc: 'Breakfast plate with bread', price: 6.00 }
        ]
    }
};

// Current order state
let currentRestaurant = null;
let selectedItems = [];
const DELIVERY_FEE = 1.00;

// Open restaurant modal
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
            <div class="menu-item-info">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-desc">${item.desc}</div>
            </div>
            <div class="menu-item-price">$${item.price.toFixed(2)}</div>
        `;
        menuContainer.appendChild(menuItem);
    });

    // Reset form
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('orderNotes').value = '';

    selectedItems = [];
    updateOrderSummary();

    // Show modal
    document.getElementById('orderModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentRestaurant = null;
    selectedItems = [];
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Update order when checkbox changes
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

// Update order summary
function updateOrderSummary() {
    const subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal + DELIVERY_FEE;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Send order via WhatsApp
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

    // Optional: Close modal after sending
    setTimeout(() => {
        closeModal();
    }, 1000);
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a, .cta-btn');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
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
});

// Escape key to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
