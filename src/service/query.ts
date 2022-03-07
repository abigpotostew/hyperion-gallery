import config, { Config } from "../config";
import { CosmWasmClient, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import keplrClient from "../utils/keplr-client";
import { OfflineDirectSigner, OfflineSigner } from "@cosmjs/proto-signing";

export class QueryContract {
  private readonly config: Config;
  private readonly client: CosmWasmClient;
  private keplrClient: SigningCosmWasmClient | undefined;
  private keplerOfflineClient: OfflineSigner | OfflineDirectSigner | undefined;

  constructor(config: Config, client: CosmWasmClient) {
    this.config = config;
    this.client = client;
  }

  public static async init(config: Config) {
    const client = await CosmWasmClient.connect(config.rpcEndpoint);
    return new QueryContract(config, client);
  }

  async getBalance(address: string) {
    return this.client.getBalance(address, 'ustars');
  }

  async getAllOwnedTokens(address: string) {
    let allTokens: string[] = [];

    const limit = 30;
    let start_after = '0';
    while (1) {
      // let start_after = (i * limit).toString()
      const page = await this.client.queryContractSmart(this.config.sg721, {
        tokens: {
          owner: address,
          start_after,
          limit
        }
      });
      if (!page || !page.tokens || page.tokens.length === 0) {
        break;
      }
      start_after = page.tokens[page.tokens.length - 1];
      allTokens.push(...page.tokens as string[]);
    }

    return allTokens.map(t => parseInt(t)).sort().map(t => t.toString());
  }

  // probably don't need this, it returns tokens in lexographic order
  async getAllTokens({ limit = 30, start_after = '0' }: { limit?: number, start_after?: string }) {
    const props = { limit, start_after };
    const ownedTokens = await this.client.queryContractSmart(this.config.sg721, { all_tokens: props });
    return ownedTokens.tokens as string[];
  }

  async getNumberTokensTotal() {
    const num_tokens = await this.client.queryContractSmart(this.config.sg721, { num_tokens: {} });
    return num_tokens.count as number;
  }

  async getAccounts() {
    if (this.keplerOfflineClient) {
      const accounts = this.keplerOfflineClient.getAccounts();
      return accounts
    } else {
      throw new Error('Kepler Offline Client not initialized')
    }
  }

  async connectKeplr() {
    if (this.keplrClient) {
      return;
    }
    const { signer, offlineSigner } = await keplrClient(config);
    this.keplrClient = signer;
    this.keplerOfflineClient = offlineSigner;
  }
}
