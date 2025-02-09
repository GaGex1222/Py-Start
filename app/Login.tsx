import {
  MotiTextConfigured,
  MotiViewConfigured,
} from "@/components/MotiElementsConfigured";
import React, { useEffect, useState } from "react";
import { Button, Text, View, Image, TextInput } from "react-native";
import icons from "@/constants/icons";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { Link } from "expo-router";
import { validateUserCredentials } from "@/utils/authFunctions";
export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const handleFormSubmit = async () => {};
  return (
    <>
      <MotiViewConfigured
        animationDelay={0}
        className="flex justify-center items-center flex-col"
      >
        <Image source={icons.logoWithText} className="w-80 h-80" />
        <MotiViewConfigured animationDelay={200}>
          <InputField
            label="Email"
            onTextChange={setEmail}
            animationDelay={200}
          />

          <InputField
            label="Password"
            onTextChange={setPassword}
            isPassword={true}
            animationDelay={400}
          />
        </MotiViewConfigured>
        <MotiViewConfigured animationDelay={500} className="flex flex-row">
          <MotiTextConfigured
            animationDelay={600}
            className="text-sm mt-2 text-primary font-pbold"
          >
            Dont have an account?{" "}
          </MotiTextConfigured>
          <MotiTextConfigured
            animationDelay={700}
            className="text-sm mt-2 underline-offset-3 underline text-secondary font-pbold"
          >
            <Link href={"/signUp"}>Sign Up</Link>
          </MotiTextConfigured>
        </MotiViewConfigured>
        <MotiViewConfigured animationDelay={800}>
          <CustomButton
            handlePress={() => console.log("G")}
            buttonStyles="mt-20 rounded-full w-80"
            text="Sign in"
          />
        </MotiViewConfigured>
      </MotiViewConfigured>
    </>
  );
}
