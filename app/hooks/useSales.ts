import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getSales } from "../lib/api";

export function useSales(token: string, filters: any) {
  return useQuery({
    queryKey: ["sales", filters],
    queryFn: () => getSales({ token, ...filters }),
    enabled: !!token,
    staleTime: 1000 * 60 * 3, // 3 minutes
    placeholderData: keepPreviousData, // ⬅️ instead of keepPreviousData: true
  });
}
