import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type PropsWithChildren} from "react";

const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          gcTime: 5 * 60 * 1000,
          staleTime: 5 * 1000,
          refetchInterval: 1000,
          refetchOnWindowFocus: true,
        },
      },
    })

export function QueryProvider({ children }: PropsWithChildren) {

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
