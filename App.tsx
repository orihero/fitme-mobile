import React from "react";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./ignoreWarnings";
import Root from "./src/navigation/Root";
import store from "./src/store/configureStore";
enableScreens();

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
