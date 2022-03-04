import { useEffect, useState } from "react";
import { Keplr } from "@keplr-wallet/types";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import asyncKeplrClient from "../utils/keplr-async-client";

export const useKeplr = (): [SigningCosmWasmClient|undefined, boolean] => {
  const [keplr, setKeplr] = useState<SigningCosmWasmClient|undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKeplr = async () => {
      const keplr = await asyncKeplrClient;
      setKeplr(keplr);
      setLoading(false);
    };
    fetchKeplr();
  }, []);

  return [keplr, loading];
};
