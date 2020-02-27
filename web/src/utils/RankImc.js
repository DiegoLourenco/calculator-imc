export default function RankImc(name, imc, weight) {
  const success = "success";
  const danger = "danger";

  if (imc < 18.5) {
    let idealWeight = 62 - weight;
    return {
      active: danger,
      rank: "thinness",
      message: `Sinto muito ${name}, mas o seu IMC é de ${imc} kg/m2, por isso você está abaixo 
        do peso e deveria engordar no mínimo ${Math.abs(idealWeight)} kg.`
    };
  }

  if (imc >= 18.5 && imc <= 24.9) {
    return {
      active: success,
      rank: "normal",
      message: `Parabéns ${name}, seu IMC é ${imc} kg/m2 e você está dentro do peso adequado!`
    };
  }

  if (imc > 24.9 && imc <= 30) {
    let idealWeight = weight - 83;
    return {
      active: danger,
      rank: "overweight",
      message: `Sinto muito ${name}, mas o seu IMC é de ${imc} kg/m2, por isso você está
        acima do peso e deveria emagrecer no mínimo ${Math.abs(idealWeight)} Kg.`
    };
  }

  if (imc > 30) {
    let idealWeight = weight - 83;
    return {
      active: danger,
      rank: "obesity",
      message: `Sinto muito ${name}, mas o seu IMC é de ${imc} kg/m2, por isso você está
      muito acima do peso, você deveria emagrecer ${Math.abs(idealWeight)} Kg.`
    };
  }
}
