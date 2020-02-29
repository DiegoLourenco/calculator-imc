import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Container from "../components/Container";
import rankImc from "../utils/rankImc";

export default function Result({ route }) {
  const { name, imc, weight } = route.params;
  const result = rankImc(name, imc, weight);

  return (
    <Container>
      <View>
        <Text style={{ color: result.messageColor }}>{result.message}</Text>
      </View>
      <View style={styles.head}>
        <Text style={styles.thead}>Classificação</Text>
        <Text style={styles.thead}>IMC</Text>
        <Text style={styles.thead}>Peso</Text>
      </View>
      <View
        style={[
          styles.tbody,
          result.rank === "thinness" ? result.rankColor : ""
        ]}
      >
        <Text>Magreza</Text>
        <Text>{"< 18,5"}</Text>
        <Text>{"< 62 kg"}</Text>
      </View>
      <View
        style={[styles.tbody, result.rank === "normal" ? result.rankColor : ""]}
      >
        <Text>Normal</Text>
        <Text>18,5 e 24,9</Text>
        <Text>62 a 83,4 kg</Text>
      </View>
      <View
        style={[
          styles.tbody,
          result.rank === "overweight" ? result.rankColor : ""
        ]}
      >
        <Text>Sobrepeso</Text>
        <Text>24,9 a 30</Text>
        <Text>83,4 a 100,5 kg</Text>
      </View>
      <View
        style={[
          styles.tbody,
          result.rank === "obesity" ? result.rankColor : ""
        ]}
      >
        <Text>Obesidade</Text>
        <Text> 30</Text>
        <Text>> 100,5 kg</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  thead: {
    fontWeight: "bold",
    color: "#444"
  },
  tbody: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
