import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImageSliders from "../components/ImageSliders";
import BodyParts from "../components/BodyParts";
import { useRouter } from "expo-router";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeOut,
} from "react-native-reanimated";

const home = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white flex " edges={[]}>
      <StatusBar style="auto" />
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Animated.Text
            entering={FadeInLeft.duration(400).delay(100).springify()}
            style={{ fontSize: hp(5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Animated.Text>
          <Animated.Text
            entering={FadeInRight.duration(400)
              .delay(200)
              .springify()
              .damping(3)}
            style={{ fontSize: hp(5) }}
            className="font-bold tracking-wider text-rose-700"
          >
            WORKOUTS
          </Animated.Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full"
          />
          <View
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300 mt-1"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Ionicons name="notifications" size={30} color="gray" />
          </View>
        </View>
      </View>
      <View>
        <ImageSliders />
      </View>

      <View className="flex-1">
        <BodyParts />
      </View>
    </View>
  );
};

export default home;
