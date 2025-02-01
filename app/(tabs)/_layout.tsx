
import React from 'react';
import { Tabs } from 'expo-router';
import icons from '@/constants/icons';
import "@/global.css"
import TabIcon from '@/components/TabIcon';


const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#282C34',
          borderTopWidth: 1,
          borderTopColor: '#444', 
        },
        tabBarActiveTintColor: "#FFD43B",
        tabBarInactiveTintColor: "#CDCDE0",
      }}
    >
        <Tabs.Screen
            name="home"
            options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons.home} color={color} focused={focused} name="Home" />
            ),
            }}
        />
        <Tabs.Screen
            name="courses"
            options={{
            title: 'Courses',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons.courses} color={color} focused={focused} name="Courses" />
            ),
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons.profile} color={color} focused={focused} name="Profile" />
            ),
            }}
        />
    </Tabs>
  );
};

export default TabsLayout;
