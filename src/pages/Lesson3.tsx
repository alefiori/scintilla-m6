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
      <Slide title="Esempio">
        <pre>
          <code>
            {`.red {
    color: red;
}`}
          </code>
        </pre>
        <pre>
          <code>{`<h1 class="red">Titolo</h1>`}</code>
        </pre>
        <pre>
          <code>{`<p class="red">Paragrafo</p>`}</code>
        </pre>
        <p class="fragment">
          Questo esempio applica il colore rosso a tutti gli elementi con la
          classe red
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
        <p class="fragment">
          <a
            href="https://www.html.it/pag/18946/calcolare-la-specificit/"
            target="_blank"
          >
            Calcolatore di specificità
          </a>
        </p>
      </Slide>
      <Slide title="Dichiarazione">
        <p class="fragment">
          La dichiarazione è composta da una proprietà e da un valore
        </p>
        <p class="fragment">
          La proprietà definisce il tipo di stile da applicare
        </p>
        <p class="fragment">Il valore definisce il valore dello stile</p>
        <p class="fragment">
          <pre>
            <code>
              {`h1 {
  color: red;
}`}
            </code>
          </pre>
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
        <p class="fragment">
          <pre>
            <code>
              {`h1 {
  color: rgb(255, 0, 0);
}
h1 {
  color: #ff0000;
}
h1 {
  color: hsl(0, 100%, 50%);
}
h1 {
  color: red;
}`}
            </code>
          </pre>
        </p>
        <p class="fragment">
          <a href="https://htmlcolorcodes.com/" target="_blank">
            Selezionatore di colori
          </a>
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
        <p class="fragment">
          <pre>
            <code>
              {`h1 {
  background-color: #ff0000;
}
h1 {
  background-image: url('image.jpg');
}
h1 {
  background-position: center;
}`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Font">
        <p class="fragment">
          La proprietà font definisce il font di un elemento
        </p>
        <p class="fragment">
          La proprietà font può definire il tipo di font, la dimensione, il peso
        </p>
        <p class="fragment">
          <pre>
            <code>
              {`h1 {
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
}`}
            </code>
          </pre>
        </p>
        <p class="fragment">
          <a href="https://fonts.google.com/" target="_blank">
            Google Fonts
          </a>
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
        <p class="fragment">
          <pre>
            <code>
              {`h1 {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}`}
            </code>
          </pre>
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
        <p class="fragment">
          <pre>
            <code>
              {`h1 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Border">
        <p class="fragment">
          La proprietà border definisce il bordo di un elemento
        </p>
        <p class="fragment">
          La proprietà border può definire il colore, lo spessore, il tipo
        </p>
        <p class="fragment">
          <pre>
            <code>
              {`h1 {
  border: 1px solid black;
}`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Box Model">
        <p class="fragment">
          Il box model definisce la dimensione di un elemento
        </p>
        <p class="fragment">
          Il box model è composto da margin, border, padding, content
        </p>
        <p class="fragment">
          <pre>
            <code>
              {`h1 {
  margin: 10px;
  border: 1px solid black;
  padding: 10px;
}`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Box Model">
        <div class="fragment r-stack">
          <img src="/margin.png" alt="screenshot" />
        </div>
      </Slide>
      <Slide title="Posizionamento">
        <p class="fragment">
          Il posizionamento definisce la posizione di un elemento
        </p>
        <p class="fragment">
          Il posizionamento può essere static, relative, absolute, fixed
        </p>
        <p class="fragment">
          <pre>
            <code>
              {`h1 {
  position: relative;
}`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Float">
        <p class="fragment">
          Il float definisce la posizione di un elemento rispetto agli altri
        </p>
        <p class="fragment">Il float può essere left, right, none, inherit</p>
        <p class="fragment">
          <pre>
            <code>
              {`h1 {
  float: left;
}`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Display">
        <p class="fragment">
          Il display definisce il tipo di visualizzazione di un elemento
        </p>
        <p class="fragment">
          Il display può essere block, inline, inline-block, none, flex, grid
        </p>
        <p class="fragment">
          <pre>
            <code>
              {`h1 {
  display: block;
}`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Flexbox">
        <p class="fragment">Il flexbox permette di creare layout flessibili</p>
        <p class="fragment">
          Il flexbox permette di allineare, distribuire, ordinare gli elementi
        </p>
        <p class="fragment">
          <pre>
            <code>
              {`h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Grid">
        <p class="fragment">Il grid permette di creare layout complessi</p>
        <p class="fragment">
          Il grid permette di definire colonne, righe, aree di un layout
        </p>
        <p class="fragment">
          <pre>
            <code>
              {`h1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Pseudo-classi">
        <p class="fragment">
          Le pseudo-classi permettono di applicare stili a stati specifici
        </p>
        <p class="fragment">
          Le pseudo-classi possono essere hover, active, focus, visited
        </p>
        <p class="fragment">
          <pre>
            <code>
              {`h1:hover {
  color: red;
}`}
            </code>
          </pre>
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
        <p class="fragment">
          <pre>
            <code>
              {`@media screen and (max-width: 600px) {
  h1 {
    color: red;
  }
}`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Esercizio">
        <p class="fragment">
          Creare una pagina HTML con un titolo e un paragrafo
        </p>
        <p class="fragment">
          Aggiungere al titolo il colore rosso e il font Arial
        </p>
        <p class="fragment">
          Aggiungere al paragrafo il colore blu, il font Verdana e il padding di
          10px
        </p>
      </Slide>
      <Slide title="Soluzione">
        <p class="fragment">
          <pre>
            <code>
              {`<html>
  <head>
    <style>
      h1 {
        color: red;
        font-family: Arial;
      }
      p {
        color: blue;
        font-family: Verdana;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <h1>Titolo</h1>
    <p>Paragrafo</p>
  </body>
</html>`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Esercizio - flexbox">
        <p class="fragment">
          Creare una pagina HTML con 3 elementi allineati orizzontalmente
        </p>
        <p class="fragment">
          Aggiungere un gap di 10px tra gli elementi e centrarli verticalmente
        </p>
        <p class="fragment">
          Aggiungere un padding di 10px agli elementi e un bordo di 1px
        </p>
        <p class="fragment">
          Aggiungere un colore di sfondo grigio agli elementi
        </p>
      </Slide>
      <Slide title="Soluzione - flexbox">
        <p class="fragment">
          <pre>
            <code>
              {`<html>
  <head>
    <style>
      .container {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
      }
      .item {
        padding: 10px;
        border: 1px solid black;
        background-color: lightgray;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">Elemento 1</div>
      <div class="item">Elemento 2</div>
      <div class="item">Elemento 3</div>
    </div>
  </body>
</html>`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Esercizio - Grid">
        <p class="fragment">
          Creare una pagina HTML con 4 elementi allineati in una griglia
        </p>
        <p class="fragment">
          Aggiungere un gap di 10px tra gli elementi e centrarli verticalmente
        </p>
        <p class="fragment">
          Aggiungere un padding di 10px agli elementi e un bordo di 1px
        </p>
        <p class="fragment">
          Aggiungere un colore di sfondo grigio agli elementi
        </p>
      </Slide>
      <Slide title="Soluzione - Grid">
        <p class="fragment">
          <pre>
            <code>
              {`<html>
  <head>
    <style>
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        justify-content: center;
        align-items: center;
      }
      .item {
        padding: 10px;
        border: 1px solid black;
        background-color: lightgray;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">Elemento 1</div>
      <div class="item">Elemento 2</div>
      <div class="item">Elemento 3</div>
      <div class="item">Elemento 4</div>
    </div>
  </body>
</html>`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Esercizio - Grid">
        <p class="fragment">
          Aggiungere una media query per visualizzare 1 elemento per riga su un
          dispositivo con larghezza inferiore a 600px
        </p>
        <p class="fragment">
          <pre>
            <code>
              {`@media screen and (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
  }
}`}
            </code>
          </pre>
        </p>
      </Slide>
      <Slide title="Domande (1/3)">
        <p class="fragment">Cosa significa CSS?</p>
        <p class="fragment">Cosa definisce il selettore?</p>
        <p class="fragment">Cosa definisce la dichiarazione?</p>
        <p class="fragment">Come si calcola la specificità?</p>
        <p class="fragment">Cosa definisce la proprietà?</p>
        <p class="fragment">Cosa definisce il valore?</p>
      </Slide>
      <Slide title="Domande (2/3)">
        <p class="fragment">Cosa definisce l'unità di misura?</p>
        <p class="fragment">Cosa definisce il colore?</p>
        <p class="fragment">
          Cosa definisce la proprietà background e come si utilizza?
        </p>
        <p class="fragment">
          Cosa definisce la proprietà font e come si utilizza?
        </p>
        <p class="fragment">
          Cosa definisce la proprietà margin e come si utilizza?
        </p>
        <p class="fragment">
          Cosa definisce la proprietà padding e come si utilizza?
        </p>
      </Slide>
      <Slide title="Domande (3/3)">
        <p class="fragment">
          Cosa definisce la proprietà border e come si utilizza?
        </p>
        <p class="fragment">Cosa definisce il box model e come si utilizza?</p>
        <p class="fragment">
          Cosa definisce il posizionamento e come si utilizza?
        </p>
        <p class="fragment">Cosa definisce il float e come si utilizza?</p>
        <p class="fragment">Cosa definisce il display e come si utilizza?</p>
        <p class="fragment">Cosa definisce il flexbox e come si utilizza?</p>
        <p class="fragment">Cosa definisce il grid e come si utilizza?</p>
      </Slide>
    </Deck>
  )
})
