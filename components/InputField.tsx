import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  MotiTextConfigured,
  MotiViewConfigured,
} from "./MotiElementsConfigured";
import { InputFieldProps } from "@/types/element-types";
const InputField: React.FC<InputFieldProps> = ({
  animationDelay,
  onTextChange,
  isPassword,
  label,
}) => {
  return (
    <MotiViewConfigured animationDelay={animationDelay}>
      <MotiTextConfigured
        animationDelay={200}
        className="text-xl mt-10 mb-1 text-primary font-pbold"
      >
        {label}
      </MotiTextConfigured>
      <TextInput
        className="border-2 rounded-lg w-80 border-secondary text-black font-pmedium"
        onChangeText={onTextChange}
        secureTextEntry={isPassword}
      />
    </MotiViewConfigured>
  );
};

export default InputField;
