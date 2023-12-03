import React from "react";
import Profile from "../../screens/Profile";
import Settings from "../../screens/Settings";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ProfileDrawer"
        options={{
          title: "Profile",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="alien-outline"
              size={24}
              color={focused ? "#5c1cff" : "black"}
            />
          ),
        }}
        component={Profile}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerIcon: ({ focused }) => (
            <AntDesign
              name="setting"
              color={focused ? "#5c1cff" : "black"}
              size={24}
            />
          ),
        }}
        component={Settings}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
