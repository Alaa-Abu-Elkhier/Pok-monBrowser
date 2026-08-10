export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function formatPokemonId(id: number): string {
  return `#${String(id).padStart(3, "0")}`;
}

export function formatPokemonName(name: string): string {
  return capitalize(name.replace(/-/g, " "));
}
