# Images Organization

This folder contains all the images used in the portfolio website.

## Folder Structure

- **`photography/`** - Contains travel and photography images displayed in the Photography section
- **`projects/`** - Contains project screenshots and related images
- **Root folder** - Contains general images like profile photos, logos, etc.

## Photography Images

Place your travel and photography images in the `photography/` folder. The current setup expects these images:

- `goa.jpg` - Goa, India
- `manali.jpg` - Manali, India
- `kerala.jpg` - Kerala, India
- `rajasthan.jpg` - Rajasthan, India
- `himachal.jpg` - Himachal Pradesh, India
- `mumbai.jpg` - Mumbai, India

To add new photos:

1. Add the image file to the `photography/` folder
2. Update the `src/data/photos.ts` file with the new image path and location

## Project Images

Place project screenshots and related images in the `projects/` folder. These are referenced in the projects data and individual project pages.

## Image Guidelines

- Use optimized images (WebP format recommended for better performance)
- Maintain consistent aspect ratios for better grid layout
- Recommended sizes:
  - Photography images: 800x800px (square aspect ratio)
  - Project images: 1200x800px (3:2 aspect ratio)
  - Profile images: 400x400px (square aspect ratio)
