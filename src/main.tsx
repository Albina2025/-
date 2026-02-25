import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css'
import { Provider } from "react-redux";
import { store } from "./store";
import './i18n'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider   defaultColorScheme="light"  theme={{
          colorScheme: 'light',
        }}>
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
  
);



