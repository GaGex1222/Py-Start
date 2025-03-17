import {
  MotiTextConfigured,
  MotiViewConfigured,
} from "@/components/MotiElementsConfigured";
import React, { useEffect, useState } from "react";
import { Button, Text, View, Image, TextInput } from "react-native";
import {images} from "@/constants/icons";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { useRouter } from "expo-router";
import { RightArrowIcon } from "@/components/icons/Arrow";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserData } from "@/utils/asyncStorageFunctions";

export default function login() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    console.log("got to login, nmounted")
  }, [])
  const handleSubmitButton = async () => {
    console.log("LOGIN PResED")
    setLoading(true)
    await createUserData(username)
    setLoading(false)
    router.push('/(tabs)/courses')
  }

  return (
    <>
      <MotiViewConfigured
        animationDelay={0}
        className="flex justify-center items-center flex-col"
      >
        <Image source={images.logoWithText} className="w-80 h-80" />
        <MotiViewConfigured animationDelay={100}>
          <InputField
            label="Username"
            onTextChange={setUsername}
            animationDelay={100}
          />
        </MotiViewConfigured>
        <MotiViewConfigured animationDelay={200}>
          <CustomButton
            isLoading={loading}
            handlePress={handleSubmitButton}
            Icon={RightArrowIcon}
            buttonStyles="mt-5 rounded-full w-80"
            text="Continue"
          />
        </MotiViewConfigured>
      </MotiViewConfigured>
    </>
  );
}
