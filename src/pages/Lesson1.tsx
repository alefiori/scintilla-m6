import { component$ } from "@builder.io/qwik"
import { Deck, FirstSlide, Slide } from "../components"

const htmlExample = `<html>
  <head>
    <title>La mia prima pagina</title>
  </head>

  <body>
    <h1>Benvenuto nel mondo web</h1>
    <p>Questo è un esempio di HTML e CSS</p>
  </body>
</html>
`

const cssExample = `body {
  margin: 20px;
  font-family: "Arial", sans-serif;
}

h1 {
  color: #3498db;
}`

const jsExample = `const messaggio = "Benvenuto nel mondo JavaScript!"
console.log(messaggio)
function saluta(nome) {
  return "Ciao, " + nome + "!"
}
const salutoUtente = saluta("Giovanni")
console.log(salutoUtente)`

const jsOutputExample = `Benvenuto nel mondo JavaScript!
Ciao, Giovanni!`

export const Lesson1 = component$(() => {
  return (
    <main class="h-screen">
      <Deck>
        <FirstSlide lessonNumber={1} />
        <Slide title="Cosa vedremo?">
          <ul class="fragment">
            <li>Cos'è un'applicazione web</li>
            <li>Cos'è un'applicazione mobile</li>
            <li>Markup - HTML & CSS</li>
            <li>JavaScript - concetti base</li>
            <li>Librerie e framework</li>
            <li>Sviluppo Backend - introduzione</li>
            <li>Come effettuare il rilascio di un'applicazione</li>
          </ul>
        </Slide>
        <Slide title="Obiettivi del corso">
          <p class="fragment">
            L'obiettivo del corso è quello di fornire le basi necessarie per
            sviluppare applicazioni web e mobile.
          </p>
          <p class="fragment">
            Durante il corso verranno trattati i principali concetti e
            tecnologie necessarie per sviluppare applicazioni web e mobile.
          </p>
        </Slide>
        <Slide title="Cos'è un'applicazione web?">
          <p class="fragment">
            Un'applicazione web è un'applicazione software che viene eseguita su
            un server web e visualizzata tramite un browser web.
          </p>
          <p class="fragment">
            Le applicazioni web possono essere accessibili da qualsiasi
            dispositivo connesso a internet.
          </p>
        </Slide>
        <Slide title="Esempi di applicazioni web">
          <p class="fragment">
            Alcuni esempi di applicazioni web sono: Google, Facebook, Twitter,
            YouTube, Amazon, eBay, Netflix, Spotify, WhatsApp Web, ecc.
          </p>
          <p class="fragment">
            Le applicazioni web possono essere utilizzate per svolgere svariate
            attività come la ricerca di informazioni, la comunicazione,
            l'acquisto di prodotti, la fruizione di contenuti multimediali, ecc.
          </p>
        </Slide>
        <Slide title="Cos'è un'applicazione mobile?">
          <p class="fragment">
            Un'applicazione mobile è un'applicazione software che viene eseguita
            su un dispositivo mobile come smartphone o tablet.
          </p>
          <p class="fragment">
            Le applicazioni mobile possono essere scaricate e installate
            attraverso un'app store.
          </p>
        </Slide>
        <Slide title="Esempi di applicazioni mobile">
          <p class="fragment">
            Alcuni esempi di applicazioni mobile sono: Facebook, Instagram,
            Twitter, YouTube, WhatsApp, Spotify, Netflix, Amazon, eBay, ecc.
          </p>
          <p class="fragment">
            Le applicazioni mobile possono essere utilizzate per svolgere
            svariate attività come la comunicazione, la fruizione di contenuti
            multimediali, l'acquisto di prodotti, ecc.
          </p>
        </Slide>
        <Slide title="Quali sono le varie tipologie di applicazioni mobile?">
          <ul>
            <li>Applicazioni native</li>
            <li>Applicazioni ibride</li>
            <li>Applicazioni web - PWA</li>
          </ul>
        </Slide>
        <Slide title="Applicazioni native">
          <p class="fragment">
            Le applicazioni native sono applicazioni sviluppate per una
            piattaforma specifica come iOS o Android.
          </p>
          <p class="fragment">
            Le applicazioni native sono scritte in linguaggi specifici come
            Swift o Objective-C per iOS e Java o Kotlin per Android.
          </p>
        </Slide>
        <Slide title="Applicazioni ibride">
          <p class="fragment">
            Le applicazioni ibride sono applicazioni che combinano elementi
            delle applicazioni web e delle applicazioni native.
          </p>
          <p class="fragment">
            Le applicazioni ibride sono scritte in linguaggi web come HTML, CSS
            e JavaScript e vengono eseguite all'interno di un contenitore
            nativo.
          </p>
        </Slide>
        <Slide title="Applicazioni web - PWA">
          <p class="fragment">
            Le applicazioni web progressive (PWA) sono applicazioni web che
            possono essere installate e utilizzate come applicazioni native.
          </p>
          <p class="fragment">
            Le PWA sono scritte in HTML, CSS e JavaScript e possono essere
            installate direttamente dal browser.
          </p>
        </Slide>
        <Slide title="Cos'è il browser?">
          <p class="fragment">
            Un browser web è un'applicazione software che consente di
            visualizzare e interagire con pagine web.
          </p>
          <p class="fragment">
            I browser consentono di navigare su internet e di accedere a
            svariate risorse come siti web, immagini, video, ecc.
          </p>
          <p class="fragment">
            I browser sono in grado di interpretare e visualizzare pagine web
            scritte in HTML, CSS e JavaScript.
          </p>
        </Slide>
        <Slide title="Esempi di browser">
          <p class="fragment">
            I browser più utilizzati sono Google Chrome, Mozilla Firefox,
            Safari, Microsoft Edge e Opera.
          </p>
          <div class="flex justify-between fragment">
            <img src="/chrome.svg" alt="chrome" />
            <img src="/firefox.png" alt="firefox" />
            <img src="/safari.svg" alt="safari" />
            <img src="/edge.svg" alt="edge" />
            <img src="/opera.svg" alt="opera" />
          </div>
          <a
            class="fragment"
            href="https://www.google.com/chrome/"
            target="_blank"
          >
            google.com/chrome
          </a>
        </Slide>
        <Slide title="Cos'è l'URL?">
          <p class="fragment">
            Un URL (Uniform Resource Locator) è l'indirizzo di un file o di una
            risorsa su internet.
          </p>
          <p class="fragment">
            Un URL consente di identificare e accedere a una risorsa tramite un
            browser web.
          </p>
        </Slide>
        <Slide title="Linguaggi di markup">
          <p class="fragment">
            Un linguaggio di markup è un insieme di simboli e regole utilizzati
            per definire la struttura e la presentazione di un documento.
          </p>
          <p class="fragment">
            I principali linguaggi di markup utilizzati per scrivere pagine web
            sono HTML e CSS.
          </p>
        </Slide>
        <Slide title="Markup - HTML & CSS">
          <p class="fragment">
            HTML (HyperText Markup Language) è il linguaggio di markup standard
            per la creazione di pagine web.
          </p>
          <p class="fragment">
            CSS (Cascading Style Sheets) è un linguaggio usato per descrivere la
            presentazione di un documento scritto in HTML.
          </p>
        </Slide>
        <Slide title="Esempio di codice (1/2)">
          <p class="fragment">
            <pre>
              <code class="html">{htmlExample}</code>
            </pre>
          </p>
          <p class="fragment">
            <pre>
              <code class="css">{cssExample}</code>
            </pre>
          </p>
        </Slide>
        <Slide title="Esempio di codice (2/2)">
          <div class="r-stack">
            <img src="/screenshot1.png" alt="screenshot" />
          </div>
        </Slide>
        <Slide title="Linguaggi di programmazione">
          <p class="fragment">
            I linguaggi di programmazione sono strumenti utilizzati per scrivere
            istruzioni che vengono interpretate o compilate da un computer per
            eseguire determinate operazioni.
          </p>
          <p class="fragment">
            I principali linguaggi di programmazione utilizzati per sviluppare
            applicazioni web e mobile sono JavaScript, Python, Java, C# e Swift.
          </p>
        </Slide>
        <Slide title="JavaScript - Cos'è?">
          <p class="fragment">
            JavaScript è un linguaggio di programmazione ad alto livello.
          </p>
          <p class="fragment">
            JavaScript è il linguaggio di programmazione più utilizzato per
            sviluppare applicazioni web. È comunemente utilizzato per aggiungere
            interattività e dinamicità a un sito web.
          </p>
        </Slide>
        <Slide title="JavaScript - Esempio">
          <p class="fragment">
            <pre>
              <code class="javascript">{jsExample}</code>
            </pre>
          </p>
          <p class="fragment">
            Output
            <pre>
              <code>{jsOutputExample}</code>
            </pre>
          </p>
        </Slide>
        <Slide title="Introduzione al DOM">
          <p class="fragment">
            Il Document Object Model (DOM) è un concetto fondamentale nello
            sviluppo web, rappresentando la struttura gerarchica di un documento
            HTML o XML. Il DOM fornisce un’interfaccia di programmazione che
            consente agli sviluppatori di manipolare dinamicamente la struttura,
            i contenuti e lo stile di una pagina web.
          </p>
        </Slide>
        <Slide title="Funzionamento del DOM">
          <p class="fragment">
            Il DOM rappresenta ogni elemento del documento come un oggetto,
            consentendo agli sviluppatori di accedere, modificare e aggiornare
            il contenuto della pagina in tempo reale. La struttura ad albero del
            DOM riflette la gerarchia degli elementi nel documento, con il nodo
            radice rappresentante l’intera pagina e i nodi figli rappresentanti
            gli elementi HTML. Manipolare il DOM tramite JavaScript è essenziale
            per creare interattività e dinamismo nelle applicazioni web.
          </p>
        </Slide>
        <Slide title="Dove scriviamo il codice?">
          <p class="fragment">
            Durante il corso utilizzeremo un editor di testo per scrivere il
            codice.
          </p>
          <p class="fragment">
            Gli editor di testo più utilizzati sono Visual Studio Code, Sublime
            Text, Atom e Notepad++.
          </p>
        </Slide>
        <Slide title="Visual Studio Code">
          <div class="r-stack">
            <img src="/vscode.svg" alt="vscode" />
          </div>
          <a href="https://code.visualstudio.com/" target="_blank">
            code.visualstudio.com
          </a>
          <p class="fragment">
            Visual Studio Code è un editor di codice sorgente sviluppato da
            Microsoft.
          </p>
          <p class="fragment">
            Visual Studio Code è disponibile per Windows, macOS e Linux ed è
            gratuito e open source.
          </p>
        </Slide>
        <Slide title="Domande (1/2)">
          <p class="fragment">Cosa si intente per applicazione web?</p>
          <p class="fragment">Cosa si intente per applicazione mobile?</p>
          <p class="fragment">
            Quali sono le varie tipologie di applicazioni mobile?
          </p>
          <p class="fragment">Cosa si intente per browser?</p>
          <p class="fragment">Quali sono alcuni esempi di browser?</p>
        </Slide>
        <Slide title="Domande (2/2)">
          <p class="fragment">Cosa si intente per URL?</p>
          <p class="fragment">Cos'è l'HTML?</p>
          <p class="fragment">Cos'è il CSS?</p>
          <p class="fragment">Cos'è il JavaScript?</p>
          <p class="fragment">Cos'è il DOM?</p>
          <p class="fragment">Dove scriviamo il codice?</p>
        </Slide>
      </Deck>
    </main>
  )
})
