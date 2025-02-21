"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient, setQueryClient] = useState<QueryClient | null>(null);

  useEffect(() => {
    setQueryClient(new QueryClient());
  }, []);

  if (!queryClient) return null;

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
