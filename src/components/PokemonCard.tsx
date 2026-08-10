import { formatPokemonId, formatPokemonName } from "../utils/format";

import { Link } from "react-router-dom";
import type { PokemonListItem } from "../types/pokemon";
import { spriteUrl } from "../api/pokemon";

interface Props {
  pokemon: PokemonListItem;
}

export function PokemonCard({ pokemon }: Props) {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl bg-slate-50 sm:h-28 sm:w-28">
        <img
          src={spriteUrl(pokemon.id)}
          alt={pokemon.name}
          loading="lazy"
          className="h-full w-full object-contain transition group-hover:scale-110"
        />
      </div>
      <p className="mt-3 text-sm font-semibold capitalize text-slate-800">
        {formatPokemonName(pokemon.name)}
      </p>
      <p className="text-xs text-slate-400">{formatPokemonId(pokemon.id)}</p>
    </Link>
  );
}
