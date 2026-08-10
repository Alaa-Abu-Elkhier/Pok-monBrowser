import { PokemonCard } from "./PokemonCard";
import type { PokemonListItem } from "../types/pokemon";

interface Props {
  items: PokemonListItem[];
}

export function PokemonGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {items.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
