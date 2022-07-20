import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "./redux/store";
import Route from "./routes";
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(["ViewPropTypes will be removed", "ColorPropType will be removed"]);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
const styles = StyleSheet.create({});
