#!/bin/bash

# Download all images from Sierra Distribution Company website

echo "Downloading images from sdcoltd.com..."

# Create directories
mkdir -p public/images/{logos,brands,products,hero,backgrounds}

# Download Company Logos
echo "Downloading company logos..."
curl -o public/images/logos/favicon.png "https://sdcoltd.com/wp-content/uploads/2020/04/Sierra-Distribution-favicon.png"
curl -o public/images/logos/logo.png "https://sdcoltd.com/wp-content/uploads/2020/04/logo.png"
curl -o public/images/logos/logo-retina.png "https://sdcoltd.com/wp-content/uploads/2020/04/logo_retina.png"

# Download Brand Partner Logos
echo "Downloading brand logos..."
curl -o public/images/brands/ceres-logo.png "https://sdcoltd.com/wp-content/uploads/2020/05/Ceres-Logo-2.png"

# Download Hero/Slider Images
echo "Downloading hero images..."
curl -o public/images/hero/cranberry.png "https://sdcoltd.com/wp-content/uploads/2020/05/Cranberry-ss.png"
curl -o public/images/hero/savanna-bottle.png "https://sdcoltd.com/wp-content/uploads/2020/09/SAVANNA-B-1.png"
curl -o public/images/hero/savanna-logo.png "https://sdcoltd.com/wp-content/uploads/2020/09/SAVANNA-l-s.png"
curl -o public/images/hero/savanna-secondary.png "https://sdcoltd.com/wp-content/uploads/2020/09/SAVANNA-s-.png"

# Download Background Images
echo "Downloading backgrounds..."
curl -o public/images/backgrounds/bg1.png "http://sdcoltd.com/wp-content/uploads/2020/05/5ee45d722ff36d65482e116e6407cce2.png"
curl -o public/images/backgrounds/bg2.jpg "http://sdcoltd.com/wp-content/uploads/2020/05/pci0219-PCK-838578926-900.jpg"
curl -o public/images/backgrounds/bg3.jpg "http://sdcoltd.com/wp-content/uploads/2020/05/pngwing.jpg"
curl -o public/images/backgrounds/bg4.jpg "https://sdcoltd.com/wp-content/uploads/2020/09/bg.jpg"

# Download Beverage Product Images
echo "Downloading beverage products..."
curl -o public/images/products/beverage1.jpg "https://sdcoltd.com/wp-content/uploads/2020/05/1_fruit_drink_in_can_full.jpg"
curl -o public/images/products/beverage2.jpg "https://sdcoltd.com/wp-content/uploads/2020/05/2_fruit_drink_in_can_full.jpg"
curl -o public/images/products/beverage3.jpg "https://sdcoltd.com/wp-content/uploads/2020/05/4_fruit_drink_in_can_full.jpg"
curl -o public/images/products/beverage4.jpg "https://sdcoltd.com/wp-content/uploads/2020/05/5_fruit_drink_in_can_full.jpg"

# Download Food Product Images - Pasta & Couscous
echo "Downloading food products..."
curl -o public/images/products/pasta1.jpg "https://sdcoltd.com/wp-content/uploads/2020/05/28a11d92-463c-4f96-a74e-60afa336b45e.jpg"
curl -o public/images/products/pasta2.jpg "https://sdcoltd.com/wp-content/uploads/2020/05/61e71a1a-41f1-4293-a95c-3438c7a3d42d.jpg"
curl -o public/images/products/pasta3.jpg "https://sdcoltd.com/wp-content/uploads/2020/05/6dc1b63d-f515-4c3f-90bc-e47d38666930.jpg"
curl -o public/images/products/pasta4.jpg "https://sdcoltd.com/wp-content/uploads/2020/05/8e44dc9f-9400-4d72-bc86-3c59d0683651.jpg"
curl -o public/images/products/pasta5.jpg "https://sdcoltd.com/wp-content/uploads/2020/05/9a550f1c-e5cf-4bd1-ac0f-8ee09139e439.jpg"

# Download Product Advertisement Images
echo "Downloading product ads..."
curl -o public/images/products/couscous-ad.jpg "https://sdcoltd.com/wp-content/uploads/2020/05/couscous-ads.jpg"
curl -o public/images/products/fusilli-ad.jpg "https://sdcoltd.com/wp-content/uploads/2020/05/fusilli-ads.jpg"
curl -o public/images/products/penne-ad.jpg "https://sdcoltd.com/wp-content/uploads/2020/05/penne-ads.jpg"
curl -o public/images/products/spaghetti-ad.jpg "https://sdcoltld.com/wp-content/uploads/2020/05/spaghetti-ads.jpg"
curl -o public/images/products/vermicelli-ad.jpg "https://sdcoltd.com/wp-content/uploads/2020/05/vermicelli-ads.jpg"

echo "✅ All images downloaded successfully!"
echo "📁 Images saved to: public/images/"
