import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Nav from "./components/Nav";

// Navigation ---------------------------------------------------------------
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
import { NavigationContainer } from "@react-navigation/native";
// npm install @react-navigation/native-stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reveal from "./screens/Reveal";
// Navigation ---------------------------------------------------------------

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="HomeStack"
            component={Nav}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen
            name="ProfileStack"
            component={Nav}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Reveal" component={Reveal} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
