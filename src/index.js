import analyzer from './analyzer.js';

const text = document.querySelector("textarea")
const contarPalabras = document.querySelector('li[data-testid="word-count"]')
const contarCaracteres = document.querySelector('li[data-testid="character-count"]')
const sinCaracteres = document.querySelector('li[data-testid="character-no-spaces-count"]')
const contarNumeros = document.querySelector('li[data-testid="number-count"]')
const sumaNumeros = document.querySelector('li[data-testid="number-sum"]')
const promedioLongitud = document.querySelector('li[data-testid="word-lenght-average"]')

text.addEventListener("input", function () {
  //para mostrar cantidad de palabras
  const restWordCount = analyzer.getWordCount(text.value)
  contarPalabras.innerHTML = "#PALABRAS: " + restWordCount
  // para mostrar cantidad de caracteres
  const characterCount = analyzer.getCharacterCount(text.value)
  contarCaracteres.innerHTML = "#CARACTERES: " + characterCount
  //para mostrar cantidad sin espacios ni puntuaciones
  const noCharacter = analyzer.getCharacterCountExcludingSpaces(text.value)
  sinCaracteres.innerHTML = "#SIN CARACTERES: " + noCharacter
  // para mostrar cantidad de numeros
  const numberCount = analyzer.getNumberCount(text.value)
  contarNumeros.innerHTML = "#NUMEROS: " + numberCount
  //para mostrar suma de numeros 
  const numberSum = analyzer.getNumberSum(text.value)
  sumaNumeros.innerHTML = "#SUMA NUMEROS: " + numberSum
  // para mostrar el promedio longitud de las palabras
  const wordLenght = analyzer.getAverageWordLength(text.value)
  promedioLongitud.innerHTML = "#PROMEDIO LONGITUD: " + wordLenght
})
// limpiar texto
const button = document.getElementById('limpiarTexto')
const textBox = document.querySelector('[name="user-input"]')
button.addEventListener("click", () => {
  textBox.value = "";
})


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`