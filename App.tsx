import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Platform, StyleSheet, StatusBar } from "react-native";
import Home from "./components/Home";
import Settings from "./components/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Routes } from "./router";
import News from "./components/News";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator<Routes>();
const Drawer = createDrawerNavigator<Routes>();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="News" component={News} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      )}

      {Platform.OS === "android" && (
        <Drawer.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="News" component={News} />
          <Tab.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  boxText: {
    color: "darkslategrey",
    fontWeight: "bold",
  },
});
