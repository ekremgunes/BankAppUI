import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/common/Header";
import { ROUTES } from "../../constants/Routes";

const Settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-black py-3">
      <Header
        leftTitle={"Home"}
        navigateTo={ROUTES.TABS.Home}
        rightIcon={""}
        rightTitle={""}
        rightAction={null}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1"
      >


        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
