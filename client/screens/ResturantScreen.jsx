import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setResturant } from "../slices/resturantSlice";

import { StatusBar } from "expo-status-bar";

import { useNavigation, useRoute } from "@react-navigation/native";

import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import { urlFor } from "../sanity";

const ResturantScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (item && item._id) {
      dispatch(setResturant({ ...item }));
    }
  }, [dispatch, item]);

  return (
    <View>
      <StatusBar style="light" />
      <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-72"
            source={{ uri: urlFor(item.image).url() }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 p-2 left-4 bg-gray-50/50 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={5} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View className="bg-white -mt-12 pt-6 rounded-t-[40px]">
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/fullStar.png")}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-green-700 ">{item.stars}</Text>
                  <Text className="text-gray-700">
                    ({item.reviews} review) ·
                    <Text className="font-semibold"> {item?.type?.name}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-700 text-xs">
                  Nearby·{" "}
                  {item.address.length > 20
                    ? item.address.slice(0, 20) + "..."
                    : item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* Dishes */}
          {item.dishes.map((dish, index) => (
            <DishRow key={index} item={{ ...dish }} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ResturantScreen;
