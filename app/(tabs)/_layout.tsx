import React from "react";
import { Tabs } from "expo-router";
import { View, Image, Text, KeyboardAvoidingView } from "react-native";
import {images} from "@/constants/icons";
import { useFonts } from "@expo-google-fonts/poppins";
import { ImageSourcePropType } from "react-native";
import "@/global.css";

const TabIcon = ({
  icon,
  color,
  focused,
  name,
}: {
  icon: ImageSourcePropType;
  color: string;
  focused: boolean;
  name: string;
}) => {
  return (
    <View className="items-center justify-center w-20 mt-3">
      <Image
        source={icon}
        tintColor={color}
        className="w-6 h-6"
        resizeMode="contain"
      />
      <Text
        className={`${focused ? "font-pbold" : "font-pmedium"} text-xs`}
        style={{ color: color }}
        numberOfLines={1}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            backgroundColor: "#282C34",
            borderTopWidth: 1,
            borderTopColor: "#444",
          },
          tabBarActiveTintColor: "#FFD43B",
          tabBarInactiveTintColor: "#CDCDE0",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.home}
                color={color}
                focused={focused}
                name="Home"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="courses"
          options={{
            title: "Courses",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.courses}
                color={color}
                focused={focused}
                name="Courses"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.profile}
                color={color}
                focused={focused}
                name="Profile"
              />
            ),
          }}
        />
      </Tabs>
    </KeyboardAvoidingView>
  );
};

export default TabsLayout;
