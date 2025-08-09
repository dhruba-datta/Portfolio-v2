# Photography Setup Instructions

## Adding Your Photos

1. **Add 6 photos** to the `/public/images/photos/` directory
2. **Name them**: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, `photo5.jpg`, `photo6.jpg`
3. **Update the data file** at `/src/data/photos.ts` with:
   - Your actual photo captions
   - Your Instagram post URLs
   - Alt text descriptions

## Photo Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 800x800px or higher (square aspect ratio)
- **Quality**: High quality for best display

## Updating Photo Data

Edit `/src/data/photos.ts` to update:

```typescript
{
  id: '1',
  image: '/images/photos/photo1.jpg',
  caption: 'Your actual photo caption here',
  instagramUrl: 'https://www.instagram.com/p/YOUR_ACTUAL_POST_ID/',
  alt: 'Descriptive alt text for accessibility'
}
```

## File Structure

```
public/
  images/
    photos/
      photo1.jpg  ← Your first photo
      photo2.jpg  ← Your second photo
      photo3.jpg  ← Your third photo
      photo4.jpg  ← Your fourth photo
      photo5.jpg  ← Your fifth photo
      photo6.jpg  ← Your sixth photo
```

## Instagram URLs

To get your Instagram post URLs:
1. Go to your Instagram post
2. Click the three dots (⋯) menu
3. Select "Copy link"
4. Use that URL in the `instagramUrl` field
