import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/transactions/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import History from "../../components/transactions/History";
import DonutChartContainer from "../../components/transactions/DonutCharts";

const Transactions = () => {
  return (
    <SafeAreaView className="flex-1 bg-black py-3">
      <Header />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1"
      >
        <DonutChartContainer />
        <History />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transactions;

const styles = StyleSheet.create({});
