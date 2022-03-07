import { useEffect, useState } from "react";
import config from "../config";
import { QueryContract } from "../service/query";
import { AccountData } from "@cosmjs/proto-signing";

export const useQueryContract = () => {
  const [queryClient, setQueryClient] = useState<QueryContract | undefined>(undefined);
  useEffect(() => {
    (async () => {
      const queryClient = await QueryContract.init(config);
      setQueryClient(queryClient);
    })();
  }, [])
  return { queryClient };
}

export const useAccounts = () => {
  const { queryClient } = useQueryContract();
  const [accounts, setAccounts] = useState<readonly AccountData[] | undefined>(undefined);
  useEffect(() => {
    if (!queryClient || accounts !== undefined) {
      return;
    }
    (async () => {
      await queryClient.connectKeplr()
      const accounts = await queryClient.getAccounts()
      setAccounts(accounts)
    })();
  }, [queryClient])
  return { accounts }
}
