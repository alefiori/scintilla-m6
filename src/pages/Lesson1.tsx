import { component$ } from "@builder.io/qwik"
import { Deck, FirstSlide, Slide } from "../components"

export const Lesson1 = component$(() => {
  return (
    <main class="h-screen">
      <Deck>
        <FirstSlide lessonNumber={1} />
        <Slide title="Cosa vedremo in questo modulo?">
          <ul>
            <li>Cos'è un'applicazione web</li>
            <li>Cos'è un'applicazione mobile</li>
            <li>Markup - HTML & CSS</li>
            <li>JavaScript - concetti base</li>
            <li>Librerie e framework</li>
            <li>Sviluppo Backend - introduzione</li>
            <li>Come effettuare il rilascio di un'applicazione</li>
          </ul>
        </Slide>
        <Slide title="Cos'è un'applicazione web?">
          <p class="fragment">
            Un'applicazione web è un'applicazione software che viene eseguita su
            un server web e acceduta tramite un browser web.
          </p>
          <p class="fragment">
            Le applicazioni web possono essere accessibili da qualsiasi
            dispositivo connesso a internet.
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
            I browser più utilizzati sono Google Chrome, Mozilla Firefox,
            Safari, Microsoft Edge e Opera.
          </p>
          <p class="fragment">
            I browser sono in grado di interpretare e visualizzare pagine web
            scritte in HTML, CSS e JavaScript.
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
          <a href="https://code.visualstudio.com/">code.visualstudio.com</a>
          <p class="fragment">
            Visual Studio Code è un editor di codice sorgente sviluppato da
            Microsoft.
          </p>
          <p class="fragment">
            Visual Studio Code è disponibile per Windows, macOS e Linux ed è
            gratuito e open source.
          </p>
        </Slide>
      </Deck>
    </main>
  )
})
