import { Component, ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from '@/widgets/PageError';

interface ErrorBoundaryProps {
    children?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    public state: ErrorBoundaryState = {
        hasError: false,
    };

    public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render(): JSX.Element | ReactNode {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <Suspense fallback=''>
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}

export { ErrorBoundary };
