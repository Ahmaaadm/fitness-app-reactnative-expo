import React from "react";
import { View, Text, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ImageSliders() {
  return (
    <View style={{ paddingHorizontal: wp(5), paddingTop: hp(2) }}>
      <Carousel
        loop
        width={wp(90)} 
        height={hp(30)} 
        autoPlay={true}
        data={sliderImages}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              overflow: "hidden",
            }}
          >
            <Image
              source={item}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 15,
                resizeMode: "cover",
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
