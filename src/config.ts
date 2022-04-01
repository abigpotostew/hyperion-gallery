const configBase = {
  // Testnet values
  testnet: {
    rpcEndpoint: "https://rpc.big-bang-1.stargaze-apis.com/",
    restEndpoint: "https://rest.big-bang-1.stargaze-apis.com/",
    chainId: "big-bang-1",
    // Custom values here
    sg721: "stars1dy5xsnrkumgp8nfysx93vtyfkhnknpans6ehpn8vagm350ge4m4q4s3h5n", // UPDATE ME to your testnet contract
    mintPriceStars: 314, // UPDATE ME to Your Mint Price
    totalNumMints: 1024, // UPDATE ME to Your total mints
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

    // minter: "", // UPDATE ME to your production contract
    mintPriceStars: 314, // UPDATE ME to Your Mint Price
    totalNumMints: 1024, // UPDATE ME to Your total mints

    testnet: false,
    soldOut: true,
  },
  useTestnet: false, // Set to false on production

  defaults: {
    ipfsMetadataCid: 'bafybeigpdi7agocjhum27khtlpxd7me6kprftmu6jrb4ki3qv3wt3glure',
    ipfsImageCid: 'bafybeigqwoubjsr3jmxby6kjktqu3siob5fe5s5hdjwirxf3q4czmfhs3y',
    ipfsLiveCid: 'bafybeieuikz4oqdv6t3tgeigtvsb5zat6vl2ngoeikexhrr7dm4fnswscm',
    fileUrlThumbnails: "https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/thumbs-400",
    fileUrlThumbnailsExtension: '.jpg',
    fileUrlMetadata: "https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/metadata",
    fileUrlMetadataExtension: '.json',
    fileUrlHighResImage: "https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/4k",
    fileUrlHighResImageExtension: ".png",
    fileUrlImage: "https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/images",
    fileUrlImageExtension: ".jpg",
    liveViewUrl: "https://live.hyperionnft.art/id",
  }
};

export type Config = typeof configBase.testnet & typeof configBase.production & typeof configBase.defaults;

const config = {
  ...configBase.defaults, ...(configBase.useTestnet
    ? configBase.testnet
    : configBase.production)
} as Config;
config.testnet = configBase.useTestnet;
Object.freeze(config);

export default config;
