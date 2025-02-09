import {
  MotiTextConfigured,
  MotiViewConfigured,
} from "@/components/MotiElementsConfigured";
import React, { useEffect, useState } from "react";
import { Text, Image } from "react-native";
import icons from "@/constants/icons";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import InputField from "@/components/InputField";
import { validateSignUpForm } from "@/utils/validationFunctionsl";
import * as SecureStore from "expo-secure-store"
import { useRouter } from "expo-router";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (formError.length > 0) {
      setTimeout(() => {
        setFormError("");
      }, 5000);
    }
  }, [formError]);

  const handleFormSubmit = async () => {
    setButtonLoading(true);
    const errorMessage = validateSignUpForm(email, password, username);
    
    if (errorMessage) {
      setFormError(errorMessage);
      setButtonLoading(false);
      return;
    }

    try {
      const postData = {
        email: email,
        username: username,
        password: password,
      };

      const res = await fetch(
        `http://${process.env.EXPO_PUBLIC_PUBLIC_IP}:3000/add-user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      const data = await res.json();
      console.log(data);
      if (data.errorMessage) {
        setFormError(data.errorMessage);
        setButtonLoading(false);
        return;
      }
      
      if (!data.error) {
        console.log("Success");
        await SecureStore.setItemAsync('userToken', JSON.stringify(data.token))
        await SecureStore.setItemAsync('userData', JSON.stringify(data.userData))
        router.push('/(tabs)/home')
      }

    } catch (exp) {
      console.log(exp);
    }

    setButtonLoading(false);
  };
  return (
    <>
      <MotiViewConfigured
        animationDelay={0}
        className="flex justify-center items-center flex-col"
      >
        <Image source={icons.logoWithText} className="w-80 h-80" />
        <MotiViewConfigured animationDelay={200}>
          <InputField
            label="Username"
            onTextChange={setUsername}
            animationDelay={350}
          />

          <InputField
            label="Email"
            onTextChange={setEmail}
            animationDelay={500}
          />

          <InputField
            label="Password"
            onTextChange={setPassword}
            isPassword={true}
            animationDelay={650}
          />
        </MotiViewConfigured>

        <MotiViewConfigured animationDelay={750} className="flex flex-row">
          <MotiTextConfigured
            animationDelay={850}
            className="text-sm mt-2 text-primary font-pbold"
          >
            Already have an account?{" "}
          </MotiTextConfigured>
          <MotiTextConfigured
            animationDelay={900}
            className="text-sm mt-2 underline-offset-3 underline text-secondary font-pbold"
          >
            <Link href={"/login"}>Log in</Link>
          </MotiTextConfigured>
        </MotiViewConfigured>

        <MotiViewConfigured
          animationDelay={1000}
          className="flex justify-center items-center mt-20"
        >
          {formError && (
            <Text className="text-lg text-error font-pbold">{formError}</Text>
          )}
          <CustomButton
            handlePress={handleFormSubmit}
            isLoading={buttonLoading}
            buttonStyles="rounded-full w-80"
            text="Sign Up"
          />
        </MotiViewConfigured>
      </MotiViewConfigured>
    </>
  );
}
