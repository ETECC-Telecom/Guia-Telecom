
function embaralharArray(array) {
  let currentIndex = array.length, randomIndex;

  // Enquanto houver elementos a serem embaralhados.
  while (currentIndex !== 0) {

    // Escolhe um elemento restante aleatoriamente...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // E troca esse elemento com o elemento atual.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}

function Sortear_Tecnico(){
    const TECNICOS = document.getElementById('lista').value;
    const CONTAINER = document.getElementById('Container');

    let arrayDeLinhas = TECNICOS.split('\n');

    embaralharArray(arrayDeLinhas);

    const htmlItens = arrayDeLinhas.map(item => {
        // Para cada item, cria a tag <li>
        return `<li>${item}</li>`;
    }).join(''); // Junta todas as strings <li> em uma única string, sem separador

    // 4. Insere a string de HTML dentro do container <ol>
    CONTAINER.innerHTML = htmlItens;

}