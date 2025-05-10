// src/mockData.ts
import type { ProductItem, ProductItemClean, Reel, ReelClean } from './types';

export const mockProductItem: ProductItem = {
  UUID: 'abc123',
  Name: 'Handcrafted Silver Lotus Ring',
  "Image URL": 'https://example.com/images/lotus-ring.jpg',
  Price: 2499,
  Status: 'Available',
  Notes: 'Made with 92.5% sterling silver, adjustable band.',
  Drop: ['drop_001'],
  "Reel Video URL (from Drop)": ['https://www.instagram.com/reel/xyz123']
};

export const mockReel: Reel = {
  "Drop ID": 1,
  "Reel Video URL": 'https://www.instagram.com/reel/xyz123',
  "Date Posted": '2025-05-01',
  Caption: 'Introducing our latest silver collection 🌸✨',
  "Items 2": ['abc123', 'def456'],
  Thumbnail: 'https://example.com/images/reel-thumb.jpg'
};

export const mockProductItemClean: ProductItemClean = {
  id: 'abc123',
  name: 'Handcrafted Silver Lotus Ring',
  imageUrl: 'https://example.com/images/lotus-ring.jpg',
  price: 2499,
  status: 'Available',
  notes: 'Made with 92.5% sterling silver, adjustable band.',
  dropIds: ['drop_001'],
  reelUrls: ['https://www.instagram.com/reel/xyz123']
};

export const mockReelClean: ReelClean = {
  dropId: 1,
  reelUrl: 'https://www.instagram.com/reel/xyz123',
  datePosted: '2025-05-01',
  caption: 'Introducing our latest silver collection 🌸✨',
  itemIds: ['abc123', 'def456'],
  thumbnail: 'https://example.com/images/reel-thumb.jpg'
};

export const mockItems: ProductItemClean[] = [
    mockProductItemClean,
    {
      id: 'def456',
      name: 'Textured Silver Cuff',
      imageUrl: 'https://example.com/images/silver-cuff.jpg',
      price: 3499,
      status: 'Sold Out',
      dropIds: ['drop_001'],
      reelUrls: ['https://www.instagram.com/reel/xyz123']
    },
    {
      id: 'ghi789',
      name: 'Silver Leaf Earrings',
      imageUrl: 'https://example.com/images/leaf-earrings.jpg',
      price: 1999,
      status: 'Available',
      dropIds: ['drop_001'],
      reelUrls: ['https://www.instagram.com/reel/xyz123']
    }
  ];