import { useEffect, useState } from "react";
import { useQueryContract } from "./useQueryContract";
import config from "../config";

export const useNumberTokens = () => {
  const [numTokens, setNumTokens] = useState<number | undefined>(undefined);
  const { queryClient } = useQueryContract()

  useEffect(() => {
    if (!queryClient) return;
    (async () => {
      if (Date.now() < 1647027924000) {
        setNumTokens(0);
        return;
      }
      if (config.soldOut) {
        setNumTokens(config.totalNumMints)
      } else {
        const num = await queryClient.getNumberTokensTotal()
        setNumTokens(num)
      }
    })()
  }, [queryClient])

  return { numTokens }
}
