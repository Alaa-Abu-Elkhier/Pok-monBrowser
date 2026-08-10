import type {
  Pokemon,
  PokemonListItem,
  PokemonListResponse,
} from "../types/pokemon";

const API_BASE = "https://pokeapi.co/api/v2";
const SPRITE_BASE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Request failed (${res.status}): ${url}`);
  }
  return res.json() as Promise<T>;
}

export function idFromUrl(url: string): number {
  const match = url.match(/\/pokemon\/(\d+)\/?$/);
  return match ? Number(match[1]) : NaN;
}

export function spriteUrl(id: number): string {
  return `${SPRITE_BASE}/${id}.png`;
}

export async function fetchPokemonList(
  limit: number,
  offset: number,
): Promise<{ items: PokemonListItem[]; count: number; hasMore: boolean }> {
  const data = await fetchJson<PokemonListResponse>(
    `${API_BASE}/pokemon?limit=${limit}&offset=${offset}`,
  );

  return {
    items: data.results.map((r) => ({
      id: idFromUrl(r.url),
      name: r.name,
      url: r.url,
    })),
    count: data.count,
    hasMore: data.next !== null,
  };
}

export async function fetchPokemonDetail(
  idOrName: string | number,
): Promise<Pokemon> {
  return fetchJson<Pokemon>(`${API_BASE}/pokemon/${idOrName}`);
}
