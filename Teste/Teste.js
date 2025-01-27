function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value)
  const num2 = parseFloat(document.getElementById("num2").value)
  let result

  switch (operator) {
    case "+":
      result = num1 + num2
      break
    case "-":
      result = num1 - num2
      break
    case "*":
      result = num1 * num2
      break
    case "/":
      if (num2 !== 0) {
        result = num1 / num2
      } else {
        result = "Erro: Divisão por zero"
      }
      break
    default:
      result = "Operação inválida"
  }

  document.getElementById("result").textContent = `Resultado: ${result}`
}
