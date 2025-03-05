import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import {SnackbarProvider} from 'notistack';
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Auth0Provider
      domain="dev-ey0utu62e37caak8.us.auth0.com"
      clientId="d7LobWB30BkzRLczt3F3NohWKiWPBpN0"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
    <SnackbarProvider>
    <App />
    </SnackbarProvider>
    </Auth0Provider>
  //  </React.StrictMode> 
);
