// Static photo data for the photography section
export interface PhotoData {
  id: string;
  image: string;
  location: string;
  alt: string;
  instagramUrl: string;
}

export const photos: PhotoData[] = [
  {
    id: '1',
    image: '/images/photography/01.webp',
    location: 'Agra, India',
    alt: 'Beautiful architecture and landscapes in Agra',
    instagramUrl: 'https://www.instagram.com/p/CahsKINPds_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: '2',
    image: '/images/photography/02.webp',
    location: 'Bandarban, Bangladesh',
    alt: 'Scenic views from Bandarban',
    instagramUrl: 'https://www.instagram.com/p/DI_peJKzpHl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: '3',
    image: '/images/photography/03.webp',
    location: 'Shimla, India',
    alt: 'Mountain landscapes in Shimla',
    instagramUrl: 'https://www.instagram.com/p/CoNIqgJPJOs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: '4',
    image: '/images/photography/04.webp',
    location: 'Goa, India',
    alt: 'Urban and natural scenes from Goa',
    instagramUrl: 'https://www.instagram.com/p/CqiDphDvwJr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: '5',
    image: '/images/photography/05.webp',
    location: 'Rishikesh, India',
    alt: 'Spiritual and natural beauty of Rishikesh',
    instagramUrl: 'https://www.instagram.com/p/Co9lw_CvJyr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: '6',
    image: '/images/photography/06.webp',
    location: 'Jaipur, India',
    alt: 'Colorful architecture and culture of Jaipur',
    instagramUrl: 'https://www.instagram.com/p/CqDGrJyPBXX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  }
];
