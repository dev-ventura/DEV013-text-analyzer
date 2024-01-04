const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");  // Convertimos el texto a un array (vector) de palabras
    return words.length;    // Contamos el número de palabras
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length; // Devuelve el numero de caracteres en la cadena
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const character = text.replace(/[^\w]/g, ''); // /[^\w]/g reducimos los espacios y signos de puntuacion
    const countCharacter = character.length;
    return countCharacter;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const number = text.match(/\d+/g).length; // match recibe valores similares, y /\d busca digitos
    return number;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let sum = 0;
    let number = '';
    for (let i = 0; i < text.length; i++) {
      const character = text.charAt(i);
      if (/\d/.test(character)) { // si el caracter es un numero
        number += character;
      } else {
        if (number !== '') { 
          sum += parseInt(number, 10); 
          number = '';  // Reiniciar el número actual
        }
      }
    }
    if (number !== ''){
      sum += parseInt(number, 10); //suma con el ultimo numero si no es vacio
    }
    return sum;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(/\s+/g); // dividiendo el texto por palabras
    if(words.length === 0){
      return 0;
    }
    let totalLenght = words.reduce((acc, word) => acc + word.length, 0); // calculando la longitud total de las palabras
    let mediaLenght = totalLenght / words.length; // calculando la longitud media de las palabras
    return mediaLenght;
  },
};

export default analyzer;
