// src/types.ts

// Raw Airtable-style types
export interface ProductItem {
    UUID: string;
    Name: string;
    "Image URL": string;
    Price: number;
    Status: 'Available' | 'Sold Out';
    Notes?: string;
    Drop?: string[];
    "Reel Video URL (from Drop)"?: string[];
  }
  
  export interface Reel {
    "Drop ID": number;
    "Reel Video URL": string;
    "Date Posted": string;
    Caption: string;
    "Items 2"?: string[];
    Thumbnail: string;
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
  