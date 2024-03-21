import { component$ } from "@builder.io/qwik"
import { Deck, FirstSlide, Slide } from "../components"

export const Lesson2 = component$(() => {
  return (
    <Deck>
      <FirstSlide lessonNumber={2} />
      <Slide title="Recap">
        <p class="fragment">- Cos'è un linguaggio di Markup?</p>
        <p class="fragment italic">
          I linguaggi di markup sono linguaggi che specificano la struttura e la
          presentazione di un documento.
        </p>
        <p class="fragment">- Quali sono i principali linguaggi di markup?</p>
        <p class="fragment italic">HTML, XML, SVG, ecc...</p>
        <p class="fragment">- Cos'è e per cosa utilizziamo l'HTML?</p>
        <p class="fragment italic">
          HTML è un linguaggio di markup che definisce la struttura di una
          pagina web.
        </p>
      </Slide>
      <Slide title="HTML">
        <ul>
          <li class="fragment">HyperText Markup Language</li>
          <li class="fragment">Linguaggio di markup</li>
          <li class="fragment">Definisce la struttura di una pagina web</li>
          <li class="fragment">Non definisce la presentazione</li>
          <li class="fragment">Non definisce il comportamento</li>
        </ul>
      </Slide>
      <Slide title="Elementi HTML">
        <p class="fragment">
          Un documento HTML è composto da <strong>elementi</strong>.
        </p>
        <p class="fragment">
          Ogni elemento è identificato da un <strong>tag</strong>.
        </p>
        <p class="fragment">Gli elementi possono contenere altri elementi.</p>
        <p class="fragment">
          Gli elementi possono avere <strong>attributi</strong>.
        </p>
        <p class="fragment">
          <a
            href="https://developer.mozilla.org/it/docs/Web/HTML/Element"
            target="_blank"
          >
            Lista degli elementi HTML
          </a>
        </p>
      </Slide>
      <Slide title="Struttura di un documento HTML">
        <pre class="fragment">
          <code>
            {`<html>
    <head>
        <title>Titolo della pagina</title>
    </head>
    <body>
        <h1>Titolo principale</h1>
        <p>Paragrafo di testo</p>
    </body>
</html>`}
          </code>
        </pre>
      </Slide>
      <Slide title="Tag HTML">
        <p class="fragment">
          I tag HTML sono parole chiave racchiuse tra parentesi angolari.
        </p>
        <pre class="fragment">{`<tag>Contenuto</tag>`}</pre>
        <p class="fragment">I tag HTML possono essere annidati.</p>
        <pre class="fragment">
          <code>
            {`<tag1>
    <tag2>Contenuto</tag2>
</tag1>`}
          </code>
        </pre>
        <p class="fragment">
          I tag HTML possono essere vuoti e non hanno bisogno di essere chiusi.
        </p>
        <pre class="fragment">
          <code>{`<tag />`}</code>
        </pre>
      </Slide>
      <Slide title="Principali Tag HTML">
        <p class="fragment">
          <strong>html</strong> - Radice del documento
        </p>
        <p class="fragment">
          <strong>head</strong> - Intestazione del documento
        </p>
        <p class="fragment">
          <strong>body</strong> - Contenuto della pagina
        </p>
      </Slide>
      <Slide title="Il tag <head>">
        <p class="fragment">
          Il tag <strong>head</strong> è un elemento fondamentale di un
          documento HTML. Definisce le informazioni di intestazione per il
          documento HTML.
        </p>
        <p class="fragment">
          Il contenuto del tag <strong>head</strong> non viene visualizzato
          direttamente sulla pagina, ma fornisce informazioni vitali per i
          browser e i motori di ricerca.
        </p>
        <p class="fragment">
          É essenziale per definire metadati, collegamenti e script fondamentali
          per ogni pagina web.
        </p>
        <p class="fragment">
          <a href="https://developer.mozilla.org/it/docs/Web/HTML/Element/head">
            Documentazione del tag <strong>head</strong>
          </a>
        </p>
      </Slide>
      <Slide title="Contenuti del tag <head>">
        <ul>
          <li class="fragment">
            <strong>{"<title>"}</strong>: Definisce il titolo della pagina
            visualizzato nella barra del browser.
          </li>
          <li class="fragment">
            <strong>{"<meta>"}</strong>: Fornisce metadati, come la descrizione
            della pagina, le parole chiave, e le istruzioni per i motori di
            ricerca.
          </li>
          <li class="fragment">
            <strong>{"<link>"}</strong>: Collega il documento HTML a fogli di
            stile esterni (CSS) o a altre risorse.
          </li>
          <li class="fragment">
            <strong>{"<script>"}</strong>: Specifica script JavaScript e
            collegamenti a file JavaScript esterni.
          </li>
          <li class="fragment">
            <strong>{"<style>"}</strong>: Contiene le regole di stile CSS per la
            pagina.
          </li>
        </ul>
      </Slide>
      <Slide title="Il tag <body>">
        <p class="fragment">
          Il tag <strong>body</strong> rappresenta il contenuto della pagina
          web.
        </p>
        <p class="fragment">
          Il contenuto del tag <strong>body</strong> è visualizzato direttamente
          sulla pagina.
        </p>
        <p class="fragment">
          <a href="https://developer.mozilla.org/it/docs/Web/HTML/Element/body">
            Documentazione del tag <strong>body</strong>
          </a>
        </p>
      </Slide>
      <Slide title="Principali Tag HTML - Body (1/2)">
        <p class="fragment">
          <strong>main</strong> - Contenuto principale
        </p>
        <p class="fragment">
          <strong>header, footer, nav, aside</strong> - Sezioni
        </p>
        <p class="fragment">
          <strong>section, article, div</strong> - Divisioni
        </p>
        <p class="fragment">
          <strong>h1, h2, h3, h4, h5, h6</strong> - Titoli
        </p>
        <p class="fragment">
          <strong>p</strong> - Paragrafi
        </p>
      </Slide>
      <Slide title="Principali Tag HTML - Body (2/2)">
        <p class="fragment">
          <strong>a</strong> - Link
        </p>
        <p class="fragment">
          <strong>img</strong> - Immagini
        </p>
        <p class="fragment">
          <strong>ul, ol, li</strong> - Liste
        </p>
        <p class="fragment">
          <strong>table, tr, td</strong> - Tabelle
        </p>
        <p class="fragment">
          <strong>form, input, button</strong> - Form
        </p>
      </Slide>
      <Slide title="Elementi HTML">
        <p class="fragment">Gli elementi HTML possono avere attributi.</p>
        <pre class="fragment">
          {`<a href="https://www.google.com">Google</a>`}
        </pre>
        <p class="fragment">Gli attributi sono coppie chiave-valore.</p>
        <p class="fragment">
          Gli attributi forniscono informazioni aggiuntive.
        </p>
      </Slide>
      <Slide title="Attributi HTML">
        <p class="fragment">
          <strong>href</strong> - Indirizzo del link
        </p>
        <p class="fragment">
          <strong>src</strong> - Indirizzo dell'immagine
        </p>
        <p class="fragment">
          <strong>alt</strong> - Testo alternativo per l'immagine
        </p>
        <p class="fragment">
          <strong>class</strong> - Classe CSS
        </p>
        <p class="fragment">
          <strong>id</strong> - Identificatore unico
        </p>
        <p class="fragment">
          <strong>style</strong> - Stile CSS
        </p>
      </Slide>
      <Slide title="Risorse">
        <ul>
          <li class="fragment">
            <a
              href="https://developer.mozilla.org/it/docs/Web/HTML"
              target="_blank"
            >
              Documentazione HTML su MDN
            </a>
          </li>
          <li class="fragment">
            <a
              href="https://www.w3schools.com/html/default.asp"
              target="_blank"
            >
              W3Schools - HTML
            </a>
          </li>
          <li class="fragment">
            <a
              href="https://www.codecademy.com/learn/learn-html"
              target="_blank"
            >
              Codecademy - Learn HTML
            </a>
          </li>
        </ul>
      </Slide>
      <Slide title="Esercizio">
        <p class="fragment">
          Crea un documento HTML con un titolo, un'intestazione, un paragrafo e
          un link.
        </p>
        <pre class="fragment">
          <code>
            {`<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <h1>Intestazione</h1>
        <p>Questo è un paragrafo.</p>
        <a href="https://www.google.com">Google</a>
    </body>
</html>`}
          </code>
        </pre>
      </Slide>
      <Slide title="Esercizio">
        <p class="fragment">
          Aggiungi un'immagine all'interno del documento HTML.
        </p>
        <pre class="fragment">
          <code>
            {`<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <h1>Intestazione</h1>
        <p>Questo è un paragrafo.</p>
        <a href="https://www.google.com">Google</a>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
    </body>
</html>`}
          </code>
        </pre>
      </Slide>
      <Slide title="Esercizio">
        <p class="fragment">
          Aggiungi una lista di elementi al documento HTML.
        </p>
        <pre class="fragment">
          <code>
            {`<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <h1>Intestazione</h1>
        <p>Questo è un paragrafo.</p>
        <a href="https://www.google.com">Google</a>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
        </ul>
    </body>
</html>`}
          </code>
        </pre>
      </Slide>
      <Slide title="Esercizio">
        <p class="fragment">
          Aggiungi una tabella al documento HTML con almeno 3 righe e 3 colonne.
        </p>
        <pre class="fragment">
          <code>
            {`<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <h1>Intestazione</h1>
        <p>Questo è un paragrafo.</p>
        <a href="https://www.google.com">Google</a>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
        </ul>
        <table>
            <tr>
                <td>Riga 1, Colonna 1</td>
                <td>Riga 1, Colonna 2</td>
                <td>Riga 1, Colonna 3</td>
            </tr>
            <tr>
                <td>Riga 2, Colonna 1</td>
                <td>Riga 2, Colonna 2</td>
                <td>Riga 2, Colonna 3</td>
            </tr>
            <tr>
                <td>Riga 3, Colonna 1</td>
                <td>Riga 3, Colonna 2</td>
                <td>Riga 3, Colonna 3</td>
            </tr>
        </table>
    </body>
</html>`}
          </code>
        </pre>
      </Slide>
      <Slide title="Esercizio">
        <p class="fragment">
          Crea un form all'interno del documento HTML con un campo di testo e un
          pulsante.
        </p>
        <pre class="fragment">
          <code>
            {`<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <h1>Intestazione</h1>
        <p>Questo è un paragrafo.</p>
        <a href="https://www.google.com">Google</a>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
        </ul>
        <table>
            <tr>
                <td>Riga 1, Colonna 1</td>
                <td>Riga 1, Colonna 2</td>
                <td>Riga 1, Colonna 3</td>
            </tr>
            <tr>
                <td>Riga 2, Colonna 1</td>
                <td>Riga 2, Colonna 2</td>
                <td>Riga 2, Colonna 3</td>
            </tr>
            <tr>
                <td>Riga 3, Colonna 1</td>
                <td>Riga 3, Colonna 2</td>
                <td>Riga 3, Colonna 3</td>
            </tr>
        </table>
        <form>
            <input type="text" />
            <button>Invia</button>
        </form>
    </body>
</html>`}
          </code>
        </pre>
      </Slide>
      <Slide title="Domande (1/3)">
        <p class="fragment">
          Cos'è un tag HTML?
        </p>
        <p class="fragment">
          Cosa rappresenta il tag <strong>html</strong> di un documento HTML?
        </p>
        <p class="fragment">
          Cosa rappresenta il tag <strong>head</strong> di un documento HTML?
        </p>
        <p class="fragment">
          Cosa rappresenta il tag <strong>body</strong> di un documento HTML?
        </p>
        <p class="fragment">
          Cosa rappresenta il tag <strong>title</strong> di un documento HTML?
        </p>
        <p class="fragment">
          Cosa rappresenta il tag <strong>meta</strong> di un documento HTML?
        </p>
        <p class="fragment">
          Cosa rappresenta il tag <strong>link</strong> di un documento HTML?
        </p>
      </Slide>
      <Slide title="Domande (2/3)">
        <p class="fragment">
          Cosa rappresenta il tag <strong>script</strong> di un documento HTML?
        </p>
        <p class="fragment">
          Cosa rappresenta il tag <strong>style</strong> di un documento HTML?
        </p>
        <p class="fragment">
          Con quali tag si definiscono i titoli di una pagina HTML?
        </p>
        <p class="fragment">
          Con quale tag si definisce un paragrafo di testo?
        </p>
        <p class="fragment">Con quale tag si definisce un link?</p>
        <p class="fragment">Con quale tag si definisce un'immagine?</p>
        <p class="fragment">Con quali tag si definiscono le liste?</p>
      </Slide>
      <Slide title="Domande (3/3)">
        <p class="fragment">Con quali tag si definiscono le tabelle?</p>
        <p class="fragment">
          Con quali tag si definiscono i form per la raccolta di dati?
        </p>
        <p class="fragment">
          Cosa rappresenta l'attributo <strong>href</strong> di un tag{" "}
          <strong>a</strong>?
        </p>
        <p class="fragment">
          Cosa rappresenta l'attributo <strong>src</strong> di un tag{" "}
          <strong>img</strong>?
        </p>
        <p class="fragment">
          Cosa rappresenta l'attributo <strong>alt</strong> di un tag{" "}
          <strong>img</strong>?
        </p>
      </Slide>
      <Slide title="Iniziamo a creare un progetto">
        <p class="fragment">
          Creiamo le prime sezioni della nostra pagina personale. Come vogliamo
          strutturarla? Definiamo un mockup.
        </p>
        <p class="fragment">
          Creiamo un nuovo progetto con un documento HTML e definiamo la
          struttura base.
        </p>
      </Slide>
    </Deck>
  )
})
