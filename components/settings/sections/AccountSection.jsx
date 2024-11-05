import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Section from "../Section";
import SectionItem from "../SectionItem";
import { useNavigation } from "expo-router";
import { ROUTES } from "../../../constants/Routes";

const AccountSection = () => {
  const navigation = useNavigation();

  return (
    <Section title={"Account"}>
      <SectionItem
        props={{
          icon: "manage-accounts",
          title: "Profile & Accounts",
          action: ()=>navigation.navigate(ROUTES.TABS.Home),
        }}
      ></SectionItem>
      <SectionItem
        props={{
          icon: "security",
          title: "Security",
          action: ()=>navigation.navigate(ROUTES.TABS.Home),
        }}
      ></SectionItem>
      <SectionItem
        props={{
          icon: "subscriptions",
          title: "Subscriptions",
          action: ()=>navigation.navigate(ROUTES.TABS.Home),
        }}
      ></SectionItem>
    </Section>
  );
};

export default AccountSection;

const styles = StyleSheet.create({});
