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
    image: '/images/photography/goa.jpg',
    location: 'Goa, India',
    alt: 'Beautiful sunset at Goa beach'
  },
  {
    id: '2',
    image: '/images/photography/manali.jpg',
    location: 'Manali, India',
    alt: 'Snow-capped mountains in Manali'
  },
  {
    id: '3',
    image: '/images/photography/kerala.jpg',
    location: 'Kerala, India',
    alt: 'Backwaters of Kerala'
  },
  {
    id: '4',
    image: '/images/photography/rajasthan.jpg',
    location: 'Rajasthan, India',
    alt: 'Desert landscape in Rajasthan'
  },
  {
    id: '5',
    image: '/images/photography/himachal.jpg',
    location: 'Himachal Pradesh, India',
    alt: 'Mountain valleys in Himachal Pradesh'
  },
  {
    id: '6',
    image: '/images/photography/mumbai.jpg',
    location: 'Mumbai, India',
    alt: 'Mumbai cityscape at sunset'
  }
];
