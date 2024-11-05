import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";



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

const TransactionItem = ({ transaction }) => {
  if (!transaction) return null;

  const { title, amount, isSpent,id, categoryName, date, desc } = transaction;
  const category = categories.find((x) => x.name == categoryName);
  const icon = category?.icon;
  const color = category?.color || "#57534e";
  return (
    <TouchableOpacity key={id} className="flex-row items-center h-20 border-b border-b-stone-500/50">
      <View
        style={{ backgroundColor: color }}
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

export default TransactionItem;

const styles = StyleSheet.create({});
