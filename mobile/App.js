import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" animated />
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </>
  );
}
