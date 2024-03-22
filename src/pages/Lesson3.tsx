import { component$ } from "@builder.io/qwik"
import { Deck, FirstSlide, Slide } from "../components"

export const Lesson3 = component$(() => {
  return (
    <Deck>
      <FirstSlide lessonNumber={3} />
      <Slide title="CSS">
        <ul>
          <li class="fragment">Cascading Style Sheets</li>
          <li class="fragment">
            Utilizzato per aggiungere lo stile ad una pagina HTML
          </li>
          <li class="fragment">
            Può essere applicato alla pagina in diversi modi
          </li>
          <li class="fragment">Inline, Internal, External</li>
        </ul>
      </Slide>
      <Slide title="CSS Inline">
        <ul>
          <li class="fragment">Applicato direttamente all'elemento HTML</li>
          <li class="fragment">Utilizzando l'attributo style</li>
        </ul>
        <p class="fragment">
          <pre>
            <code>{`<h1 style="color: red;">Titolo</h1>`}</code>
          </pre>
        </p>
      </Slide>
      <Slide title="CSS Internal">
        <ul>
          <li class="fragment">Applicato all'interno del tag style</li>
          <li class="fragment">Definito all'interno del tag head</li>
        </ul>
        <p class="fragment">
          <pre>
            <code>
              {`<style>
  h1 {
    color: red;
  }
</style>`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="CSS External">
        <ul>
          <li class="fragment">Applicato in un file esterno</li>
          <li class="fragment">Definito all'interno del tag link</li>
        </ul>
        <p class="fragment">
          <pre>
            <code>{`<link rel="stylesheet" href="style.css" />`}</code>
          </pre>
        </p>
      </Slide>
      <Slide title="Come funziona il CSS?">
        <p class="fragment">
          Il CSS è composto da un selettore e da una dichiarazione
        </p>
        <p class="fragment">
          Il selettore individua l'elemento HTML a cui applicare lo stile
        </p>
        <p class="fragment">
          La dichiarazione definisce il tipo di stile da applicare
        </p>
      </Slide>
      <Slide title="Selettore">
        <p class="fragment">
          Il selettore può essere un tag HTML, una classe o un id
        </p>
        <p class="fragment">
          Per selezionare un tag HTML si utilizza il nome del tag
        </p>
        <p class="fragment">
          Per selezionare una classe si utilizza il punto seguito dal nome della
          classe
        </p>
        <p class="fragment">
          Per selezionare un id si utilizza il cancelletto seguito dal nome
          dell'id
        </p>
      </Slide>
      <Slide title="Classi">
        <p class="fragment">
          Le classi permettono di applicare lo stesso stile a più elementi
        </p>
        <p class="fragment">
          Per definire una classe si utilizza il punto seguito dal nome della
          classe
        </p>
        <p class="fragment">
          Per applicare una classe ad un elemento si utilizza l'attributo{" "}
          <strong>class</strong>
        </p>
      </Slide>
      <Slide title="Specificità">
        <p class="fragment">
          La specificità definisce quale stile viene applicato ad un elemento
        </p>
        <p class="fragment">
          La specificità è definita dalla combinazione di selettori e
          dichiarazioni
        </p>
        <p class="fragment">
          La specificità è importante per risolvere i conflitti tra stili
        </p>
      </Slide>
      <Slide title="Calcolare la specificità">
        <p class="fragment">
          La specificità si calcola assegnando un valore ad ogni selettore
        </p>
        <p class="fragment">
          Il valore è composto da 4 cifre: inline, id, class, tag
        </p>
        <p class="fragment">Più alto è il valore, maggiore è la specificità</p>
      </Slide>
      <Slide title="Dichiarazione">
        <p class="fragment">
          La dichiarazione è composta da una proprietà e da un valore
        </p>
        <p class="fragment">
          La proprietà definisce il tipo di stile da applicare
        </p>
        <p class="fragment">Il valore definisce il valore dello stile</p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1 {
  color: red;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio applica il colore rosso a tutti gli elementi h1
        </p>
      </Slide>
      <Slide title="Proprietà">
        <p class="fragment">
          Le proprietà definiscono il tipo di stile da applicare
        </p>
        <p class="fragment">
          Alcune proprietà comuni sono color, font-size, background-color
        </p>
      </Slide>
      <Slide title="Valori">
        <p class="fragment">
          I valori definiscono il valore dello stile da applicare
        </p>
        <p class="fragment">
          I valori possono essere numerici, stringhe o colori
        </p>
      </Slide>
      <Slide title="Unità di misura">
        <p class="fragment">
          Le unità di misura definiscono il valore numerico di uno stile
        </p>
        <p class="fragment">
          Alcune unità di misura comuni sono px, em, rem, %
        </p>
        <p class="fragment">
          Le unità di misura sono importanti per definire la dimensione di un
          elemento
        </p>
        <p class="fragment">
          REM: relativo alla dimensione del font del root element
        </p>
        <p class="fragment">
          EM: relativo alla dimensione del font dell'elemento padre
        </p>
      </Slide>
      <Slide title="Colori">
        <p class="fragment">I colori possono essere definiti in diversi modi</p>
        <p class="fragment">
          I colori possono essere definiti in RGB, HEX, HSL, nome
        </p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1 {
  color: #ff0000;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio applica il colore rosso a tutti gli elementi h1
        </p>
      </Slide>
      <Slide title="Background">
        <p class="fragment">
          La proprietà background definisce lo sfondo di un elemento
        </p>
        <p class="fragment">
          La proprietà background può definire il colore, l'immagine, la
          posizione
        </p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1 {
  background-color: #ff0000;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio applica il colore rosso allo sfondo di tutti gli
          elementi h1
        </p>
      </Slide>
      <Slide title="Font">
        <p class="fragment">
          La proprietà font definisce il font di un elemento
        </p>
        <p class="fragment">
          La proprietà font può definire il tipo di font, la dimensione, il
          colore
        </p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1 {
  font-family: Arial;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio applica il font Arial a tutti gli elementi h1
        </p>
      </Slide>
      <Slide title="Margin">
        <p class="fragment">
          La proprietà margin definisce il margine esterno di un elemento
        </p>
        <p class="fragment">
          La proprietà margin può definire il margine superiore, destro,
          inferiore, sinistro
        </p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1 {
  margin-top: 10px;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio applica un margine di 10px sopra a tutti gli elementi
          h1
        </p>
      </Slide>
      <Slide title="Padding">
        <p class="fragment">
          La proprietà padding definisce il padding interno di un elemento
        </p>
        <p class="fragment">
          La proprietà padding può definire il padding superiore, destro,
          inferiore, sinistro
        </p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1 {
  padding-top: 10px;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio applica un padding di 10px sopra a tutti gli elementi
          h1
        </p>
      </Slide>
      <Slide title="Border">
        <p class="fragment">
          La proprietà border definisce il bordo di un elemento
        </p>
        <p class="fragment">
          La proprietà border può definire il colore, lo spessore, il tipo
        </p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1 {
  border: 1px solid black;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio applica un bordo di 1px nero a tutti gli elementi h1
        </p>
      </Slide>
      <Slide title="Box Model">
        <p class="fragment">
          Il box model definisce la dimensione di un elemento
        </p>
        <p class="fragment">
          Il box model è composto da margin, border, padding, content
        </p>
      </Slide>
      <Slide title="Box Model">
        <div class="fragment r-stack">
          <img src="/margin.png" alt="screenshot" />
        </div>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1 {
  margin: 10px;
  border: 1px solid black;
  padding: 10px;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio applica un margine, un bordo e un padding a tutti gli
          elementi h1
        </p>
      </Slide>
      <Slide title="Posizionamento">
        <p class="fragment">
          Il posizionamento definisce la posizione di un elemento
        </p>
        <p class="fragment">
          Il posizionamento può essere static, relative, absolute, fixed
        </p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1 {
  position: relative;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio definisce la posizione relativa di tutti gli elementi
          h1
        </p>
      </Slide>
      <Slide title="Float">
        <p class="fragment">
          Il float definisce la posizione di un elemento rispetto agli altri
        </p>
        <p class="fragment">Il float può essere left, right, none, inherit</p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1 {
  float: left;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio fa flottare a sinistra tutti gli elementi h1
        </p>
      </Slide>
      <Slide title="Display">
        <p class="fragment">
          Il display definisce il tipo di visualizzazione di un elemento
        </p>
        <p class="fragment">
          Il display può essere block, inline, inline-block, none
        </p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1 {
  display: block;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio definisce il tipo di visualizzazione di tutti gli
          elementi h1
        </p>
      </Slide>
      <Slide title="Pseudo-classi">
        <p class="fragment">
          Le pseudo-classi permettono di applicare stili a stati specifici
        </p>
        <p class="fragment">
          Le pseudo-classi possono essere hover, active, focus, visited
        </p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1:hover {
  color: red;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio applica il colore rosso agli elementi h1 al passaggio
          del mouse
        </p>
      </Slide>
      <Slide title="Media Queries">
        <p class="fragment">
          Le media queries permettono di applicare stili in base al dispositivo
        </p>
        <p class="fragment">
          Le media queries possono essere basate su larghezza, altezza,
          orientamento
        </p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`@media screen and (max-width: 600px) {
  h1 {
    color: red;
  }
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio applica il colore rosso agli elementi h1 su schermi con
          larghezza massima di 600px
        </p>
      </Slide>
      <Slide title="Flexbox">
        <p class="fragment">Il flexbox permette di creare layout flessibili</p>
        <p class="fragment">
          Il flexbox permette di allineare, distribuire, ordinare gli elementi
        </p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio allinea al centro tutti gli elementi h1
        </p>
      </Slide>
      <Slide title="Grid">
        <p class="fragment">Il grid permette di creare layout complessi</p>
        <p class="fragment">
          Il grid permette di definire colonne, righe, aree di un layout
        </p>
      </Slide>
      <Slide title="Esempio">
        <pre>
          <code>
            {`h1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}`}
          </code>
        </pre>
        <p class="fragment">
          Questo esempio definisce un layout a 2 colonne e 2 righe per tutti gli
          elementi h1
        </p>
      </Slide>
      <Slide title="Conclusioni">
        <ul>
          <li class="fragment">
            Il CSS è utilizzato per aggiungere lo stile ad una pagina HTML
          </li>
          <li class="fragment">Il CSS può essere applicato in diversi modi</li>
          <li class="fragment">
            Il CSS è composto da selettori e dichiarazioni
          </li>
          <li class="fragment">
            Il CSS è importante per definire l'aspetto di una pagina web
          </li>
        </ul>
      </Slide>
    </Deck>
  )
})
