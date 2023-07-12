// types
import type { Beer, BeerApiResponse } from '@/types';

export function convertApiResponseToBeer(data: BeerApiResponse[]): Beer[] {
  const beers: Beer[] = data.map(d => {
    const ingredients = {
      malt: Array.from(new Set(d.ingredients.malt.map(m => m.name))),
      hops: Array.from(new Set(d.ingredients.hops.map(h => h.name))),
      yeast: d.ingredients.yeast,
    };

    return {
      id: d.id,
      name: d.name,
      tagline: d.tagline,
      image_url: d.image_url,
      description: d.description,
      ingredients,
    };
  });

  return beers;
}
