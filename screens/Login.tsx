import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import React from "react";
import { LoginProps } from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthContext } from "../store/authContext";
import Loading from "../components/Loading";

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const { login } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [loading, setLoading] = React.useState<boolean>(false);

  async function handleLogin() {
    setLoading(true);
    if (email !== "" && password !== "") {
      try {
        await login(email, password);
        setLoading(false);
      } catch (err) {
        Alert.alert("Invalid Email or Password");
        setLoading(false);
      }
    } else {
      setLoading(false);
      Alert.alert("Missing Fields");
    }
  }

  if (loading) return <Loading message="Logging You In..." />;

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
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        secureTextEntry
        placeholder="Password"
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
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
    fontFamily: "AppleSDGothicNeo-UltraLight",
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
