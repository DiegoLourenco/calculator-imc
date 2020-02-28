import React, { useState } from "react";
import "./styles.css";

import parse from "../../utils/parse";
import validate from "../../utils/validate";

export default function Form({ history }) {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  function handleCalculate(event) {
    event.preventDefault();
    const validation = validate([
      { name: "Nome", value: name },
      { name: "Altura", value: height },
      { name: "Peso", value: weight }
    ]);

    if (validation) {
      let imc = parse(weight) / parse(height) ** 2;
      history.push("/resultado", { name, imc, weight: parse(weight) });
    }
  }

  return (
    <>
      <p>
        IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
        Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
      </p>
      <form onSubmit={handleCalculate}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Seu nome"
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />
        <input
          type="text"
          name="height"
          id="height"
          placeholder="Sua altura (m)"
          value={height}
          onChange={event => setHeight(event.target.value)}
          required
        />
        <input
          type="text"
          name="weight"
          id="weight"
          placeholder="Seu peso (kg)"
          value={weight}
          onChange={event => setWeight(event.target.value)}
          required
        />
        <button type="submit">Calcular</button>
      </form>
    </>
  );
}
