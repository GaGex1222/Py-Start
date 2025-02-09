import { View, Text } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";
import { MotiViewConfigured } from "./MotiElementsConfigured";
import { InfoSectionProps } from "@/types/element-types";
import "@/global.css";
const InfoSection: React.FC<InfoSectionProps> = ({ text, animationDelay }) => {
  return (
    <MotiViewConfigured
      animationDelay={animationDelay}
      className="w-96 bg-secondary flex-row items-center justify-start shadow-xl shadow-black/30 rounded-lg p-4 mt-10 h-20"
    >
      <SvgUri
        uri="https://www.svgrepo.com/show/501130/check-mark.svg"
        width={24}
        height={24}
        style={{ marginRight: 12 }}
        fill="#3776AB"
      />
      <Text className="text-primary font-pbold text-lg flex-shrink">
        {text}
      </Text>
    </MotiViewConfigured>
  );
};
export default InfoSection;
