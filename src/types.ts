// src/types.ts

// Raw Airtable-style types
export interface JewelryItem {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    status: 'Available' | 'Sold Out';
    dropIds?: string[];
    reelUrl?: string[];
  }
  
  export interface JewelryReel {
    dropId: number;
    reelUrl: string;
    datePosted: string;
    itemIds?: string[];
    thumbnail: string;
  }
  export interface Reel {
    dropId: number;
    reelUrl: string;
    datePosted: string;
    thumbnail: string;
  
    products: {
      id: string;
      name: string;
      imageUrl: string;
      price: number;
      currency: string; // Changed from 'INR' to string
      isSoldOut: boolean;
    }[];
  
    // Changed from literal strings to regular strings
    profileLink: string;
    authorName: string;
    profileImage: string;
  }