import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import amazon_icon from "../../../assets/images/amazon_icon.png";
import spotify_icon from "../../../assets/images/spotify_icon.png";
import tesla_icon from "../../../assets/images/tesla_icon.png";
import ikas_icon from "../../../assets/images/ikas_icon.jpg";
import Animated, { FadeInDown } from "react-native-reanimated";

const Cashbacks = () => {
  const companies = [
    { id: 1, name: "İkas", logo: ikas_icon },
    { id: 2, name: "Tesla", logo: tesla_icon },
    { id: 3, name: "Amazon", logo: amazon_icon },
    { id: 4, name: "Spotify", logo: spotify_icon },
  ];

  const renderCashBacks = () => {
    return companies.map((company, index) => (
      <Image
        key={company.id}
        source={company.logo}
        style={{
          objectFit:"cover",
          borderRadius: 40,
          width: 40,
          height: 40,
          marginLeft: index - 1 * 10, // index'e göre marginLeft değeri ayarlanıyor
        }}
      />
    ));
  };

  return (
    <Animated.View
    entering={FadeInDown.duration(600).delay(250).springify().damping(10)}
      className="bg-stone-900 rounded-3xl flex-1 p-4 h-32 flex-col justify-between"
    >
      <View>
        <Text className="text-white tracking-wide font-bold text-xl">
          Cashbacks
        </Text>
      </View>

      <View className="flex-row justify-start items-center ml-2">
        {renderCashBacks()}
      </View>
    </Animated.View>
  );
};

export default Cashbacks;

const styles = StyleSheet.create({});
