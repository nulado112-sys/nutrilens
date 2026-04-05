# Visit Anfeh Delivery Website - Setup Instructions

## Website Overview
Professional food delivery website for Visit Anfeh Delivery featuring 9 local restaurants in Anfeh, Lebanon.

## Features
- ✅ Professional, modern design inspired by premium food delivery platforms
- ✅ 9 restaurant partners with menu systems
- ✅ WhatsApp order integration (orders sent to 96181526075)
- ✅ $1 delivery fee automatically added to all orders
- ✅ Responsive design for mobile and desktop
- ✅ Smooth animations and professional UI/UX

## File Structure
```
my-website/
├── index.html                  # Main homepage
├── styles-delivery.css         # Premium styling
├── script-delivery.js          # Order functionality & WhatsApp integration
├── assets/
│   ├── logo.png               # Visit Anfeh Delivery logo (REPLACE THIS)
│   ├── hero-delivery.png      # Hero section image (REPLACE THIS)
│   ├── placeholder-logo.png   # Fallback logo
│   └── restaurants/
│       ├── macros-kitchen/
│       │   └── logo.png       # Restaurant logo (REPLACE THIS)
│       ├── angels-sushi/
│       │   └── logo.png       # Restaurant logo (REPLACE THIS)
│       ├── machewee-express/
│       │   └── logo.png       # Restaurant logo (REPLACE THIS)
│       ├── doh-on-the-go/
│       │   └── logo.png       # Restaurant logo (REPLACE THIS)
│       ├── doze-lb/
│       │   └── logo.png       # Restaurant logo (REPLACE THIS)
│       ├── zaher-eloz/
│       │   └── logo.png       # Restaurant logo (REPLACE THIS)
│       ├── mayel-lb/
│       │   └── logo.png       # Restaurant logo (REPLACE THIS)
│       ├── ahwet-elestez/
│       │   └── logo.png       # Restaurant logo (REPLACE THIS)
│       └── ahwet-zaman/
│           └── logo.png       # Restaurant logo (REPLACE THIS)
```

## Required Actions

### 1. Add Your Business Logo
- Save your "Visit Anfeh Delivery" logo as `assets/logo.png`
- Recommended size: 200x200px or similar square format
- PNG format with transparent background works best

### 2. Add Hero Image
- Save a delivery-themed image (like the one with the scooter) as `assets/hero-delivery.png`
- You can use your existing image or any delivery/food service image
- Recommended size: 800x600px or larger

### 3. Add Restaurant Logos
For each restaurant, download their logo from Instagram and save to the appropriate folder:

- **Macro's Kitchen**: `assets/restaurants/macros-kitchen/logo.png`
- **Angels Sushi**: `assets/restaurants/angels-sushi/logo.png`
- **Machewee Express**: `assets/restaurants/machewee-express/logo.png`
- **Doh on the Go**: `assets/restaurants/doh-on-the-go/logo.png`
- **Doze LB**: `assets/restaurants/doze-lb/logo.png`
- **Zaher el Oz**: `assets/restaurants/zaher-eloz/logo.png`
- **Mayel LB**: `assets/restaurants/mayel-lb/logo.png`
- **Ahwet el Estez**: `assets/restaurants/ahwet-elestez/logo.png`
- **Ahwet Zaman**: `assets/restaurants/ahwet-zaman/logo.png`

All logos should be PNG format, square ratio (e.g., 300x300px)

### 4. Update Restaurant Menus
Edit `script-delivery.js` to update the menu items for each restaurant with actual items and prices from their Instagram menus.

The menu structure is in the `restaurantMenus` object:
```javascript
'restaurant-id': {
    name: "Restaurant Name",
    logo: 'assets/restaurants/restaurant-id/logo.png',
    items: [
        { name: 'Item Name', desc: 'Description', price: 9.99 },
        // Add more items...
    ]
}
```

## How Orders Work

1. Customer selects a restaurant
2. Chooses menu items from the modal
3. Fills in delivery details (name, phone, address)
4. Clicks "Send Order via WhatsApp"
5. Order is formatted and sent to your WhatsApp: **96181526075**
6. You receive a complete order with:
   - Restaurant name
   - Customer details
   - All ordered items with prices
   - Subtotal, $1 delivery fee, and total

## Testing the Website

1. Open `index.html` in a web browser
2. Click on any restaurant card
3. Select menu items
4. Fill in customer details
5. Click "Send Order via WhatsApp" to test

**Note**: The website will work without images, but will show placeholder/broken image icons until you add the actual logos and images.

## Customization

### Change Colors
Edit `styles-delivery.css` variables at the top:
```css
:root {
    --primary-blue: #1B8AAD;      /* Main blue color */
    --primary-yellow: #F5B841;    /* Accent yellow color */
    --dark-text: #2D3748;         /* Text color */
}
```

### Change Delivery Fee
Edit `script-delivery.js`:
```javascript
const DELIVERY_FEE = 1.00;  // Change this value
```

### Change WhatsApp Number
Edit `script-delivery.js`:
```javascript
const whatsappNumber = '96181526075';  // Your number
```

## Browser Compatibility
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Fully responsive design

## Need Help?
- Make sure all image paths are correct
- Check browser console for errors (F12)
- Ensure JavaScript is enabled
- Test WhatsApp integration on a phone

## Instagram Pages Reference
- Macro's Kitchen: https://www.instagram.com/macro.skitchen
- Angels Sushi: https://www.instagram.com/angels_sushi_lb
- Machewee Express: https://www.instagram.com/macheweexpress
- Doh on the Go: https://www.instagram.com/doh.on.the.go
- Doze LB: https://www.instagram.com/doze.lb
- Zaher el Oz: https://www.instagram.com/zahereloz
- Mayel LB: https://www.instagram.com/mayel.lb
- Ahwet el Estez: https://www.instagram.com/ahwetelestez
- Ahwet Zaman: https://www.instagram.com/ahwetzaman

Download logos and menu information from these pages to complete your website.
