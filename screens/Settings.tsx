import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AuthContext } from "../store/authContext";

const Settings = () => {
  const { logout } = React.useContext(AuthContext);

  function deleteAccount() {
    console.log("deleted");
  }

  return (
    <View>
      <Pressable style={styles.settingsList} onPress={logout}>
        <View>
          <Text style={styles.btnText}>Logout</Text>
        </View>
      </Pressable>
      <Pressable style={styles.settingsList} onPress={deleteAccount}>
        <View>
          <Text style={styles.btnText}>Delete Account</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  settingsList: {
    padding: 10,
    borderBottomWidth: 1,
  },
  btnText: {
    fontWeight: "500",
  },
});
