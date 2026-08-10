import { PokemonGrid } from "../components/PokemonGrid";
import { useInfinitePokemonList } from "../hooks/useInfinitePokemonList";

export function LoadMoreView() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePokemonList();

  const items = data.pages.flatMap((page) => page.items);

  return (
    <div className="flex flex-col items-center gap-6">
      <PokemonGrid items={items} />

      {hasNextPage ? (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-wait disabled:opacity-60"
        >
          {isFetchingNextPage ? "Loading more…" : "Load More"}
        </button>
      ) : (
        <p className="text-sm text-slate-400">No more Pokémon to load.</p>
      )}

      <p className="text-xs text-slate-400">Showing {items.length} Pokémon</p>
    </div>
  );
}
