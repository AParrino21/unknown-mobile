import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React from "react";
import { LoginProps } from "../types";

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <View style={styles.loginContainer}>
      <View>
        <Text style={styles.loginTitle}>Beyond Sightings</Text>
      </View>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Profile")} />
        <Button title="Sign Up" onPress={() => navigation.navigate("Signup")} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    borderRadius: 10,
  },
  loginTitle: {
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "900",
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
