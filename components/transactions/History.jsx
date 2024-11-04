import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const paymentIcon = (
  <MaterialCommunityIcons name="cash-plus" size={28} color="#fafaf9" />
);
const shoppingIcon = (
  <MaterialCommunityIcons name="cart-outline" size={28} color="#fafaf9" />
);
const spotifyIcon = (
  <MaterialCommunityIcons name="spotify" size={28} color="#fafaf9" />
);

const categories = [
  { name: "payment", color: "#57534e", icon: paymentIcon },
  { name: "shopping", color: "#8b5cf6", icon: shoppingIcon },
  { name: "spotify", color: "#16a34aeb", icon: spotifyIcon },
];
const tabs = [
    { label: "Day", value: "Day" },
    { label: "Week", value: "Week" },
    { label: "Month", value: "Month" },
    { label: "Year", value: "Year" },
  ];
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

  const renderHistoryItem = ({
    title,
    amount,
    isSpent,
    categoryName,
    date,
    desc,
  }) => {
    const category = categories.find((x) => x.name == categoryName);
    const icon = category?.icon;
    const color = category?.color || "#57534e";
    return (
      <TouchableOpacity className="flex-row items-center h-20 border-b border-b-stone-500/50">
        <View
          style={{ backgroundColor: color}}
          className={`rounded-full w-14 h-14 justify-center items-center`}
        >
          {icon}
        </View>
        <View className="flex-col flex-1 ml-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-ellipsis text-white font-bold tracking-wide text-lg">
              {title}
            </Text>
            <Text
              className={` ${
                !isSpent ? "text-green-400" : "text-stone-500"
              } font-bold text-xl tracking-widest`}
            >
              {!isSpent && "+"}${amount}
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-ellipsis text-stone-500 text-lg">{desc}</Text>
            <Text className="text-stone-500">
              {new Date(date).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderFakeTransactions = () => {
    return (
      <View>
        {fakeTransactions.map((transaction) => renderHistoryItem(transaction))}
      </View>
    );
  };

  return (
    <View className="flex-1 pt-3 ">
      {/* history tabs */}
      <View className="mx-5 p-1 rounded-xl flex-row justify-around  bg-stone-900">
        {tabs.map(renderTabItem)}
      </View>

      {/* transaction history */}
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
