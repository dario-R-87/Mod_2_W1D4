/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*I principali e più usati tipi (datatype) in JavaScript sono: String, number, boolean, null.

String: nel tipo String, come dice il nome stesso viene rappresentata una stringa ovvero una sequenza di caratteri (lettere, numeri e altri caratteri),
per esempio sono stringhe "cane", "dario 28", "0922 831003", "dario@gmail.com", "i topi non avevano nipoti".

number: il tipo number rappresenta numero, per esempio il numero di mele nel cestino: 10; l'altezza di un bambino: 1,25; la temperatura -5 e così via.

boolean: il tipo boolean rappresenta la condizione di un fatto che può essere soltanto true o false (vero o falso), per esempio:
"maria ha gli occhi verdi"? è vera se maria ha gli occhi verdi altrimenti è falsa.
Oppure "5 è uguale a 5" (5 === 5) ? è vero .
oppure "ciao" === "hello"? no quindi è falsa .

null: è un tipo "strano" all'apparenza, quindi consideralo come se fosse un tipo che rappresenta una cosa che non c'è , un vuoto.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto in javascript è una struttura che viene usata per rappresentare un'entità (che può essere la più disparata,
tipo una macchina, una persona, un registro, un film etc...) tramite l'utilizzo di una o più proprietà con relativi valori:
Esempio: l'oggetto automobile può essere strutturato in questo modo: colore: "nero", modello: "berlina", cilindrata: 2000...
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*
let somma = 12+20;
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*
let x = 12;
*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*
let name = "Dario";
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*
let sottrazione = 4-x;
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/*
let name1 = "john";
let name2 = "John";
console.log(!(name1 === name2));
console.log(name1.toLowerCase() === name2.toLowerCase());
*/

/*ESERCIZIO 8
Crea un oggetto che ti rappresenti ( usa come propriet nome , cognome e hobby)
*/

/*
let me_stesso = {
nome: "Dario",
cognome: "Russo",
hobby: "Ascoltare musica"
}
*/
