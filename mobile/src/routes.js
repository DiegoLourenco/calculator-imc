import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Form from "./pages/Form";
import Result from "./pages/Result";

const Stack = createStackNavigator();

const options = {
  headerTransparent: true,
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  headerBackTitleVisible: false,
  headerBackTitleStyle: {
    color: "#fff"
  },
  headerTintColor: "#fff"
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen
          name="form"
          component={Form}
          options={{ headerTitle: "Calculadora IMC" }}
        />
        <Stack.Screen
          name="result"
          component={Result}
          options={{ headerTitle: "Resultado" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
