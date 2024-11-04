import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/transactions/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const Transactions = () => {
  return (
    <View className="flex-1 bg-black py-3">
      <SafeAreaView />
      <Header />
      <ScrollView></ScrollView>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({});
