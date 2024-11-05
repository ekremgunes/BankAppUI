import { ScrollView,  StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/common/Header";
import { ROUTES } from "../../constants/Routes";
import SearchInput from "../../components/common/SearchInput";
import SectionList from "../../components/settings/SectionList";

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
      <SearchInput direction="flex-row-reverse"></SearchInput>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1 mt-3"
      >
        <SectionList></SectionList>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
