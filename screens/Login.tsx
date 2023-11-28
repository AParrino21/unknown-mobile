import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React from "react";
import { LoginProps } from "../types";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <View style={styles.loginContainer}>
      <MaterialCommunityIcons name="alien" size={50} color="black" />
      <Text style={styles.homeHeader}>
        Welcome to Beyond Sightings, the central hub for UFO stories,
        encounters, and all things Alien. Share your unique experiences with the
        world. Your stories will remain unaltered, unregulated, and forever
        known.
      </Text>
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
        <Button
          title="Login"
          onPress={() => navigation.navigate("ProfileStack")}
        />
        <Button title="Sign Up" onPress={() => navigation.navigate("Signup")} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  homeHeader: {
    textAlign: "center",
    // fontWeight: "700",
    padding: 20,
    fontSize: 18,
    fontFamily:'AppleSDGothicNeo-UltraLight'
  },
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
  buttonContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
