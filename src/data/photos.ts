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
    image: '/images/photography/01.webp',
    location: 'Agra, India',
    alt: 'Beautiful architecture and landscapes in Agra'
  },
  {
    id: '2',
    image: '/images/photography/02.webp',
    location: 'Bandarban, Bangladesh',
    alt: 'Scenic views from Bandarban'
  },
  {
    id: '3',
    image: '/images/photography/03.webp',
    location: 'Shimla, India',
    alt: 'Mountain landscapes in Shimla'
  },
  {
    id: '4',
    image: '/images/photography/04.webp',
    location: 'Goa, India',
    alt: 'Urban and natural scenes from Goa'
  },
  {
    id: '5',
    image: '/images/photography/05.webp',
    location: 'Rishikesh, India',
    alt: 'Spiritual and natural beauty of Rishikesh'
  },
  {
    id: '6',
    image: '/images/photography/06.webp',
    location: 'Jaipur, India',
    alt: 'Colorful architecture and culture of Jaipur'
  }
];
