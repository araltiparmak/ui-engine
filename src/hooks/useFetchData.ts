import { useQuery } from "@tanstack/react-query";

export const useFetchData = (url: string, options = {}) => {
  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      return response.json();
    },
    // Default options that can be overridden
    retry: 3,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options,
  });
};
