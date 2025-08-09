// Static photo data for the photography section
export interface PhotoData {
  id: string;
  image: string;
  location: string;
  alt: string;
}

export const photos: PhotoData[] = [
  {
    id: '1',
    image: '/images/placeholder-photo.svg',
    location: 'Goa, India',
    alt: 'Beautiful sunset at Goa beach'
  },
  {
    id: '2',
    image: '/images/placeholder-photo.svg',
    location: 'Manali, India',
    alt: 'Snow-capped mountains in Manali'
  },
  {
    id: '3',
    image: '/images/placeholder-photo.svg',
    location: 'Kerala, India',
    alt: 'Backwaters of Kerala'
  },
  {
    id: '4',
    image: '/images/placeholder-photo.svg',
    location: 'Rajasthan, India',
    alt: 'Desert landscape in Rajasthan'
  },
  {
    id: '5',
    image: '/images/placeholder-photo.svg',
    location: 'Himachal Pradesh, India',
    alt: 'Mountain valleys in Himachal Pradesh'
  },
  {
    id: '6',
    image: '/images/placeholder-photo.svg',
    location: 'Mumbai, India',
    alt: 'Mumbai cityscape at sunset'
  }
];
