import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInRight,
  FadeOut,
} from "react-native-reanimated";

const BodyParts = () => {
  return (
    <SafeAreaView className="mx-4  " style={{ marginTop: hp(31) }}>
      <Text
        style={{ fontSize: hp(4) }}
        className="font-semibold text-neutral-700"
      >
        Exercice
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <BodyPartsCard index={index} item={item} />
        )}
      />
    </SafeAreaView>
  );
};

export default BodyParts;

const BodyPartsCard = ({ item, index }) => {
  const router = useRouter();
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/exercices", params: item })}
        style={{ width: wp(44), height: wp(52) }}
        className="flex justify-end p-4 mb-8"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: wp(44), height: wp(52) }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            position: "absolute",
            width: wp(44),
            height: hp(20),
            borderRadius: 35,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="bottom-0 rounded-b-[35px] absolute"
        />

        <Text
          style={{ fontSize: hp(2.3) }}
          className="text-white font-semibold text-center tracking-wide"
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
