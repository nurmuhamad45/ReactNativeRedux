import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground, Image, ScrollView, Platform } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ILLogos } from "../assets/illustrations";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onLogin = () => {
    if (!email && !password) {
      Alert.alert("Enter Username");
    } else if (!email) {
      Alert.alert("Enter your email");
    } else if (!password) {
      Alert.alert("Enter your assword");
    } else {
      navigation.navigate("Products");
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""} style={styles.container}>
      <Image source={require("../assets/illustrations/FoodiesBlack.png")} style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your email" value={email} onChangeText={(text) => setEmail(text)} style={styles.input} />
        <TextInput placeholder="Enter your password" value={password} onChangeText={(text) => setPassword(text)} style={styles.input} secureTextEntry />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onLogin();
          }}
          style={styles.buttonLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
          style={[styles.buttonRegister, styles.buttonOutline]}
        ></TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4F1FF",
    alignItems: "center",
  },

  logo: {
    width: 200,
    height: 100,
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    height: "50%",
  },
  input: {
    fontSize: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 322,
    height: 52,
    left: -15,
    top: 50,
  },
  forgotPassword: {
    color: "#018AEB",
    fontSize: 14,
    textAlign: "right",
    top: 70,
  },
  buttonContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLogin: {
    backgroundColor: "#018AEB",
    width: "70%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 322,
    height: 52,
    left: -15,
    top: 100,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  signUp: {
    color: "#018AEB",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    right: -20,
    top: 128,
  },
  text: {
    color: "#018AEB",
    fontSize: 16,
    left: -40,
    top: 150,
  },
});
