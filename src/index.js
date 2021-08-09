import React from "react";
import ReactDOM from "react-dom";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// console.log(store);
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
