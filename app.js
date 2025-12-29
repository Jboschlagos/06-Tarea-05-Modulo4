// 1. Repetidor de Palabras
const btnRepetir = document.getElementById('btnRepetir');
const palabraInput = document.getElementById('palabra');
const cantidadInput = document.getElementById('cantidad');
const resultadoRepetir = document.getElementById('resultadoRepetir');

btnRepetir.addEventListener('click', () => {
    const palabra = palabraInput.value.trim();
    const cantidad = Number(cantidadInput.value);

    if (!palabra || cantidad <= 0) {
        resultadoRepetir.textContent = 'Datos inválidos';
        return;
    }

    resultadoRepetir.textContent = palabra.repeat(cantidad);
});


// 2. Cambio de Color
const btnColor = document.getElementById('btnColor');
const selectorColor = document.getElementById('selectorColor');
const textoEjemplo = document.getElementById('textoEjemplo');

btnColor.addEventListener('click', () => {
    textoEjemplo.style.backgroundColor = selectorColor.value;
});


// 3. Calculadora Básica
const btnCalcular = document.getElementById('btnCalcular');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');

const sumaSpan = document.getElementById('suma');
const restaSpan = document.getElementById('resta');
const multiSpan = document.getElementById('multi');
const diviSpan = document.getElementById('divi');
const totalSpan = document.getElementById('total');

btnCalcular.addEventListener('click', () => {
    const n1 = Number(num1Input.value);
    const n2 = Number(num2Input.value);

    if (isNaN(n1) || isNaN(n2)) {
        alert('Ingresa números válidos');
        return;
    }

    const suma = n1 + n2;
    const resta = n1 - n2;
    const multi = n1 * n2;
    const divi = n2 !== 0 ? n1 / n2 : null;

    sumaSpan.textContent = suma;
    restaSpan.textContent = resta;
    multiSpan.textContent = multi;
    diviSpan.textContent = divi ?? 'Error';

    const total = divi !== null
        ? suma + resta + multi + divi
        : suma + resta + multi;

    totalSpan.textContent = total;
});


// 4. Inversor de Texto
const btnInvertir = document.getElementById('btnInvertir');
const textoInput = document.getElementById('textoInvertir');
const resultadoInverso = document.getElementById('resultadoInverso');

btnInvertir.addEventListener('click', () => {
    resultadoInverso.textContent =
        textoInput.value.split('').reverse().join('');
});
