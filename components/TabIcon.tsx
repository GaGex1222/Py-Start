import { ImageSourcePropType } from "react-native";
import { View, Text, Image } from "react-native";

const TabIcon = ({ icon, color, focused, name }: { icon: ImageSourcePropType; color: string; focused: boolean; name: string }) => {
    return (
      <View className="items-center justify-center w-20 mt-3"> 
        <Image source={icon} tintColor={color} className='w-6 h-6' resizeMode='contain' />
        <Text
          className={`${focused ? 'font-poppinsBold' : 'font-poppinsRegular'} text-xs`}
          style={{ color: color }}
          numberOfLines={1}
        >
          {name}
        </Text>
      </View>
    );
};

export default TabIcon;