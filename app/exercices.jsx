import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercicesByBodyPart } from "../api/exercicesDB";
import { bodyParts, demoExercices } from "../constants";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Fontisto from "@expo/vector-icons/Fontisto";
import ExercicesList from "../components/ExercicesList";
import { ScrollView } from "react-native-virtualized-view";

const exercices = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [exercices, setExercices] = useState(demoExercices);

  useEffect(() => {
    console.log("----------------------------------------------------------");
    //  if(item) getExercices(item.name);
  }, [item]);

  const getExercices = async (bodypart) => {
    let data = await fetchExercicesByBodyPart(bodypart);
    // console.log('data gotted => ',data);
    // setExercices(data)
    const router = useRouter();
  };
  // console.log('params=>>>>>',item);
  return (
    <ScrollView className="bg-gray-100">
      <StatusBar style="dark" />
      <Image
        source={item.image}
        style={{
          width: wp(100),
          height: hp(45),
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
        className="rouded-b-[40px]"
      />

      <TouchableOpacity
        className="bg-rose-500 mx-4 my-2 flex pr-1 justify-center items-center absolute"
        style={{ width: hp(6), height: hp(6), borderRadius: 30 }}
        onPress={() => router.back()}
      >
        <Fontisto name="caret-left" size={24} color="white" />
      </TouchableOpacity>

      <View className="mx-4 space-y-3 my-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700"
        >
          {item.name} exercices
        </Text>
        <View className="mb-10">
          <ExercicesList data={exercices} />
        </View>
      </View>
    </ScrollView>
  );
};

export default exercices;
