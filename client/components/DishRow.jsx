import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import * as Icon from "react-native-feather";

import { themeColors } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsById,
} from "../slices/basketSlice";
import { urlFor } from "../sanity";

const DishRow = ({ item }) => {
  const dispatch = useDispatch();

  const totalItems = useSelector((state) =>
    selectBasketItemsById(state, item._id)
  );

  const handleIncrease = () => {
    dispatch(addToBasket({ ...item }));
  };

  const handleDecrease = () => {
    dispatch(removeFromBasket({ id: item._id }));
  };

  // console.log({ totalItems });
  // console.log("item_id", item._id);

  return (
    <View
      className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2"
      style={{ shadowColor: themeColors.bgColor(1), shadowRadius: 10 }}
    >
      <Image
        source={{ uri: urlFor(item.image).url() }}
        className="rounded-3xl h-[100] w-[100]"
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              disabled={!totalItems.length}
              onPress={handleDecrease}
              className="p-1 rounded-full "
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke="white"
              />
            </TouchableOpacity>
            <Text className="px-3">{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              className="p-1 rounded-full "
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
