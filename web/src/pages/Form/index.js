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

  /**
   * Validate fields and send params to result
   * @param {Array} fields
   */
  function validateField(fields) {
    if (Array.isArray(fields)) {
      const validate = fields.map(field => {
        if (!field.value) {
          alert(`O campo ${field.name} é obrigatório!`);
          return false;
        }
        return true;
      });

      // Return validation if true or false
      return validate.includes(false) ? false : true;
    }
    throw new Error("Field not array");
  }

  function handleCalculate(event) {
    event.preventDefault();
    const imc = parse(weight) / parse(height) ** 2;
    const validated = validateField([
      { name: "Nome", value: name },
      { name: "Altura", value: height },
      { name: "Peso", value: weight }
    ]);

    if (validated)
      history.push("/resultado", { name, imc, weight: parse(weight) });
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
