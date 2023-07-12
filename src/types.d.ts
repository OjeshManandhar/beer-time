export type Beer = {
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
};

export type BeerApiResponse = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string | null;
  ingredients: {
    malt: Array<{ name: string; amount: { value: number; unit: string } }>;
    hops: Array<{
      name: string;
      amount: { value: number; unit: string };
      add: string;
      attribute: string;
    }>;
    yeast: string;
  };
};
