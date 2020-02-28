import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#444" />
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </>
  );
}
