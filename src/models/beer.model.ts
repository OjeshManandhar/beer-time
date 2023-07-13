// packages
import Dexie, { Table } from 'dexie';

// types
import type { Beer } from '@/types';

class BeerDexieModel extends Dexie {
  beers!: Table<Beer>;

  constructor() {
    super('BeersDB');
    this.version(1).stores({
      beers: '++id',
    });
  }
}

export const db = new BeerDexieModel();
