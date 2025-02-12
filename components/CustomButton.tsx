import { Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";
import { CustomButtonProps } from "@/types/element-types";
import { MotiViewConfigured } from "./MotiElementsConfigured";
import LoadingSpinner from "./icons/LoadingSpinner";

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonStyles,
  text,
  handlePress,
  isLoading,
  Icon,
}) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={handlePress}
      style={{minHeight: 45}}
      className={`px-6 py-3 bg-secondary rounded-xl shadow-md ${
        isLoading && "opacity-50"
      } ${buttonStyles}`}
    >
      <View className="flex-row items-center justify-center">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Text className="text-primary text-lg font-pbold">{text}</Text>
        )}
        {Icon && !isLoading && <Icon />}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
