import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Config } from "../config";
import { addTestnetToKeplr } from "./keplr-testnet";
import { Window } from "@keplr-wallet/types/build/window";


const client = async (config: Config) => {
  const prefix = "wasm";
  const gasPrice = null;

  // hack foo to wait for keplr to be available
  await new Promise((r) => setTimeout(r, 200));

  // check browser compatibility

  const checkChainOrTestnet = async () => {
    if (config.testnet) {
      const testnet = await addTestnetToKeplr();
    } else {
      const windowKeplr = (<Window>window);
      const chain = await windowKeplr.keplr?.enable(config.chainId);
    }
  };

  await checkChainOrTestnet();
  const windowKeplr = (<Window>window);
  if (windowKeplr.getOfflineSignerAuto) {
    // Setup signer
    const offlineSigner = await windowKeplr.getOfflineSignerAuto(config.chainId);
    // Init SigningCosmWasmClient client
    return {
      signer: await SigningCosmWasmClient.connectWithSigner(
        config.rpcEndpoint,
        offlineSigner,
        {
          prefix,
          // gasPrice:new GasPrice(0),
        }
      ),
      offlineSigner,
    };
  } else {
    throw Error("Keplr not available");
  }
};

export default client;
