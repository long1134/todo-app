/*
 * Copyright (c) 2023.
 * File Name: main.tsx
 * Author: Coderthemes
 */
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { SnackbarProvider } from "notistack";
import { AuthProvider, LayoutProvider } from "./states";
import App from "@src/App";
import { store } from './app/store'
import { Provider } from 'react-redux'
// styles
import "@src/assets/css/app.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
     
        <LayoutProvider>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </LayoutProvider>
    
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
