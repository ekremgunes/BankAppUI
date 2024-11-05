import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import TransactionItem from "./TransactionItem";
import TransactionTabs from "./TransactionTabs";

const fakeTransactions = [
  {
    title: "Ekrem Güneş",
    amount: 128,
    isSpent: false,
    categoryName: "payment",
    date: new Date(),
    desc: "Thanks for dinner",
  },
  {
    title: "Shopping",
    amount: 45,
    isSpent: true,
    categoryName: "shopping",
    date: new Date(),
    desc: "Grocery store",
  },
  {
    title: "Spotify Subscription",
    amount: 9.99,
    isSpent: true,
    categoryName: "spotify",
    date: new Date(),
    desc: "Monthly subscription",
  },
  {
    title: "Payment Received",
    amount: 200,
    isSpent: false,
    categoryName: "payment",
    date: new Date(),
    desc: "Freelance work",
  },
];

const History = () => {
  const [selectedTab, setSelectedTab] = useState("Month");

  const renderFakeTransactions = () => {
    return (
      <View>
        {fakeTransactions.map((transaction) => (
          <TransactionItem transaction={transaction} />
        ))}
      </View>
    );
  };

  return (
    <View className="flex-1 pt-3 ">
      <TransactionTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      
      <View
        style={{ borderTopLeftRadius: 35, borderTopRightRadius: 35 }}
        className=" mt-9 px-5 py-5  flex-1 pb-20"
      >
        <View className="self-center h-2 bg-stone-700 rounded-xl absolute top-2 w-12"></View>
        {/* header */}
        <View>
          <Text className="text-lg font-semibold text-white mt-1">
            Transactions
          </Text>
          <Text className="text-sm mt-4 font-semibold tracking-wide text-white/70">
            {selectedTab.toLocaleUpperCase()}
          </Text>
        </View>

        {/* body */}
        {renderFakeTransactions()}
      </View>
    </View>
  );
};

export default History;
