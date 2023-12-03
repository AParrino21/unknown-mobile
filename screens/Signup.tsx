import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SignupProps } from "../types";
import { AuthContext } from "../store/authContext";
import Loading from "../components/Loading";

const Signup: React.FC<SignupProps> = ({ navigation }) => {
  const { createUser } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [loading, setLoading] = React.useState<boolean>(false);

  async function handleSignup() {
    setLoading(true);
    if (email !== "" && password !== "") {
      try {
        await createUser(email, password, username);
        setLoading(false);
      } catch (err) {
        // LOOK INTO THIS
        // check how to see what went wrong to inform user
        Alert.alert("Invalid Attempt")
        setLoading(false)
      }
    } else {
      setLoading(false);
      Alert.alert("Missing Fields");
    }
  }

  function handleCancel() {
    setUsername("");
    setPassword("");
    setUsername("");
    navigation.navigate("Login");
  }

  if (loading) return <Loading message="Creating User..." />;

  return (
    <View style={styles.signupContainer}>
      <MaterialCommunityIcons name="alien-outline" size={50} color="black" />
      <TextInput
        style={styles.input}
        value={username}
        placeholder="Username"
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <View style={styles.buttonContainer}>
        <Button title="Create Account" onPress={handleSignup} />
        <Button title="Cancel" onPress={handleCancel} />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signupContainer: {
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
