import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Leyout";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}
