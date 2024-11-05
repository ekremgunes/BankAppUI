import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AccountSection from "./sections/AccountSection";
import PersonalizeSection from "./sections/PersonalizeSection";
import AdvancedSection from "./sections/AdvancedSection";

const SectionList = () => {
  return (
    <View className="mx-5 pb-3">
      <AccountSection></AccountSection>
      <AdvancedSection></AdvancedSection>
      <PersonalizeSection></PersonalizeSection>
    </View>
  );
};

export default SectionList;

const styles = StyleSheet.create({});
