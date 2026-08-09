interface Props {
  subtitle: string;
}

export function Header({ subtitle }: Props) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <h1 className="flex items-center gap-2 text-3xl font-bold text-slate-800 sm:text-4xl">
        <span aria-hidden>⚡</span> Pokédex
      </h1>
      <p className="text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}
