import React from "react";
import "./styles.css";

import arrowBack from "../../assets/arrow-back.svg";
import RankImc from "../../utils/RankImc";

export default function Result({ history, location }) {
  const name = location.state.name;
  const weight = location.state.weight;
  const imc = location.state.imc.toFixed(1);

  const result = RankImc(name, imc, weight);

  function rowActive(rank) {
    if (result.rank === rank) return result.active;
  }

  return (
    <>
      <header>
        <img
          src={arrowBack}
          title="Voltar"
          alt="Voltar"
          onClick={() => history.goBack()}
        />
        <h2>Resultado</h2>
      </header>
      <p className={result.active}>{result.message}</p>
      <table>
        <thead>
          <tr>
            <td>Classificação</td>
            <td>IMC</td>
            <td>Peso</td>
          </tr>
        </thead>
        <tbody>
          <tr className={rowActive("thinness")}>
            <td>Magreza</td>
            <td>{"< 18,5"}</td>
            <td>{"< 62 Kg"}</td>
          </tr>
          <tr className={rowActive("normal")}>
            <td>Normal</td>
            <td>18,5 e 24,9</td>
            <td>62 a 83,4 Kg</td>
          </tr>
          <tr className={rowActive("overweight")}>
            <td>Sobrepeso</td>
            <td>24,9 a 30</td>
            <td>83,4 a 100,5 Kg</td>
          </tr>
          <tr className={rowActive("obesity")}>
            <td>Obesidade</td>
            <td>> 30</td>
            <td>> 100,5 Kg</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
