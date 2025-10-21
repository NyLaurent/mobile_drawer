import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
// Removed unused color scheme hook
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#111111",
        tabBarInactiveTintColor: "#8A8F96",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E6E8EB",
          paddingBottom: Math.max(insets.bottom, 8),
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontFamily: "Montserrat-SemiBold",
          fontSize: 12,
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={26} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={26} name="gearshape.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: "Help",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={26}
              name="questionmark.circle.fill"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
