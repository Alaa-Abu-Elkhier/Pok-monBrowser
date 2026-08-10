import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 text-center">
      <p className="text-lg font-semibold text-slate-800">Page not found</p>
      <Link
        to="/"
        className="text-sm font-medium text-purple-600 hover:underline"
      >
        ← Back to Pokédex
      </Link>
    </div>
  );
}
