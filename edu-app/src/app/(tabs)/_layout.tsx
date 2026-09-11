import { LinearTabBar } from "@/components/";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router/tabs";
import React, { useState } from "react";
import {
  Appearance,
  Pressable,
  StyleSheet,
} from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const ANIMATION_DURATION = 400;

Appearance.setColorScheme("dark");

enum TabAnimationName {
  Fade = "fade",
  Shift = "shift",
}

export default function TabLayout(): React.ReactNode {
  const animationProgress = useSharedValue(0);
  const overlayOpacity = useSharedValue(0);
  const [pointerEvents, setPointerEvents] = useState<"auto" | "none">("none");

  useDerivedValue(() => {
    const shouldEnable = animationProgress.value > 0.01;
    runOnJS(setPointerEvents)(shouldEnable ? "auto" : "none");
  });

  const openMenu = () => {
    animationProgress.value = withTiming(1, {
      duration: ANIMATION_DURATION,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    overlayOpacity.value = withTiming(1, { duration: 300 });
  };

  const closeMenu = () => {
    animationProgress.value = withTiming(0, {
      duration: ANIMATION_DURATION,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    overlayOpacity.value = withTiming(0, { duration: 200 });
  };

  const handleLinearTabPress = () => {
    if (animationProgress.value === 0) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  const handleMenuItemPress = () => {
    closeMenu();
  };

  const animatedOverlayStyle = useAnimatedStyle(() => {
    return {
      opacity: overlayOpacity.value,
    };
  });

  return (
    <>
      <Tabs
        tabBar={(props) => (
          <LinearTabBar
            {...props}
            animationProgress={animationProgress}
            onLinearTabPress={handleLinearTabPress}
            onMenuItemPress={handleMenuItemPress}
          />
        )}
        screenOptions={{
          headerShown: false,
          animation: TabAnimationName.Shift,
        }}
        detachInactiveScreens={false}
      >
        {/* Visible tabs */}
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="home-filled" size={24} color="#fff" />
            ),
          }}
        />
        <Tabs.Screen
          name="resource"
          options={{
            tabBarIcon: () => (
              <Ionicons name="library" size={24} color={"#fff"} />
            ),
          }}
        />
        <Tabs.Screen
          name="messagerie"
          options={{
            tabBarIcon: () => (
              <Ionicons name="chatbubble" size={24} color={"#fff"} />
            ),
          }}
        />
        {/* Hidden tabs (accessible via expanded menu) */}
        <Tabs.Screen
          name="statistique"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="parametres"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="aide"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="a-propos"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="favoris"
          options={{
            href: null,
          }}
        />
      </Tabs>
      <Animated.View
        style={[styles.overlay, animatedOverlayStyle]}
        pointerEvents={pointerEvents}
      >
        <Pressable style={styles.overlayPressable} onPress={closeMenu}>
          <BlurView tint="dark" intensity={60} style={styles.overlayBlur} />
        </Pressable>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
  },
  overlayPressable: {
    flex: 1,
  },
  overlayBlur: {
    flex: 1,
  },
});
