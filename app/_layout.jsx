import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../components/TabBar";
import { Slot } from "expo-router";

import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
export { Slot };

const _layout = () => {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="Home" options={{ title: "Home" }}></Tabs.Screen>
      <Tabs.Screen
        name="Settings"
        options={{ title: "Settings" }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
