/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */

/*
1. recupero gli elemnti dal DOM
2. recupero la parola inserita
3. inverto la parola
4. verifico se è palindroma
5. restituisco il risultato della verifica
*/

//FASE PREPARATORIA
//recupero gli elementi dal DOM
const word = document.getElementById('word');
const verify = document.getElementById('verify');
const palindromeResult = document.getElementById('result');

//reagisco al click
verify.addEventListener('click', function () {
    //recupero la parola in una costante
    const userWord = word.value.trim();

    //verifico che la parola si palindroma
    const result = mirrorWord(userWord) === userWord ? 'la parola inserita è <b>palindroma</b>' : 'la parola inserita <b>non è palindroma</b>';

    //mostro il risultato
    palindromeResult.innerHTML = `<p> la tua parola é: <b>${userWord}</b></p>
                                  <p>la tua parola inverita è: <b>${mirrorWord(userWord)}</b></p>
                                  <p>${result}</p>`
}
)

/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
 */

/*
1.recupero gli elementi dal DOM
2.recupero i dati inseriti
3.sommo i numeri
4.verifico se la somma è pari o dispari
5.verifico se corrisponde alla scelta dell'utente
6.restituisco il risultato della verifica
*/
