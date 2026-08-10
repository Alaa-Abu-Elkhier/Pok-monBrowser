import { PAGE_SIZE } from "./usePokemonList";
import { fetchPokemonList } from "../api/pokemon";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

export function useInfinitePokemonList() {
  return useSuspenseInfiniteQuery({
    queryKey: ["pokemonInfiniteList"],
    queryFn: ({ pageParam }) => fetchPokemonList(PAGE_SIZE, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasMore ? allPages.length * PAGE_SIZE : undefined,
  });
}
