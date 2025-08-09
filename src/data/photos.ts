// Static photo data for the photography section
export interface PhotoData {
  id: string;
  image: string;
  caption: string;
  instagramUrl: string;
  alt: string;
}

export const photos: PhotoData[] = [
  {
    id: '1',
    image: '/images/photos/photo1.jpg',
    caption: 'Your photo caption here',
    instagramUrl: 'https://www.instagram.com/p/your-post-1/',
    alt: 'Photography sample 1'
  },
  {
    id: '2',
    image: '/images/photos/photo2.jpg',
    caption: 'Your photo caption here',
    instagramUrl: 'https://www.instagram.com/p/your-post-2/',
    alt: 'Photography sample 2'
  },
  {
    id: '3',
    image: '/images/photos/photo3.jpg',
    caption: 'Your photo caption here',
    instagramUrl: 'https://www.instagram.com/p/your-post-3/',
    alt: 'Photography sample 3'
  },
  {
    id: '4',
    image: '/images/photos/photo4.jpg',
    caption: 'Your photo caption here',
    instagramUrl: 'https://www.instagram.com/p/your-post-4/',
    alt: 'Photography sample 4'
  },
  {
    id: '5',
    image: '/images/photos/photo5.jpg',
    caption: 'Your photo caption here',
    instagramUrl: 'https://www.instagram.com/p/your-post-5/',
    alt: 'Photography sample 5'
  },
  {
    id: '6',
    image: '/images/photos/photo6.jpg',
    caption: 'Your photo caption here',
    instagramUrl: 'https://www.instagram.com/p/your-post-6/',
    alt: 'Photography sample 6'
  }
];
