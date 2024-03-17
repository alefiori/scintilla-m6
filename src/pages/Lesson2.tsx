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
        <p class="fragment italic">HTML, CSS, SVG, ecc...</p>
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
          {`<!DOCTYPE html>
<html>
    <head>
        <title>Titolo della pagina</title>
    </head>
    <body>
        <h1>Titolo principale</h1>
        <p>Paragrafo di testo</p>
    </body>
</html>`}
        </pre>
      </Slide>
      <Slide title="Tag HTML">
        <p class="fragment">
          I tag HTML sono parole chiave racchiuse tra parentesi angolari.
        </p>
        <pre class="fragment">{`<tag>Contenuto</tag>`}</pre>
      </Slide>
      <Slide title="Tag HTML">
        <p class="fragment">I tag HTML possono essere annidati.</p>
        <pre class="fragment">
          {`<tag1>
    <tag2>Contenuto</tag2>
</tag1>`}
        </pre>
      </Slide>
      <Slide title="Tag HTML">
        <p class="fragment">I tag HTML possono essere vuoti.</p>
        <pre class="fragment">{`<tag />`}</pre>
        <p class="fragment">
          I tag vuoti non hanno contenuto e non hanno bisogno di essere chiusi.
        </p>
      </Slide>
      <Slide title="Principali Tag HTML">
        <p class="fragment">
          <strong>h1, h2, h3, h4, h5, h6</strong> - Titoli
        </p>
        <p class="fragment">
          <strong>p</strong> - Paragrafi
        </p>
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
    </Deck>
  )
})
