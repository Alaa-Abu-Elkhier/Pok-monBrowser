import { useSearchParams } from "react-router-dom";
import { Header } from "../components/Header";
import { ViewToggle, type ListViewMode } from "../components/ViewToggle";
import { QueryBoundary } from "../components/QueryBoundary";
import { GridSkeleton } from "../components/GridSkeleton";
import { PAGE_SIZE } from "../hooks/usePokemonList";
import { PaginationView } from "./PaginationView";
import { LoadMoreView } from "./LoadMoreView";

export function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode: ListViewMode =
    searchParams.get("view") === "load-more" ? "load-more" : "pagination";

  const handleModeChange = (nextMode: ListViewMode) => {
    setSearchParams(nextMode === "pagination" ? {} : { view: nextMode });
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 py-10 sm:px-6">
      <Header
        subtitle={
          mode === "pagination"
            ? "Discover and explore Pokémon with page controls"
            : "Discover and explore Pokémon with load more"
        }
      />
      <ViewToggle mode={mode} onChange={handleModeChange} />

      <div className="w-full">
        <QueryBoundary fallback={<GridSkeleton count={PAGE_SIZE} />}>
          {mode === "pagination" ? <PaginationView /> : <LoadMoreView />}
        </QueryBoundary>
      </div>
    </div>
  );
}
