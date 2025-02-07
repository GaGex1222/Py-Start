import { MotiTextConfigured, MotiViewConfigured } from "@/components/MotiElementsConfigured";
import React, { useEffect, useState } from "react";
import { Button, Text, View, Image, TextInput } from "react-native";
import icons from "@/constants/icons";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import InputField from "@/components/InputField";
export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password ,setPassword] = useState('');
    const [email, setEmail] = useState('');

  return (
    <>
      <MotiViewConfigured animationDelay={0} className="flex justify-center items-center flex-col">
        <Image source={icons.logoWithText} className="w-80 h-80"/>
        <MotiViewConfigured animationDelay={200}>
            <InputField label="Username" onTextChange={setUsername} animationDelay={350}/>

            <InputField label="Email" onTextChange={setEmail} animationDelay={500}/>

            <InputField label="Password" onTextChange={setPassword} isPassword={true} animationDelay={650}/>
        </MotiViewConfigured>

        <MotiViewConfigured animationDelay={750} className="flex flex-row">
          <MotiTextConfigured animationDelay={850} className="text-sm mt-2 text-primary font-pbold">Already have an account?  </MotiTextConfigured>
          <MotiTextConfigured animationDelay={900} className="text-sm mt-2 underline-offset-3 underline text-secondary font-pbold"><Link href={'/login'}>Log in</Link></MotiTextConfigured>
        </MotiViewConfigured>

        <MotiViewConfigured animationDelay={1000}>
          <CustomButton buttonStyles="mt-20 rounded-full w-80"  text="Sign in"/>
        </MotiViewConfigured>
      </MotiViewConfigured>
    </>
  );
}
