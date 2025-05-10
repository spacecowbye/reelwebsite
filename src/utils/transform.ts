import type { ProductItem, ProductItemClean, Reel, ReelClean } from '../types';

export function transformProductItem(item: ProductItem): ProductItemClean {
  return {
    id: item.UUID,
    name: item.Name,
    imageUrl: item["Image URL"],
    price: item.Price,
    status: item.Status,
    notes: item.Notes,
    dropIds: item.Drop,
    reelUrls: item["Reel Video URL (from Drop)"],
  };
}

export function transformReel(reel: Reel): ReelClean {
  return {
    dropId: reel["Drop ID"],
    reelUrl: reel["Reel Video URL"],
    datePosted: reel["Date Posted"],
    caption: reel.Caption,
    itemIds: reel["Items 2"],
    thumbnail: reel.Thumbnail,
  };
}

// import { transformProductItem, transformReel } from '../utils/transform';

// const cleanItems = rawItems.map(transformProductItem);
// const cleanReels = rawReels.map(transformReel);

