import { PAGE_SIZE, usePokemonList } from "../hooks/usePokemonList";

import { PaginationButtons } from "../components/PaginationButtons";
import { PokemonGrid } from "../components/PokemonGrid";
import { useSearchParams } from "react-router-dom";
import { useTransition } from "react";

export function PaginationView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, Number(searchParams.get("page") ?? "1") || 1);
  const [isPending, startTransition] = useTransition();

  const { data } = usePokemonList(page);

  const handlePageChange = (nextPage: number) => {
    startTransition(() => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set("page", String(nextPage));
        return next;
      });
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.max(1, Math.ceil(data.count / PAGE_SIZE));

  return (
    <div className="flex flex-col gap-6">
      <div
        className={
          isPending ? "opacity-60 transition-opacity" : "transition-opacity"
        }
      >
        <PokemonGrid items={data.items} />
      </div>
      <PaginationButtons
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
