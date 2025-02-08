import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const LoadingSpinner = () => {
  return (
    <View className="flex justify-center items-center">
      <View className='animate-spin'>
        <Svg width={30} height={30} viewBox="0 0 50 50">
          <Circle
            cx="25"
            cy="25"
            r="20"
            strokeWidth="4"
            fill="none"
            stroke="#4584b6"
            strokeDasharray="100"
            strokeDashoffset="50"
            strokeLinecap="round"
          />
        </Svg>
      </View>
    </View>
  );
};

export default LoadingSpinner;
