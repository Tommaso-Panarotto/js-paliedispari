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

//funzione per numero ranodm
function getRandomNumber(min = 1, max = 1000, isMaxIncluded = true) {
    //verifico se il massimo è incluso
    if (isMaxIncluded) max++;
    //creo numero random tra min e max compresi
    return Math.floor(Math.random() * (max - min)) + min;

}

//funzione pari o dispari
function isEvenOrOdd(number) {
    return number % 2 === 0 ? 'pari' : 'dispari';
}