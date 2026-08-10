import { fetchPokemonList } from "../api/pokemon";
import { useSuspenseQuery } from "@tanstack/react-query";

export const PAGE_SIZE = 20;

export function usePokemonList(page: number) {
  const offset = (page - 1) * PAGE_SIZE;

  return useSuspenseQuery({
    queryKey: ["pokemonList", page],
    queryFn: () => fetchPokemonList(PAGE_SIZE, offset),
  });
}
