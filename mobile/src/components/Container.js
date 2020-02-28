import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import background from "../assets/background-academy.jpg";

export default function Container({ children }) {
  return (
    <ImageBackground style={styles.backgroundImage} source={background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  content: {
    margin: 18,
    padding: 30,
    backgroundColor: "#fff"
  }
});
