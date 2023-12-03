import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import BottomNav from "./components/Navs/BottomNav";

// Navigation ---------------------------------------------------------------
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
import { NavigationContainer } from "@react-navigation/native";
// npm install @react-navigation/native-stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reveal from "./screens/Reveal";
import AuthProvider, { AuthContext } from "./store/authContext";
import Loading from "./components/Loading";
// Navigation ---------------------------------------------------------------

const Stack = createNativeStackNavigator();

const NonAuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileStack"
        component={BottomNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeStack"
        component={BottomNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reveal"
        component={Reveal}
        options={{
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};

const NavigationComponent = () => {
  const { isAuthenticated, storageLoginLoad } = React.useContext(AuthContext);

  if (storageLoginLoad) {
    <Loading message="" />;
  } else {
    return (
      <NavigationContainer>
        {!isAuthenticated && <NonAuthStack />}
        {isAuthenticated && <AuthStack />}
      </NavigationContainer>
    );
  }
};

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <NavigationComponent />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
