export interface Volume {
  value: number;
  unit: string;
}

export interface Ingredients {
  name: string;
  amount: Volume;
  add?: string;
  attribute?: string;
}

export interface BeerObject {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: Volume;
  method: {
    mash_temp: [
      {
        temp: Volume;
        duration: number;
      }
    ];
    fermentation: {
      temp: Volume;
    };
    twist: null;
  };
  ingredients: {
    malt: Ingredients[];
    hops: Ingredients[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}
