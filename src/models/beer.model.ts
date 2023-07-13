// packages
import Dexie, { Table } from 'dexie';

// types
import type { Beer } from '@/types';

class BeerDexieModel extends Dexie {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  beers: Table<Beer>;

  constructor() {
    super('BeersDB');
    this.version(1).stores({
      beers: '++id',
    });
  }
}

export const db = new BeerDexieModel();
