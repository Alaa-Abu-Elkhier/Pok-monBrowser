import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  onReset?: () => void;
  fallbackRender?: (error: Error, retry: () => void) => ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled error in component tree:", error, info);
  }

  handleReset = () => {
    this.props.onReset?.();
    this.setState({ error: null });
  };

  render() {
    if (this.state.error) {
      if (this.props.fallbackRender) {
        return this.props.fallbackRender(this.state.error, this.handleReset);
      }

      return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 p-8 text-center">
          <p className="text-lg font-semibold text-slate-800">
            Something went wrong.
          </p>
          <p className="max-w-md text-sm text-slate-500">
            {this.state.error.message}
          </p>
          <button
            type="button"
            onClick={this.handleReset}
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
