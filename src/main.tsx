import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CardsProvider } from "./context/CardsContext.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CardsProvider>
        <App />
      </CardsProvider>
    </ChakraProvider>
  </React.StrictMode>
);
