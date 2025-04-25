import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SignupProps } from "../types";
import { AuthContext } from "../store/authContext";
import Loading from "../components/Loading";
import AvatarComp from "../components/AvatarComp";

const Signup: React.FC<SignupProps> = ({ navigation }) => {
  const { createUser } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [avatar, setAvatar] = React.useState<string>("black");

  const [loading, setLoading] = React.useState<boolean>(false);

  const avatarColors = [
    "black",
    "white",
    "lime",
    "red",
    "skyblue",
    "#946ff2",
    "yellow",
    "#ff780a",
    "#ff70e0",
  ];

  async function handleSignup() {
    setLoading(true);
    if (email !== "" && password !== "" && avatar !== "") {
      try {
        await createUser(email, password, username, avatar);
        setLoading(false);
      } catch (err) {
        // LOOK INTO THIS
        // check how to see what went wrong to inform user
        Alert.alert("Invalid Attempt");
        setLoading(false);
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

  function handleChooseAvatar(color: string) {
    setAvatar(color);
    console.log(color);
  }

  if (loading) return <Loading message="Creating User..." />;

  return (
    <View style={styles.signupContainer}>
      <MaterialCommunityIcons name="alien-outline" size={50} color={avatar} />
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
      <TextInput
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        placeholder="Confirm Password"
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
      />
      <View>
        <Text style={styles.avatarText}>Choose an Avatar</Text>
        <View style={styles.avatarContainer}>
          {avatarColors.map((color) => (
            <AvatarComp
              key={color}
              color={color}
              avatar={avatar}
              handleChooseAvatar={handleChooseAvatar}
            />
          ))}
        </View>
      </View>

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
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 12,
  },
  avatarText: {
    fontWeight: "600",
    textAlign: "center",
    padding: 8,
  },
});
