/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */

/*
0. recupero gli elemnti dal DOM
1. preparo le variabili e costanti
2. recupero la parola inserita
3. inverto la pareola
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
    palindromeResult.innerHTML = `<p> la tua parola <b>${userWord}</b></p>
                                  <p>la tua parola inverita <b>${mirrorWord(userWord)}</b></p>
                                  <p>${result}</p>`
}
)
