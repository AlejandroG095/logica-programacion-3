function calcularFactorial() {
    const numero = Number(document.getElementById('factorial').value);

    if (isNaN(numero)) {
        alert("Error: Por favor Ingrese valores numéricos en el campo de texto.");
        return;
    }
    if (numero < 0) {
        alert("Error: El factorial de un número negativo no existe.");
        return;
    }

    const resultadosDiv = document.getElementById('resultados');
    let mensaje = `
        <p>Calculando el factorial de ${numero}: <br><br>`;
    let factorialTexto = ``;
    let factorialValor = 1;

    for (let i = 1; i <= numero; i++) {
        factorialTexto += `${i}`;
        if (i < numero) {
            factorialTexto += ' x ';
        }
        factorialValor *= i;
    }

    mensaje += `
        ${factorialTexto} = ${factorialValor}</p>`;

    resultadosDiv.innerHTML = mensaje;
    resultadosDiv.style.display = 'block';
}