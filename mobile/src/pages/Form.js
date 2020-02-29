import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight } from "react-native";

import Container from "../components/Container";
import parse from "../utils/parse";
import validate from "../utils/validate";

export default function Form({ navigation }) {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  function handleCalculate() {
    const validation = validate([
      { name: "Nome", value: name },
      { name: "Altura", value: height },
      { name: "Peso", value: weight }
    ]);

    if (validation) {
      let imc = parse(weight) / parse(height) ** 2;
      navigation.navigate("result", {
        name,
        imc: imc.toFixed(1),
        weight: parse(weight)
      });
    }
  }

  return (
    <Container>
      <Text style={styles.p}>
        IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
        Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        placeholderTextColor="#444"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Sua altura (m)"
        placeholderTextColor="#444"
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Seu peso (kg)"
        placeholderTextColor="#444"
        onChangeText={setWeight}
      />
      <TouchableHighlight style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonLabel}>Calcular</Text>
      </TouchableHighlight>
    </Container>
  );
}

const styles = StyleSheet.create({
  p: {
    color: "#444",
    fontSize: 14,
    marginBottom: 30
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#444",
    borderRadius: 5,
    marginBottom: 30
  },
  button: {
    backgroundColor: "#444",
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#444",
    borderRadius: 5
  },
  buttonLabel: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
    fontWeight: "bold"
  }
});
