import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/home/Header";
import Card from "../../components/home/Card";
import SpendingAndRefundsSection from "../../components/home/SpendingAndRefundsSection";
import UserActionsAndInfoSection from "../../components/home/UserActionsAndInfoSection";
import ReferralAndRewardsSection from "../../components/home/ReferralAndRewardsSection";

const Home = () => {
  return (
    <View className="flex-1 bg-black py-3">
      <SafeAreaView />
      <Header />
      <Card />
      <SpendingAndRefundsSection />
      <UserActionsAndInfoSection />
      <ReferralAndRewardsSection />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
