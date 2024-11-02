import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import { Slot } from "expo-router";

import "../../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import TabBar from "../../components/TabBar";
export { Slot };

const _layout = () => {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
      initialRouteName="index"
    >
      <Tabs.Screen name="index" options={{ title: "index" }}></Tabs.Screen>
      <Tabs.Screen name="Wallet" options={{ title: "Wallet" }}></Tabs.Screen>
      <Tabs.Screen
        name="Statistics"
        options={{ title: "Statistics" }}
      ></Tabs.Screen>
      <Tabs.Screen name="Home" options={{ title: "Home" }}></Tabs.Screen>
      <Tabs.Screen name="Contact" options={{ title: "Contact" }}></Tabs.Screen>
      <Tabs.Screen
        name="Settings"
        options={{ title: "Settings" }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
