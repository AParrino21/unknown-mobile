import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

// Navigation ---------------------------------------------------------------
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
import { NavigationContainer } from "@react-navigation/native";
// npm install @react-navigation/native-stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Navigation ---------------------------------------------------------------

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
