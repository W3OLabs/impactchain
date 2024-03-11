import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store.ts";
import { ContextProvider } from "./hooks/AppContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
      <App />
      <ToastContainer />
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
