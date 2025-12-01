import { useQuery } from "@tanstack/react-query";
import { getAuthorize } from "../lib/api";

export function useAuthToken() {
  return useQuery({
    queryKey: ["authToken"],
    queryFn: async () => {
      const res = await getAuthorize();
      return res.token;
    },
    staleTime: Infinity,
  });
}
