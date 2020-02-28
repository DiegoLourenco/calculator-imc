import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Form from "./pages/Form";
import Result from "./pages/Result";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      >
        <Stack.Screen name="Calculadora IMC" component={Form} />
        <Stack.Screen name="Resultado" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
