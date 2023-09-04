import React from "react";
import { StyleSheet, View } from "react-native";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

function Box() {
  const position = useSharedValue(0);

  const gestureUp = Gesture.Fling()
    .direction(Directions.UP)
    .onStart((e) => {
      position.value = withTiming(position.value - 150, { duration: 200 });
    });

  const gestureDown = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart((e) => {
      position.value = withTiming(position.value + 150, { duration: 200 });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: position.value }],
  }));

  return (
    <GestureDetector gesture={Gesture.Race(gestureDown, gestureUp)}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </GestureDetector>
  );
}

export default function Example() {
  return (
    <View style={styles.container}>
      <Box />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "#b58df1",
    borderRadius: 20,
  },
});
