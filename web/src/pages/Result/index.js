import React, { useState, useEffect } from "react";
import "./styles.css";

import arrowBack from "../../assets/arrow-back.svg";

export default function Result({ history, location }) {
  const name = location.state.name;
  const imc = location.state.imc.toFixed(1);

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
      <p className="success">
        Parabéns {name}, seu IMC é {imc} kg/m2 e você está dentro do peso
        adequado!
      </p>
      <p className="danger">
        Sinto muito {name}, mas o seu IMC é de {imc} kg/m2, por isso você está
        acima do peso e deveria emagrecer no mínimo 2 kg.
      </p>
      <table>
        <thead>
          <tr className>
            <td>Classificação</td>
            <td>IMC</td>
            <td>Peso</td>
          </tr>
        </thead>
        <tbody>
          <tr className>
            <td>Magreza</td>
            <td>{"< 18,5"}</td>
            <td>{"< 62 Kg"}</td>
          </tr>
          <tr>
            <td>Normal</td>
            <td>18,5 e 24,9</td>
            <td>62 a 83,4 Kg</td>
          </tr>
          <tr className>
            <td>Sobrepeso</td>
            <td>24,9 a 30</td>
            <td>83,4 a 100,5 Kg</td>
          </tr>
          <tr className>
            <td>Obesidade</td>
            <td>> 30</td>
            <td>> 100,5 Kg</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
