export interface NamedApiResource {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedApiResource[];
}

export interface PokemonSprites {
  front_default: string | null;
  other?: {
    ["official-artwork"]?: {
      front_default: string | null;
    };
  };
}

export interface PokemonTypeSlot {
  slot: number;
  type: NamedApiResource;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedApiResource;
}

export interface PokemonAbilitySlot {
  ability: NamedApiResource;
  is_hidden: boolean;
  slot: number;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: PokemonSprites;
  types: PokemonTypeSlot[];
  stats: PokemonStat[];
  abilities: PokemonAbilitySlot[];
}

export interface PokemonListItem {
  id: number;
  name: string;
  url: string;
}
