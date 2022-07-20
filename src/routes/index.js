import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Products from "../pages/Products";
import Checkout from "../pages/Checkout";
import Receipt from "../pages/Receipt";
import Splash from "../pages/Splash";
import Login from "../pages/Login";
import Onboarding from "react-native-onboarding-swiper";

const Stack = createStackNavigator();
const Route = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Receipt" component={Receipt} />
    </Stack.Navigator>
  );
};
export default Route;
