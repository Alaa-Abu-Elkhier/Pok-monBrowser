import { Suspense, type ReactNode } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "./ErrorBoundary";
import { ErrorState } from "./ErrorState";

interface Props {
  fallback: ReactNode;
  children: ReactNode;
}

export function QueryBoundary({ fallback, children }: Props) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={(error, retry) => (
            <ErrorState message={error.message} onRetry={retry} />
          )}
        >
          <Suspense fallback={fallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
