const configBase = {
  // Testnet values
  testnet: {
    rpcEndpoint: "https://rpc.big-bang-1.stargaze-apis.com/",
    restEndpoint: "https://rest.big-bang-1.stargaze-apis.com/",
    chainId: "big-bang-1",
    // Custom values here
    sg721: "stars1dy5xsnrkumgp8nfysx93vtyfkhnknpans6ehpn8vagm350ge4m4q4s3h5n", // UPDATE ME to your testnet contract
    minter: "", // UPDATE ME to your testnet contract
    mintPriceStars: 314, // UPDATE ME to Your Mint Price
    totalNumMints: 1024, // UPDATE ME to Your total mints
    // thumbFiletype: ".jpg", // UPDATE ME to Your total mints
    // metadataType: ".json", // UPDATE ME to Your total mints
    // rarityType: ".json", // UPDATE ME to Your total mints
    // fileBase: "https://files.endala.xyz/",
    // fileUrlThumbnails: "https://files.endala.xyz/testnet/thumbnails", // I am hosting cached versions on S3 because its much faster
    // fileUrlMetadata: "https://files.endala.xyz/testnet/metadata",
    // fileUrlRarities: "https://files.endala.xyz/testnet/rarities",
    testnet: true,
    soldOut: false,
  },
  // Production Values
  production: {
    rpcEndpoint: "https://rpc.stargaze-apis.com/",
    restEndpoint: "",
    chainId: "stargaze-1",
    // Custom values here
    sg721: "stars18a0pvw326fydfdat5tzyf4t8lhz0v6fyfaujpeg07fwqkygcxejsnp5fac", // UPDATE ME to your production contract
    minter: "", // UPDATE ME to your production contract
    mintPriceStars: 314, // UPDATE ME to Your Mint Price
    totalNumMints: 1024, // UPDATE ME to Your total mints
    // thumbFiletype: ".jpg", // UPDATE ME to Your total mints
    // metadataType: ".json", // UPDATE ME to Your total mints
    // rarityType: ".json", // UPDATE ME to Your total mints
    // fileBase: "https://files.endala.xyz/",
    // fileUrlThumbnails: "https://files.endala.xyz/testnet/thumbnails",
    // fileUrlMetadata: "https://files.endala.xyz/testnet/metadata",
    // fileUrlRarities: "https://files.endala.xyz/testnet/rarities",
    testnet: false,
    soldOut: true,
  },
  useTestnet: false, // Set to false on production
};

export type Config = typeof configBase.testnet | typeof configBase.production;

const config = configBase.useTestnet
  ? configBase.testnet
  : configBase.production;
config.testnet = configBase.useTestnet;
Object.freeze(config);

export default config;
