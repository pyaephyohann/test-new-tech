import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes/Router";
import { Provider } from "react-redux";
import { store } from "./store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./store/slices/apiSlice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
