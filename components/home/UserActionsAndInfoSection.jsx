import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QuickActions from "./sectionContents/QuickActions";
import Tips from "./sectionContents/Tips";
import Services from "./sectionContents/Services";

const UserActionsAndInfoSection = () => {
  return (
    <View className="my-3 mx-5 flex-row items-center justify-between">
      <QuickActions />
      <Tips />
      <View className="px-2"></View>
      <Services />
    </View>
  );
};

export default UserActionsAndInfoSection;

const styles = StyleSheet.create({});
