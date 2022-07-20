import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { StackActions } from "@react-navigation/native";
import ILLogo from "../assets/illustrations";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("Login"));
    }, 1000);
  }, []);

  return (
    <View style={styles.pages}>
      <Image source={ILLogo} style={styles.illustration} />
      <Text style={styles.title}></Text>
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  pages: {
    backgroundColor: "#018AEB",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  illustration: {
    width: 200,
    height: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    color: "#fff",
    marginTop: 20,
  },
});
