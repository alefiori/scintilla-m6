import { component$ } from "@builder.io/qwik"
import { Deck, FirstSlide, Slide } from "../components"

export const Lesson5 = component$(() => {
  return (
    <Deck>
      <FirstSlide lessonNumber={5} />
      <Slide title="Javascript - introduzione">
        <p class="fragment">
          JavaScript è un linguaggio di programmazione interpretato, orientato
          agli oggetti e agli eventi.
        </p>
        <p class="fragment">
          JavaScript è stato creato da Brendan Eich nel 1995 per Netscape
          Communications Corporation.
        </p>
        <p class="fragment">
          JavaScript è stato standardizzato dall'ECMA International con il nome
          di ECMAScript.
        </p>
        <p class="fragment">
          JavaScript è supportato da tutti i browser moderni.
        </p>
      </Slide>
      <Slide title="JavaScript - caratteristiche">
        <ul>
          <li class="fragment">Interpretato</li>
          <li class="fragment">Orientato agli oggetti</li>
          <li class="fragment">Event-driven</li>
          <li class="fragment">Client-side</li>
          <li class="fragment">Server-side</li>
          <li class="fragment">Cross-platform</li>
        </ul>
      </Slide>
      <Slide title="JavaScript - interpretato">
        <p class="fragment">
          JavaScript è un linguaggio di programmazione interpretato.
        </p>
        <p class="fragment">
          Questo significa che i programmi JavaScript non vengono compilati
          prima di essere eseguiti, ma vengono interpretati direttamente.
        </p>
        <p class="fragment">
          JavaScript è un linguaggio di scripting, che significa che i programmi
          JavaScript possono essere incorporati in un'altra lingua di
          programmazione per controllare il suo comportamento.
        </p>
      </Slide>
      <Slide title="JavaScript - orientato agli oggetti">
        <p class="fragment">
          JavaScript è un linguaggio di programmazione orientato agli oggetti.
        </p>
        <p class="fragment">
          Questo significa che JavaScript è basato su oggetti.
        </p>
        <p class="fragment">
          Un oggetto è una raccolta di dati (variabili) e metodi (funzioni) che
          agiscono su questi dati.
        </p>
      </Slide>
      <Slide title="JavaScript - event-driven">
        <p class="fragment">
          JavaScript è un linguaggio di programmazione event-driven.
        </p>
        <p class="fragment">
          Questo significa che il flusso di esecuzione del programma è
          determinato dagli eventi.
        </p>
        <p class="fragment">
          Un evento è qualcosa che accade nel browser, come un click su un
          pulsante o il caricamento di una pagina.
        </p>
      </Slide>
      <Slide title="JavaScript - client-side">
        <p class="fragment">
          JavaScript è un linguaggio di programmazione client-side.
        </p>
        <p class="fragment">
          Questo significa che il codice JavaScript viene eseguito sul computer
          del cliente (nel browser).
        </p>
        <p class="fragment">
          JavaScript è ampiamente utilizzato per aggiungere interattività e
          dinamicità alle pagine web.
        </p>
      </Slide>
      <Slide title="JavaScript - server-side">
        <p class="fragment">
          JavaScript è un linguaggio di programmazione server-side.
        </p>
        <p class="fragment">
          Questo significa che il codice JavaScript viene eseguito sul server.
        </p>
        <p class="fragment">
          JavaScript è ampiamente utilizzato per creare applicazioni web
          server-side.
        </p>
      </Slide>
      <Slide title="JavaScript - cross-platform">
        <p class="fragment">
          JavaScript è un linguaggio di programmazione cross-platform.
        </p>
        <p class="fragment">
          Questo significa che il codice JavaScript può essere eseguito su
          diversi sistemi operativi e architetture hardware.
        </p>
        <p class="fragment">
          JavaScript è supportato da tutti i browser moderni su Windows, macOS,
          Linux, Android e iOS.
        </p>
      </Slide>
      <Slide title="JavaScript - sintassi">
        <p class="fragment">
          La sintassi di JavaScript è simile a quella di molti altri linguaggi
          di programmazione.
        </p>
        <p class="fragment">
          JavaScript è case-sensitive, il che significa che fa distinzione tra
          maiuscole e minuscole.
        </p>
        <p class="fragment">
          JavaScript è un linguaggio di programmazione debolmente tipizzato, il
          che significa che non è necessario dichiarare il tipo di una variabile
          prima di utilizzarla.
        </p>
      </Slide>
      <Slide title="JavaScript - variabili">
        <p class="fragment">
          In JavaScript, le variabili vengono utilizzate per memorizzare dati.
        </p>
        <p class="fragment">
          Per dichiarare una variabile in JavaScript, utilizzare la parola
          chiave <strong>var</strong>, <strong>let</strong> o{" "}
          <strong>const</strong>, seguita dal nome della variabile.
        </p>
        <p class="fragment">
          Esempio:{" "}
          <pre>
            <code>var x = 10;</code>
            <code>const x = 10;</code>
            <code>let x = 10;</code>
          </pre>
        </p>
      </Slide>
      <Slide title="JavaScript - tipi di dati">
        <p class="fragment">
          In JavaScript, i tipi di dati possono essere suddivisi in due
          categorie principali: primitivi e oggetti.
        </p>
        <p class="fragment">
          I tipi di dati primitivi includono numeri, stringhe, booleani, null e
          undefined.
        </p>
        <p class="fragment">
          I tipi di dati oggetto includono oggetti, array e funzioni.
        </p>
      </Slide>
      <Slide title="JavaScript - numeri">
        <p class="fragment">
          In JavaScript, i numeri possono essere interi o decimali.
        </p>
        <p class="fragment">
          I numeri possono essere scritti con o senza punto decimale.
        </p>
        <p class="fragment">
          Esempi: <strong>10</strong>, <strong>3.14</strong>
        </p>
      </Slide>
      <Slide title="JavaScript - stringhe">
        <p class="fragment">
          In JavaScript, le stringhe sono sequenze di caratteri racchiuse tra
          apici singoli o doppi.
        </p>
        <p class="fragment">
          Esempi: <strong>'Hello, world!'</strong>,{" "}
          <strong>"Ciao, mondo!"</strong>
        </p>
      </Slide>
      <Slide title="JavaScript - booleani">
        <p class="fragment">
          In JavaScript, i booleani possono avere solo due valori:{" "}
          <strong>true</strong> o <strong>false</strong>.
        </p>
        <p class="fragment">
          I booleani vengono utilizzati per rappresentare il vero e il falso.
        </p>
      </Slide>
      <Slide title="JavaScript - null e undefined">
        <p class="fragment">
          In JavaScript, <strong>null</strong> e <strong>undefined</strong> sono
          valori speciali che rappresentano l'assenza di un valore.
        </p>
        <p class="fragment">
          <strong>null</strong> viene utilizzato per rappresentare l'assenza di
          un valore intenzionale.
        </p>
        <p class="fragment">
          <strong>undefined</strong> viene utilizzato per rappresentare
          l'assenza di un valore non intenzionale.
        </p>
      </Slide>
      <Slide title="JavaScript - oggetti">
        <p class="fragment">
          In JavaScript, un oggetto è una raccolta di dati (variabili) e metodi
          (funzioni) che agiscono su questi dati.
        </p>
        <p class="fragment">
          Gli oggetti vengono utilizzati per rappresentare entità complesse con
          molte proprietà.
        </p>
        <p class="fragment">Esempio:</p>
        <pre class="fragment">
          <code>
            {`var person = {
    name: 'John Doe',
    age: 30
};`}
          </code>
        </pre>
      </Slide>
      <Slide title="JavaScript - array">
        <p class="fragment">
          In JavaScript, un array è una raccolta ordinata di valori.
        </p>
        <p class="fragment">
          Gli array vengono utilizzati per memorizzare più valori in una sola
          variabile.
        </p>
        <p class="fragment">Esempio:</p>
        <pre class="fragment">
          <code>{`var colors = ['red', 'green', 'blue'];`}</code>
        </pre>
      </Slide>
      <Slide title="JavaScript - funzioni">
        <p class="fragment">
          In JavaScript, una funzione è un blocco di codice che può essere
          eseguito più volte.
        </p>
        <p class="fragment">
          Le funzioni vengono utilizzate per eseguire azioni specifiche quando
          vengono chiamate.
        </p>
        <p class="fragment">Esempio:</p>
        <pre class="fragment">
          <code>
            {`function greet(name) {
    return 'Hello, ' + name + '!';
}`}
          </code>
        </pre>
      </Slide>
      <Slide title="JavaScript - operatori">
        <p class="fragment">
          In JavaScript, gli operatori vengono utilizzati per eseguire
          operazioni su variabili e valori.
        </p>
        <p class="fragment">
          Gli operatori aritmetici vengono utilizzati per eseguire operazioni
          matematiche.
        </p>
        <p class="fragment">Esempi:</p>
        <pre class="fragment">
          <code>
            {`var x = 10 + 5; // 15
var y = 10 - 5; // 5
var z = 10 * 5; // 50
var w = 10 / 5; // 2`}
          </code>
        </pre>
      </Slide>
      <Slide title="JavaScript - operatori di confronto">
        <p class="fragment">
          Gli operatori di confronto vengono utilizzati per confrontare due
          valori.
        </p>
        <p class="fragment">
          Gli operatori di confronto restituiscono un valore booleano:{" "}
          <strong>true</strong> o <strong>false</strong>.
        </p>
        <p class="fragment">Esempi:</p>
        <pre class="fragment">
          <code>
            {`var x = 10;
var y = 5;
console.log(x > y); // true
console.log(x < y); // false
console.log(x === y); // false
console.log(x !== y); // true`}
          </code>
        </pre>
      </Slide>
      <Slide title="JavaScript - operatori logici">
        <p class="fragment">
          Gli operatori logici vengono utilizzati per combinare condizioni.
        </p>
        <p class="fragment">
          Gli operatori logici restituiscono un valore booleano:{" "}
          <strong>true</strong> o <strong>false</strong>.
        </p>
        <p class="fragment">Esempi:</p>
        <pre class="fragment">
          <code>
            {`var x = 10;
var y = 5;
console.log(x > 5 && y < 10); // true
console.log(x > 5 || y > 10); // true
console.log(!(x > 5)); // false`}
          </code>
        </pre>
      </Slide>
      <Slide title="JavaScript - condizioni">
        <p class="fragment">
          In JavaScript, le istruzioni condizionali vengono utilizzate per
          eseguire azioni diverse in base a diverse condizioni.
        </p>
        <p class="fragment">
          L'istruzione <strong>if</strong> viene utilizzata per eseguire un
          blocco di codice se una condizione è vera.
        </p>
        <p class="fragment">Esempio:</p>
        <pre class="fragment">
          <code>
            {`var x = 10;
if (x > 5) {
    console.log('x è maggiore di 5');
}`}
          </code>
        </pre>
      </Slide>
      <Slide title="JavaScript - cicli">
        <p class="fragment">
          In JavaScript, i cicli vengono utilizzati per eseguire un blocco di
          codice più volte.
        </p>
        <p class="fragment">
          Il ciclo <strong>for</strong> viene utilizzato per eseguire un blocco
          di codice un numero specifico di volte.
        </p>
        <p class="fragment">Esempio:</p>
        <pre class="fragment">
          <code>
            {`for (var i = 0; i < 5; i++) {
    console.log(i);
}`}
          </code>
        </pre>
      </Slide>
      <Slide title="JavaScript - funzioni di array">
        <p class="fragment">
          In JavaScript, le funzioni di array vengono utilizzate per eseguire
          operazioni su array.
        </p>
        <p class="fragment">
          La funzione <strong>map</strong> viene utilizzata per trasformare ogni
          elemento di un array in un nuovo elemento.
        </p>
        <p class="fragment">Esempio:</p>
        <pre class="fragment">
          <code>
            {`var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function(number) {
    return number * 2;
})
console.log(doubledNumbers); // [2, 4, 6, 8, 10]`}
          </code>
        </pre>
      </Slide>
      <Slide title="JavaScript - oggetti JSON">
        <p class="fragment">
          In JavaScript, gli oggetti JSON vengono utilizzati per rappresentare
          dati strutturati.
        </p>
        <p class="fragment">JSON sta per JavaScript Object Notation.</p>
        <p class="fragment">Esempio:</p>
        <pre class="fragment">
          <code>
            {`var person = {
    "name": "John Doe",
    "age": 30
};
var json = JSON.stringify(person);
console.log(json); // {"name":"John Doe","age":30}`}
          </code>
        </pre>
      </Slide>
      <Slide title="JavaScript - DOM">
        <p class="fragment">
          In JavaScript, il Document Object Model (DOM) viene utilizzato per
          manipolare gli elementi di una pagina web.
        </p>
        <p class="fragment">
          Il DOM rappresenta la struttura di una pagina web come un albero di
          nodi.
        </p>
        <p class="fragment">Esempio:</p>
        <pre class="fragment">
          <code>
            {`var element = document.getElementById('myElement');
element.innerHTML = 'Hello, world!';`}
          </code>
        </pre>
      </Slide>
      <Slide title="JavaScript - eventi">
        <p class="fragment">
          In JavaScript, gli eventi vengono utilizzati per gestire le
          interazioni dell'utente con una pagina web.
        </p>
        <p class="fragment">
          Gli eventi possono essere generati da azioni dell'utente, come il
          click di un pulsante.
        </p>
        <p class="fragment">Esempio:</p>
        <pre class="fragment">
          <code>
            {`var button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button clicked!');
});`}
          </code>
        </pre>
      </Slide>
      <Slide title="Esercizio">
        <p class="fragment">
          Scrivere una funzione JavaScript che accetti un array di numeri e
          restituisca la somma di tutti i numeri nell'array.
        </p>
        <pre class="fragment">
          <code>
            {`function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}`}
          </code>
        </pre>
      </Slide>
      <Slide title="Esercizio">
        <p class="fragment">
          Scrivere una funzione JavaScript che accetti una stringa e restituisca
          la stringa al contrario.
        </p>
        <pre class="fragment">
          <code>
            {`function reverseString(str) {
    return str.split('').reverse().join('');
}`}
          </code>
        </pre>
      </Slide>
      <Slide title="Esercizio">
        <p class="fragment">
          Scrivere una funzione JavaScript che accetti un array di numeri e
          restituisca un array con i numeri pari.
        </p>
        <pre class="fragment">
          <code>
            {`function evenNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    }
}`}
          </code>
        </pre>
      </Slide>
      <Slide title="Esercizio">
        <p class="fragment">
          Scrivere una funzione JavaScript che accetti un array di numeri e
          restituisca la somma dei numeri pari.
        </p>
        <pre class="fragment">
          <code>
            {`function sumEvenNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    }
    .reduce(function(total, number) {
        return total + number;
    }, 0);
}`}
          </code>
        </pre>
      </Slide>
      <Slide title="Esercizio - DOM">
        <p class="fragment">
          Scrivere una funzione JavaScript che aggiunga un elemento alla fine di
          un elenco non ordinato.
        </p>
        <pre class="fragment">
          <code>
            {`function addItem() {
    var list = document.getElementById('myList');
    var item = document.createElement('li');
    item.textContent = 'New item';
    list.appendChild(item);
}`}
          </code>
        </pre>
      </Slide>
      <Slide title="Esercizio - DOM">
        <p class="fragment">
          Scrivere una funzione JavaScript che rimuova un elemento dalla fine di
          un elenco non ordinato.
        </p>
        <pre class="fragment">
          <code>
            {`function removeItem() {
    var list = document.getElementById('myList');
    list.removeChild(list.lastChild);
}`}
          </code>
        </pre>
      </Slide>
      <Slide title="Esercizio - DOM">
        <p class="fragment">
          Scrivere una funzione JavaScript che aggiunga un elemento alla fine di
          un elenco non ordinato quando si fa clic su un pulsante.
        </p>
        <pre class="fragment">
          <code>
            {`var button = document.getElementById('myButton');
button.addEventListener('click', function() {
    addItem();
});`}
          </code>
        </pre>
      </Slide>
    </Deck>
  )
})
