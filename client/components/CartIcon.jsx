import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";

import { useNavigation } from "@react-navigation/native";

import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../slices/basketSlice";

const CartIcon = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectBasketItems);
  const cartTotal = useSelector(selectBasketTotal);

  if (!cartItems.length) {
    return;
  }

  return (
    <View className="absolute bottom-5 w-full z-50 ">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{
          backgroundColor: themeColors.bgColor(1),
          elevation: 25,
          shadowColor: themeColors.bgColor(1),
          shadowRadius: 10,
        }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg "
      >
        <View className="p-2 px-4 rounded-full bg-white/30">
          <Text className="font-extrabold text-white text-lg">
            {cartItems.length}
          </Text>
        </View>
        <Text className="flex-1 text-center font-extrabold  text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
