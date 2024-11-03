import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { getCardImage } from "../../utils/getCardProviderImage";

const Card = () => {
  const cardInfo = {
    currency: "$",
    accountNo: "** 4242",
    ibanNo: "**** 9458",
    balance: "16,612.55",
    bankName: "Ziraat Bank",
    cardBrand: "Master",
  };

  const walletAddPress = () => {
    console.log("clicked card add");
    return;
  };

  return (
    <View style={{ height: 200 }} className="bg-red-50  my-3 mx-5 rounded-3xl">
      <Image
        style={{ height: 200, width: "100%" }}
        resizeMode="cover"
        className="absolute object-cover  rounded-3xl"
        source={require("../../assets/images/cardBg.png")}
      ></Image>
      <View className="flex-1 justify-between rounded-2xl py-3 px-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-lg font-semibold tracking-wide">
            Wallet
          </Text>
          <Text
            onPress={walletAddPress}
            className="text-white text-4xl tracking-widest"
          >
            +
          </Text>
        </View>
        <View className="justify-end ">
          <View className="flex-row justify-between">
            <Text className="text-white text-4xl font-semibold tracking-wide">
              {cardInfo.currency}
              {cardInfo.balance}
            </Text>

            {getCardImage(cardInfo.cardBrand) && (
              <Image
                source={getCardImage(cardInfo.cardBrand)}
                style={{ height: 40, width: 40, objectFit: "cover" }}
              />
            )}
          </View>
          <View className="flex-row justify-between">
            <Text className="text-stone-400  tracking-widest">
              Account {cardInfo.accountNo}
            </Text>
            <Text className="text-stone-400  tracking-widest">
              {cardInfo.ibanNo}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
