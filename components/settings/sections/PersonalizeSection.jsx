import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import SectionItem from "../SectionItem";
import { ROUTES } from "../../../constants/Routes";
import Section from "../Section";

const PersonalizeSection = () => {
  const navigation = useNavigation();

  return (
    <Section title={"Personalize"}>
      <SectionItem
        props={{
          icon: "language",
          title: "Language",
          action: ()=>navigation.navigate(ROUTES.TABS.Home),
        }}
      ></SectionItem>
      <SectionItem
        props={{
          icon: "qr-code",
          title: "Share QR",
          action: ()=>navigation.navigate(ROUTES.TABS.Home),
        }}
      ></SectionItem>
      <SectionItem
        props={{
          icon: "dark-mode",
          title: "Dark Mode",
          action: ()=>navigation.navigate(ROUTES.TABS.Home),
        }}
      ></SectionItem>
    </Section>
  );
};

export default PersonalizeSection;

const styles = StyleSheet.create({});
