interface Props {
  message?: string;
  onRetry: () => void;
}

export function ErrorState({ message, onRetry }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-red-100 bg-red-50 px-6 py-16 text-center">
      <p className="text-lg font-semibold text-red-700">
        Couldn't load Pokémon
      </p>
      <p className="max-w-sm text-sm text-red-500">
        {message ?? "Something went wrong while talking to the PokéAPI."}
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-2 rounded-full bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700"
      >
        Retry
      </button>
    </div>
  );
}
