export default function RankImc(name, imc, weight) {
  const message = { success: "#00b227", danger: "#db0000" };
  const rank = { success: "#aefbae", danger: "#e68d73" };

  if (imc < 18.5) {
    let idealWeight = 62 - weight;
    return {
      rank: "thinness",
      rankColor: rank.danger,
      messageColor: message.danger,
      message: `Sinto muito ${name}, mas o seu IMC é de ${imc} kg/m2, por isso você está abaixo 
          do peso e deveria engordar no mínimo ${Math.abs(idealWeight)} kg.`
    };
  }

  if (imc >= 18.5 && imc <= 24.9) {
    return {
      rank: "normal",
      rankColor: rank.success,
      messageColor: message.success,
      message: `Parabéns ${name}, seu IMC é ${imc} kg/m2 e você está dentro do peso adequado!`
    };
  }

  if (imc > 24.9 && imc <= 30) {
    let idealWeight = weight - 83;
    return {
      rank: "overweight",
      rankColor: rank.danger,
      messageColor: message.danger,
      message: `Sinto muito ${name}, mas o seu IMC é de ${imc} kg/m2, por isso você está
          acima do peso e deveria emagrecer no mínimo ${Math.abs(
            idealWeight
          )} Kg.`
    };
  }

  if (imc > 30) {
    let idealWeight = weight - 83;
    return {
      rank: "obesity",
      rankColor: rank.danger,
      messageColor: message.danger,
      message: `Sinto muito ${name}, mas o seu IMC é de ${imc} kg/m2, por isso você está
        muito acima do peso, você deveria emagrecer ${Math.abs(
          idealWeight
        )} Kg.`
    };
  }
}
