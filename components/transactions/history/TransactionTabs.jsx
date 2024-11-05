import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const tabs = [
  { label: "Day", value: "Day" },
  { label: "Week", value: "Week" },
  { label: "Month", value: "Month" },
  { label: "Year", value: "Year" },
];

const TransactionTabs = ({ selectedTab ,setSelectedTab}) => {

  const renderTabItem = ({ label, value }) => {
    const isSelected = selectedTab === value;
    return (
      <TouchableOpacity
        key={value}
        className={`rounded-lg px-7 py-1 ${isSelected ? "bg-stone-700" : ""}`}
        onPress={() => setSelectedTab(value)}
      >
        <Text className="text-white font-bold text-lg">{label}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View className="mx-5 p-1 rounded-xl flex-row justify-around  bg-stone-900">
      {tabs.map(renderTabItem)}
    </View>
  );
};

export default TransactionTabs;

const styles = StyleSheet.create({});
