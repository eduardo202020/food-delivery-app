import { View, Image } from "react-native";
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      // move to delivery sceen
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require("../assets/images/delivery.gif")}
        className="w-80 h-80"
      />
    </View>
  );
};

export default PreparingOrderScreen;
