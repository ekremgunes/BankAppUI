import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/common/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import History from "../../components/transactions/history/History";
import DonutChartContainer from "../../components/transactions/chart/DonutCharts";
import { ROUTES } from "../../constants/Routes";

const Transactions = () => {
  const headerRightTitle = new Date().toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  return (
    <SafeAreaView className="flex-1 bg-black py-3">
      <Header
        leftTitle={"Home"}
        navigateTo={ROUTES.TABS.Home}
        rightIcon={"calendar"}
        rightTitle={headerRightTitle}
        rightAction={null}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1">
        <DonutChartContainer />
        <History />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transactions;

const styles = StyleSheet.create({});
