import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInRight,
  FadeOut,
} from "react-native-reanimated";

const ExercicesList = ({ data }) => {
  const router = useRouter();

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => {
          //   console.log(`Image URL for item ${index}:`, item.gifUrl); // Log the image URL
          return <ExerciceCard index={index} router={router} item={item} />;
        }}
      />
    </View>
  );
};

export default ExercicesList;

const ExerciceCard = ({ item, router, index }) => {
  // console.log('the uri for GIFYimage is: => ',item.gifUrl);
  const routers = useRouter();
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        onPress={() =>
          routers.push({ pathname: "exerciceDetails", params: item })
        }
        className="flex py-3 space-y-2"
      >
        <View
          style={{ borderRadius: 25 }}
          className="bg-neutral-200 shadow rounded-[25px]"
        >
          <Image
            source={{ uri: item.gifUrl }}
            contentFit="cover"
            style={{ width: wp(44), height: wp(52), borderRadius: 25 }}
            className="rounded-[25px]"
          />
        </View>
        <Text
          style={{ fontSize: hp(1.8) }}
          className="text-neutral-700 font-semibold ml-1 tracking-wide text-center"
        >
          {item?.name?.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
