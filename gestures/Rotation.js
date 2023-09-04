import React from "react";
import { StyleSheet, View } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

function Ball() {
  const rotation = useSharedValue(1);
  const savedRotation = useSharedValue(1);

  const gesture = Gesture.Rotation()
    .onUpdate((e) => {
      rotation.value = savedRotation.value + e.rotation;
    })
    .onEnd(() => {
      savedRotation.value = rotation.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${(rotation.value / Math.PI) * 180}deg` }],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </GestureDetector>
  );
}

export default function Example() {
  return (
    <View style={styles.container}>
      <Ball />
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
