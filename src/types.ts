// src/types.ts

// Raw Airtable-style types
export interface JewelryItem {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    status: 'Available' | 'Sold Out';
    notes?: string;
    dropIds?: string[];
    reelUrls?: string[];
  }
  
  export interface JewelryReel {
    dropId: number;
    reelUrl: string;
    datePosted: string;
    caption: string;
    itemIds?: string[];
    thumbnail: string;
    items: JewelryItem[]; // If you include embedded items
  }
  // Clean, camelCase types for use in components
  export interface ProductItemClean {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    status: 'Available' | 'Sold Out';
    notes?: string;
    dropIds?: string[];
    reelUrls?: string[];
  }
  
  export interface ReelClean {
    dropId: number;
    reelUrl: string;
    datePosted: string;
    caption: string;
    itemIds?: string[];
    thumbnail: string;
  }
  