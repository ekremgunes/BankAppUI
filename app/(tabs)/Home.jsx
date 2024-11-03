import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/home/Header";
import Cart from "../../components/home/Card";

const Home = () => {
  return (
    <View className="flex-1 bg-black py-3">
      <SafeAreaView></SafeAreaView>
      <Header></Header>
      <Cart></Cart>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
