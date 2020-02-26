import React, { useState } from "react";
import "./styles.css";

export default function Form({ history }) {
  
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  /**
   * Convert a string to number
   * @param {string} field
   * @return {Number}
   */
  function parse(field) {
    return parseFloat(field.replace(",", "."));
  }

  function handleCalculate(event) {
    event.preventDefault();
    const imc = parse(weight) / parse(height) ** 2;

    history.push("/resultado", { name, imc, parse(weight) });
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
        />
        <input
          type="text"
          name="height"
          id="height"
          placeholder="Sua altura (m)"
          value={height}
          onChange={event => setHeight(event.target.value)}
        />
        <input
          type="text"
          name="weight"
          id="weight"
          placeholder="Seu peso (kg)"
          value={weight}
          onChange={event => setWeight(event.target.value)}
        />
        <button type="submit">Calcular</button>
      </form>
    </>
  );
}
