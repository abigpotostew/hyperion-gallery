import { useEffect, useState } from "react";
import { useQueryContract } from "./useQueryContract";

export const useNumberTokens = () => {
  const [numTokens, setNumTokens] = useState<number | undefined>(undefined);
  const { queryClient } = useQueryContract()

  useEffect(() => {
    if (!queryClient) return;
    (async () => {
      if (Date.now() < 1646985600000) {
        setNumTokens(0);
        return
      }
      const num = await queryClient.getNumberTokensTotal()
      setNumTokens(num)
      // setNumTokens(1024)
    })()
  }, [queryClient])

  return { numTokens }
}
