//costruisco la funzione di inversione dei caratteri
function mirrorWord(word) {
    //creo variabile per inversione
    let reversedWord = '';

    //inverto i dati inseriti
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    //restituisco il dato invertito
    return reversedWord;
}