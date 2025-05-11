// src/utils/transformToReel.ts

import type { JewelryReel, JewelryItem, Reel } from '../types';

/**
 * Transforms a JewelryReel and a list of JewelryItems into a single Reel object
 */
export function transformToReel(reel: JewelryReel, items: JewelryItem[]): Reel {
  const relevantItems = items.filter(item => reel.itemIds?.includes(item.id));

  const products = relevantItems.map(item => ({
    id: item.id,
    name: item.name,
    imageUrl: item.imageUrl,
    price: item.price,
    currency: 'INR', // Removed the 'as const'
    isSoldOut: item.status === 'Sold Out',
  }));

  return {
    dropId: reel.dropId,
    reelUrl: reel.reelUrl,
    datePosted: reel.datePosted,
    thumbnail: reel.thumbnail,
    products,
    profileLink: "https://www.instagram.com/deepas_silver_jewelry/",
    authorName: "deepas_silver_jewelry",
    profileImage: "/instadp.jpeg"
  };
}