import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Leyout";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AnimatePresence mode="wait" initial={false}>
        <NextNProgress />
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}
