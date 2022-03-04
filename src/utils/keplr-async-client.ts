import config from "../config";
import keplrClient from "./keplr-client";

const asyncKeplrClient = keplrClient(config);
export default asyncKeplrClient;
