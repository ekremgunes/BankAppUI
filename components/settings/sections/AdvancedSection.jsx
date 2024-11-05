import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import SectionItem from "../SectionItem";
import { ROUTES } from "../../../constants/Routes";
import Section from "../Section";

const AdvancedSection = () => {
  const navigation = useNavigation();

  return (
    <Section title={"Advanced"}>
      <SectionItem
        props={{
          icon: "backup",
          title: "Backup & Restore",
          action: navigation.navigate(ROUTES.TABS.Home),
        }}
      ></SectionItem>
      <SectionItem
        props={{
          icon: "qr-code",
          title: "Share QR",
          action: navigation.navigate(ROUTES.TABS.Home),
        }}
      ></SectionItem>
      <SectionItem
        props={{
          icon: "notifications",
          title: "Notifications",
          action: navigation.navigate(ROUTES.TABS.Home),
        }}
      ></SectionItem>
      <SectionItem
        props={{
          icon: "help-outline",
          title: "Help",
          action: navigation.navigate(ROUTES.TABS.Home),
        }}
      ></SectionItem>
    </Section>
  );
};

export default AdvancedSection;

const styles = StyleSheet.create({});
