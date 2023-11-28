import { Button, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Alerts from "../screens/Alerts";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Nav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#5c1cff",
        tabBarInactiveTintColor: "#000000",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="earth"
              size={24}
              color={focused ? "#5c1cff" : "black"}
            />
          ),
          headerShown: false,
          headerTitleAlign: "left",
        }}
        component={Home}
      />
      <Tab.Screen
        name="Alerts"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="ufo-outline"
              size={24}
              color={focused ? "#5c1cff" : "black"}
            />
          ),
        }}
        component={Alerts}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="alien-outline"
              size={24}
              color={focused ? "#5c1cff" : "black"}
            />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Nav;

const styles = StyleSheet.create({});
