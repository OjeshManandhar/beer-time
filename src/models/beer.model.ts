import { Beer } from '@/types';

let id = 1;
const beers: Beer[] = [
  {
    id: 1,
    name: 'Beer A',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    tagline: 'Tagline A',
    description: 'Description A',
    ingredients: ['Food 1', 'Food 2'],
  },
  {
    id: 2,
    name: 'Beer B',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    tagline: 'Tagline B',
    description: 'Description B',
    ingredients: ['Food 1', 'Food 2'],
  },
  {
    id: 3,
    name: 'Beer C',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    tagline: 'Tagline B',
    description: 'Description C',
    ingredients: ['Food 1', 'Food 2'],
  },
];

class BeerModel implements Beer {
  id: number;
  name: string;
  tagline: string;
  image_url: string | null;
  description: string;
  ingredients:
    | string
    | string[]
    | {
        malt: string[];
        hops: string[];
        yeast: string;
      };

  constructor(beer: Omit<Beer, 'id' | 'image_url'>) {
    this.id = id++;
    this.name = beer.name;
    this.tagline = beer.tagline;
    this.image_url = null;
    this.description = beer.description;
    this.ingredients = beer.ingredients;
  }

  save() {
    beers.push(this);
  }

  static add(beer: Omit<Beer, 'id' | 'image_url'>) {
    const newBeer = { ...beer, id: id++, image_url: null };

    beers.push(newBeer);
  }

  static getAll(): Beer[] {
    return beers;
  }
}

export default BeerModel;
