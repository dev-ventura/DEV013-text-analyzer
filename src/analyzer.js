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
    const number = text.match(/\b\d+(\.\d+)?\b/g); // match recibe valores similares, y /\b delimita numeros con caracteres y \d busca digitos
    if (number) {
      return number.length; 
    } else {
      return 0;
    }
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const word = text.trim().split(' '); // trim elimina espacios de adelante y atras, split ayuda a dividir en otro array
    let sumNumber = 0;

    for (let i = 0; i < (word.length); i++) {
      const num = parseFloat(word[i]);
      if (!isNaN(num)) { // si el numero extraido de num es valido
        sumNumber += num; // suma ese numero
      }
    }
    
    return (sumNumber);
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(/\s+/g); // dividiendo el texto por palabras
    if (words.length === 0) {
      return 0;
    }
    const totalLenght = words.reduce((acc, word) => acc + word.length, 0); // calculando la longitud total de las palabras
    const mediaLenght = totalLenght / words.length; // calculando la longitud media de las palabras
    return Number(mediaLenght.toFixed(2)); // retornando el promedio con dos decimales
  },
};

export default analyzer;
