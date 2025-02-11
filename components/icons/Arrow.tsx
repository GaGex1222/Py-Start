import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export const LeftArrowIcon = () => (
    <Svg width={24} height={24} fill="none">
        <Path d="M19 12H5M12 5l-7 7 7 7" stroke="#4584b6" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export const RightArrowIcon = () => {
    <View className="ml-2">
        <Svg width={24} height={24} fill="none">
            <Path d="M5 12h14M12 5l7 7-7 7" stroke="#4584b6" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    </View>
}