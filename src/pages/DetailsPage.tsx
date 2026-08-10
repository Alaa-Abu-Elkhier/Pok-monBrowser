import { Link, useParams } from "react-router-dom";
import { formatPokemonId, formatPokemonName } from "../utils/format";

import { DetailsSkeleton } from "../components/DetailsSkeleton";
import { QueryBoundary } from "../components/QueryBoundary";
import { StatBar } from "../components/StatBar";
import { TypeBadge } from "../components/TypeBadge";
import { usePokemonDetails } from "../hooks/usePokemonDetails";

export function DetailsPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-purple-50 to-fuchsia-100">
      <div className="mx-auto flex w-full max-w-[780px] flex-col gap-4 px-4 py-10 sm:px-6">
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50"
        >
          ← Back to List
        </Link>

        <QueryBoundary fallback={<DetailsSkeleton />}>
          <DetailContent id={id as string} />
        </QueryBoundary>
      </div>
    </div>
  );
}

function DetailContent({ id }: { id: string }) {
  const { data: pokemon } = usePokemonDetails(id);

  const sprite =
    pokemon.sprites.other?.["official-artwork"]?.front_default ??
    pokemon.sprites.front_default;

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-6 text-center text-white">
        <h1 className="flex items-center justify-center gap-2 text-2xl font-bold capitalize">
          <span aria-hidden>⚡</span> {formatPokemonName(pokemon.name)}
        </h1>
        <p className="mt-1 text-sm text-white/80">
          {formatPokemonId(pokemon.id)}
        </p>
      </div>

      <div className="flex flex-col gap-6 p-6 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:w-48 sm:shrink-0">
          <div className="flex h-44 w-44 items-center justify-center rounded-full bg-slate-100">
            {sprite ? (
              <img
                src={sprite}
                alt={pokemon.name}
                className="h-full w-full object-contain"
              />
            ) : null}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {pokemon.types.map(({ type }) => (
              <TypeBadge key={type.name} type={type.name} />
            ))}
          </div>
          <div className="grid w-full grid-cols-2 gap-2 text-center">
            <div className="rounded-xl bg-slate-50 py-2.5">
              <p className="flex items-center justify-center gap-1 text-xs text-slate-400">
                <span aria-hidden>📏</span> Height
              </p>
              <p className="text-sm font-semibold text-slate-700">
                {(pokemon.height / 10).toFixed(1)} m
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 py-2.5">
              <p className="flex items-center justify-center gap-1 text-xs text-slate-400">
                <span aria-hidden>⚖️</span> Weight
              </p>
              <p className="text-sm font-semibold text-slate-700">
                {(pokemon.weight / 10).toFixed(1)} kg
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-5">
          <div>
            <h2 className="mb-2 text-base font-bold text-slate-800">
              Base Stats
            </h2>
            <div className="space-y-2">
              {pokemon.stats.map((s) => (
                <StatBar
                  key={s.stat.name}
                  name={s.stat.name}
                  value={s.base_stat}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-base font-bold text-slate-800">
              Abilities
            </h2>
            <div className="flex flex-col gap-1.5">
              {pokemon.abilities.map((a) => (
                <span
                  key={a.ability.name}
                  className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                >
                  {a.ability.name.replace(/-/g, " ")}
                  {a.is_hidden ? (
                    <span className="text-xs text-slate-400">(Hidden)</span>
                  ) : null}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-800">
              Base Experience
            </h2>
            <p className="text-2xl font-extrabold text-purple-600">
              {pokemon.base_experience} XP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
