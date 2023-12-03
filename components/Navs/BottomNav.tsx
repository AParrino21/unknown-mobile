import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Alerts from "../../screens/Alerts";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import DrawerNav from "./DrawerNav";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
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
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="alien-outline"
              size={24}
              color={focused ? "#5c1cff" : "black"}
            />
          ),
        }}
        component={DrawerNav}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
