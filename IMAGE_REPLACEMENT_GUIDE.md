# Image Replacement Checklist

## 🖼️ **PROJECT IMAGES TO REPLACE**

Replace the following placeholder SVGs with actual project screenshots:

### **Project Screenshots Needed:**

1. **KFC Clone** - `/images/placeholder-project.svg` → `/images/kfc-clone.png`

   - Recommended size: 1200x800px (3:2 aspect ratio)
   - Should show the food ordering interface

2. **AB Pharmacy Expo** - `/images/placeholder-project.svg` → `/images/pharmacy.png`

   - Recommended size: 1200x800px (3:2 aspect ratio)
   - Should show the mobile app interface

3. **PhotoBooth** - `/images/placeholder-project.svg` → `/images/photoBooth.png`

   - Recommended size: 1200x800px (3:2 aspect ratio)
   - Should show the Pinterest-style interface

4. **CryptoVerse** - `/images/placeholder-project.svg` → `/images/cryptoverse.png`

   - Recommended size: 1200x800px (3:2 aspect ratio)
   - Should show the cryptocurrency dashboard

5. **Portfolio v1** - `/images/placeholder-project.svg` → `/images/portfolio.png`

   - Recommended size: 1200x800px (3:2 aspect ratio)
   - Should show the previous portfolio design

6. **Portfolio v2** - `/images/placeholder-project.svg` → `/images/portfolio-v2.png`

   - Recommended size: 1200x800px (3:2 aspect ratio)
   - Should show the current portfolio design

7. **Content Automation** - `/images/placeholder-project.svg` → `/images/n8n-automation.png`

   - Recommended size: 1200x800px (3:2 aspect ratio)
   - Should show the n8n workflow interface

8. **LinkedIn Job Search** - `/images/placeholder-project.svg` → `/images/linkedin-automation.png`
   - Recommended size: 1200x800px (3:2 aspect ratio)
   - Should show the automation workflow

## 📸 **PHOTOGRAPHY IMAGES TO REPLACE**

Replace the following placeholder SVGs with actual travel photos:

### **Travel Photos Needed:**

1. **Goa** - `/images/placeholder-photo.svg` → `/images/photography/goa.jpg`

   - Recommended size: 800x800px (square aspect ratio)
   - Should show beautiful sunset at Goa beach

2. **Manali** - `/images/placeholder-photo.svg` → `/images/photography/manali.jpg`

   - Recommended size: 800x800px (square aspect ratio)
   - Should show snow-capped mountains in Manali

3. **Kerala** - `/images/placeholder-photo.svg` → `/images/photography/kerala.jpg`

   - Recommended size: 800x800px (square aspect ratio)
   - Should show backwaters of Kerala

4. **Rajasthan** - `/images/placeholder-photo.svg` → `/images/photography/rajasthan.jpg`

   - Recommended size: 800x800px (square aspect ratio)
   - Should show desert landscape in Rajasthan

5. **Himachal Pradesh** - `/images/placeholder-photo.svg` → `/images/photography/himachal.jpg`

   - Recommended size: 800x800px (square aspect ratio)
   - Should show mountain valleys in Himachal Pradesh

6. **Mumbai** - `/images/placeholder-photo.svg` → `/images/photography/mumbai.jpg`
   - Recommended size: 800x800px (square aspect ratio)
   - Should show Mumbai cityscape at sunset

## 🔄 **HOW TO REPLACE IMAGES**

### **For Project Images:**

1. Add your project screenshot to `/public/images/`
2. Update the `image` property in `/src/data/projects.ts`
3. Change from `/images/placeholder-project.svg` to your actual image path

### **For Photography Images:**

1. Add your travel photo to `/public/images/photography/`
2. Update the `image` property in `/src/data/photos.ts`
3. Change from `/images/placeholder-photo.svg` to your actual image path

## 🎨 **IMAGE OPTIMIZATION TIPS**

- **Format**: Use WebP for better compression, fallback to PNG/JPG
- **Compression**: Optimize images for web (80-90% quality)
- **Dimensions**: Follow recommended sizes for consistent layout
- **Alt Text**: Ensure descriptive alt text is already provided in data files
- **Loading**: Images already have `loading="lazy"` implemented

## ✅ **VERIFICATION CHECKLIST**

After replacing images:

- [ ] All project cards show actual screenshots
- [ ] All photography cards show actual travel photos
- [ ] Images load properly on all devices
- [ ] Aspect ratios look consistent in grid layouts
- [ ] Images are optimized for web (file sizes under 500KB each)
- [ ] Alt text remains descriptive and accurate

## 🚀 **DEPLOYMENT READY**

Once all images are replaced, the portfolio will be 100% complete and ready for professional deployment!
