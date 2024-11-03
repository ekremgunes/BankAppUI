import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Avatar = ({ size = 45, src }) => {
  const defaultSrc = require("../../assets/images/avatardefault.jpg");
  return (
    <View className="">
      <Image
        className="rounded-full"
        style={{ width: size, height: size , objectFit:"cover" }}
        source={src ? { uri: src } : defaultSrc} 
      ></Image>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
