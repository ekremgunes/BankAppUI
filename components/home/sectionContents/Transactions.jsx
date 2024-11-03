import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

//fake data
const transactions = [
  { id: 1, category: "Food", amount: 450, color: "bg-violet-600" },
  { id: 2, category: "Entertain", amount: 200, color: "bg-red-500" },
  { id: 3, category: "Ticket", amount: 65, color: "bg-blue-400" },
  { id: 4, category: "gROCERY", amount: 200, color: "bg-yellow-500" },
  { id: 5, category: "Spotify", amount: 90, color: "bg-green-400" },
];

const Transactions = () => {
  const totalExpense = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  const renderTransactions = () => {
    return transactions.map((data) => {
      const percent = Number((data.amount / totalExpense) * 100);
      return (
        <View
          style={{
            width: `${percent}%`,
            marginRight: 2,
            borderRadius: 9,
          }}
          key={data.id}
          className={`h-6 ${data.color} `}
        ></View>
      );
    });
  };

  return (
    <TouchableOpacity
      onPress={{}}
      className="bg-stone-900 rounded-3xl flex-1 p-4 h-32 flex-col justify-between"
    >
      <View>
        <Text className="text-white tracking-wide font-bold text-xl">
          Transactions
        </Text>
        <Text className="text-stone-500 tracking-wide">Spent in october</Text>
      </View>

      <View className="flex-row justify-start mr-1">{renderTransactions()}</View>
    </TouchableOpacity>
  );
};

export default Transactions;

const styles = StyleSheet.create({});
