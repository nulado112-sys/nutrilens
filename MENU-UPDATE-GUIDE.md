# Menu Update Guide

## Current Status

✅ **Angels Sushi** - Complete menu extracted from screenshots (100+ items!)
⏳ **Other Restaurants** - Need menu data from websites

## How to Update Menus

Open `script-delivery.js` and find the `restaurantMenus` object. Each restaurant has this format:

```javascript
'restaurant-id': {
    name: "Restaurant Name",
    logo: 'assets/restaurants/restaurant-id/logo.png',
    items: [
        { name: 'Item Name', desc: 'Description', price: 9.99 },
        { name: 'Another Item', desc: 'Description', price: 7.50 },
        // Add more items...
    ]
}
```

## Restaurants That Need Menu Updates

### 1. **Doze LB** (Coffee Shop)
**Website**: https://doze-coffee.vercel.app/

Visit the website and extract:
- Coffee items (Espresso, Cappuccino, Latte, etc.)
- Desserts (Cakes, Cheesecake, etc.)
- Pastries
- Any food items

Current placeholder menu has 5 items - replace with real menu

---

### 2. **Ahwet Zaman** (Cafe)
**Website**: https://menu.omegasoftware.ca/kahwetzaman

Visit the website and extract:
- Coffee/Tea items
- Breakfast items
- Manakish/Manoushe
- Sandwiches
- Any specials

Current placeholder menu has 5 items - replace with real menu

---

### 3. **Mayel LB** (Restaurant)
**Website**: https://mayelrestaurant.weebly.com/

Visit the website and extract:
- Main dishes
- Appetizers
- Salads
- Sandwiches/Wraps
- Sides

Current placeholder menu has 5 items - replace with real menu

---

### 4. **Ahwet el Estez** (Cafe)
**Website**: https://mysitescom.my.canva.site/ahwetelestezmenu

Visit the website and extract:
- Coffee/Tea
- Breakfast items
- Croissants/Pastries
- Sandwiches
- Juices

Current placeholder menu has 5 items - replace with real menu

---

### 5. **Machewee Express** (Fast Food)
**Website**: https://menu.omegasoftware.ca/omenuPDF/macheweexpress.pdf

Download the PDF and extract:
- Burgers
- Sandwiches
- Wraps
- Sides (Fries, Onion Rings)
- Drinks

Current placeholder menu has 5 items - replace with real menu

---

### 6. **Zaher el Oz** (Lebanese Restaurant)
**Website**: https://zaherelloz.v8softwares.com/

Visit the website and extract:
- Grilled meats
- Mezze/Appetizers
- Salads
- Main dishes
- Specialties

Current placeholder menu has 5 items - replace with real menu

---

### 7. **Macro's Kitchen**
**Instagram**: https://www.instagram.com/macro.skitchen

Check their Instagram posts and highlights for menu items

Current placeholder menu has 5 items - replace with real menu

---

### 8. **Doh on the Go** (Pizza/Manakish)
**Instagram**: https://www.instagram.com/doh.on.the.go

Check their Instagram posts and highlights for:
- Pizzas
- Manakish
- Flatbreads
- Sides

Current placeholder menu has 5 items - replace with real menu

---

## How to Add Menu Items

### Step 1: Visit the Restaurant's Website

Go to the website link provided above for each restaurant.

### Step 2: Copy the Menu Information

Write down:
- Item name
- Description (ingredients, size, etc.)
- Price in USD (convert if needed)

### Step 3: Update script-delivery.js

Open `script-delivery.js` in VS Code and find the restaurant section.

**Example**: Let's say Doze LB has these items on their website:

```
Espresso - $2.50
Cappuccino - $3.50
Iced Latte - $4.00
Chocolate Cake - $5.00
```

Update the code:

```javascript
'doze-lb': {
    name: 'Doze LB',
    logo: 'assets/restaurants/doze-lb/logo.png',
    items: [
        { name: 'Espresso', desc: 'Double shot espresso', price: 2.50 },
        { name: 'Cappuccino', desc: 'Espresso with steamed milk', price: 3.50 },
        { name: 'Iced Latte', desc: 'Cold coffee with milk', price: 4.00 },
        { name: 'Chocolate Cake', desc: 'Rich chocolate layer cake', price: 5.00 }
    ]
},
```

### Step 4: Test the Website

1. Open `index.html` in your browser
2. Click on the restaurant card
3. Check that the menu appears correctly
4. Test placing an order

## Tips

- **Prices**: Make sure all prices are in USD format (e.g., 9.50 not "9.5")
- **Descriptions**: Keep them short and clear (under 50 characters)
- **Names**: Use the exact name from the menu
- **Organization**: You can add comments to organize items by category:

```javascript
items: [
    // Coffee
    { name: 'Espresso', desc: 'Double shot', price: 2.50 },
    { name: 'Cappuccino', desc: 'With steamed milk', price: 3.50 },

    // Desserts
    { name: 'Cheesecake', desc: 'New York style', price: 5.50 },
]
```

## Quick Reference: All Restaurant IDs

Use these exact IDs in the code (they're already set up):

- `macros-kitchen` → Macro's Kitchen
- `angels-sushi` → Angels Sushi (✅ COMPLETE)
- `machewee-express` → Machewee Express
- `doh-on-the-go` → Doh on the Go
- `doze-lb` → Doze LB
- `zaher-eloz` → Zaher el Oz
- `mayel-lb` → Mayel LB
- `ahwet-elestez` → Ahwet el Estez
- `ahwet-zaman` → Ahwet Zaman

## Need Help?

If you're not sure about:
- Prices: Use your best estimate or contact the restaurant
- Descriptions: Keep it simple - just list main ingredients
- Organization: Group similar items together with comments
