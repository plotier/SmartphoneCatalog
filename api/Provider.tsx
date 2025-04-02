"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Provider({ children, dehydratedState }: { children: React.ReactNode; dehydratedState?: any }) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 24 * 60 * 60 * 1000, // 24 hs.
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydratedState}>
                {children}
            </HydrationBoundary>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
