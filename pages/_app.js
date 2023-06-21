import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "binance-testnet";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
      <Toaster></Toaster>
    </ThirdwebProvider>
  );
}

export default MyApp;