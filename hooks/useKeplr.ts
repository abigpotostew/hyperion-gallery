import { useEffect, useState } from "react";
import { Keplr } from "@keplr-wallet/types";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import asyncKeplrClient from "../src/utils/keplr-async-client";
import { OfflineDirectSigner, OfflineSigner } from "@cosmjs/proto-signing";
//
// export const useKeplr = (): [SigningCosmWasmClient | undefined, boolean] => {
//   const [keplr, setKeplr] = useState<{ signer: SigningCosmWasmClient; offlineSigner: OfflineSigner | OfflineDirectSigner; } | undefined>(undefined);
//   const [loading, setLoading] = useState(true);
//
//   useEffect(() => {
//     const fetchKeplr = async () => {
//       const keplr = await asyncKeplrClient;
//       setKeplr(keplr);
//       setLoading(false);
//     };
//     fetchKeplr();
//   }, []);
//
//   return [keplr, loading];
// };
