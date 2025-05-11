// src/lib/airtable.ts
import Airtable from 'airtable';
import type { JewelryItem, JewelryReel } from '../types';

// Validate environment variables
if (!import.meta.env.VITE_AIRTABLE_TOKEN) {
  throw new Error('Missing VITE_AIRTABLE_TOKEN environment variable');
}

if (!import.meta.env.VITE_AIRTABLE_BASE_ID) {
  throw new Error('Missing VITE_AIRTABLE_BASE_ID environment variable');
}

// Configure Airtable with PAT token
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: import.meta.env.VITE_AIRTABLE_TOKEN,
});

const base = Airtable.base(import.meta.env.VITE_AIRTABLE_BASE_ID);

// Main function to fetch jewelry reels with linked items
export async function getJewelryReels(): Promise<JewelryReel[]> {
  try {
    const reelRecords = await base('Reels')
      .select({
        sort: [{ field: 'Date Posted', direction: 'desc' }],
        view: 'Grid view',
      })
      .all();

    const reelsWithItems = await Promise.all(
      reelRecords.map(async (reel) => {
        const reelId = reel.id;
        const linkedItemIds = reel.get('Items 2') as string[] | undefined;

        let items: JewelryItem[] = [];

        if (linkedItemIds && linkedItemIds.length > 0) {
          const itemRecords = await Promise.all(
            linkedItemIds.map((id) => base('Items').find(id))
          );

          items = itemRecords.map((item) => ({
            id: item.id,
            name: (item.get('Name') as string) || '',
            imageUrl: (item.get('Image URL') as string) || '',
            price: item.get('Price') as number,
            status: (item.get('Status') as 'Available' | 'Sold Out') || 'Available',
            dropIds: item.get('Drop') as string[] | undefined,
            reelUrls: item.get('Reel Video URL (from Drop)') as string[] | undefined,
          }));
        }

        const jewelryReel: JewelryReel = {
          dropId: reel.get('Drop ID') as number,
          reelUrl: (reel.get('Reel Video URL') as string) || '',
          datePosted: reel.get('Date Posted') as string,
          itemIds: linkedItemIds || [],
          thumbnail: (reel.get('Thumbnail') as string) || '',
        };

        return jewelryReel;
      })
    );

    return reelsWithItems;
  } catch (error) {
    console.error('Error fetching jewelry reels:', error);
    return [];
  }
}
