import * as React from "react";
import { StyleSheet, View, Button } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Pan from "./gestures/Pan";
import Tap from "./gestures/Tap";
import LongPress from "./gestures/LongPress";
import Rotation from "./gestures/Rotation";
import Pinch from "./gestures/Pinch";
import Fling from "./gestures/Fling";

const SCREENS = [
  {
    name: "Pan",
    component: Pan,
  },
  {
    name: "Tap",
    component: Tap,
  },
  {
    name: "LongPress",
    component: LongPress,
  },
  {
    name: "Rotation",
    component: Rotation,
  },
  {
    name: "Pinch",
    component: Pinch,
  },
  {
    name: "Fling",
    component: Fling,
  },
];

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{ title: "Gestures demo" }}
            component={MainScreen}
          />
          {SCREENS.map((screen) => (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {SCREENS.map((screen) => (
        <Button
          key={screen.name}
          title={screen.name}
          onPress={() => navigation.navigate(screen.name)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
