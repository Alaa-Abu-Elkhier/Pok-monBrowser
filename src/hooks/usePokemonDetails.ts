import { fetchPokemonDetail } from "../api/pokemon";
import { useSuspenseQuery } from "@tanstack/react-query";

export function usePokemonDetails(idOrName: string) {
  return useSuspenseQuery({
    queryKey: ["pokemonDetail", idOrName],
    queryFn: () => fetchPokemonDetail(idOrName),
  });
}
