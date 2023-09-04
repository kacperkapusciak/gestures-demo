import React from "react";
import { StyleSheet, View } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

function Box() {
  const color = useSharedValue("#b58df1");

  const tapGesture = Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
      color.value = "#b1dfd0";
    });

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: color.value,
  }));

  return (
    <GestureDetector gesture={tapGesture}>
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
