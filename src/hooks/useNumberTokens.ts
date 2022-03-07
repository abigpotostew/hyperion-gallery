import { useEffect, useState } from "react";
import { useQueryContract } from "./useQueryContract";

export const useNumberTokens = () => {
  const [numTokens, setNumTokens] = useState<number | undefined>(undefined);
  const { queryClient } = useQueryContract()

  useEffect(() => {
    if (!queryClient) return;
    (async () => {
      const num = await queryClient.getNumberTokensTotal()
      setNumTokens(num)
    })()
  }, [queryClient])

  return { numTokens }
}
