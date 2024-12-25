import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import "../global.css";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInRight,
  FadeOut,
} from "react-native-reanimated";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const index = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/welcome2.jpg")}
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{
          width: wp(100),
          height: hp(100),
          justifyContent: "flex-end",
          paddingBottom: hp(10),
        }} // Adjusted paddingBottom
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center"
        >
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wide"
          >
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wide"
          >
            For You
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => router.push("home")}
            style={{ width: wp(60), height: hp(6) }}
            className="bg-rose-500 flex flex-row justify-center items-center mx-auto rounded-full border-[2px] border-neutral-200"
          >
            <Animated.View
              entering={FadeInRight.duration(800)
                .delay(800)
                .springify()
                .damping(5)}
            >
              <MaterialIcons
                className="pr-4"
                name="sports-gymnastics"
                size={24}
                color="white"
              />
            </Animated.View>

            <Text
              style={{ fontSize: hp(3) }}
              className="text-white font-bold tracking-wide"
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default index;
