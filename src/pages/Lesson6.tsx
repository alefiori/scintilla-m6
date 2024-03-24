import { component$ } from "@builder.io/qwik"
import { Deck, FirstSlide, Slide } from "../components"

export const Lesson6 = component$(() => {
  return (
    <Deck>
      <FirstSlide lessonNumber={6} />
      <Slide title="Librerie e framework JavaScript">
        <p class="fragment">
          Le librerie e i framework JavaScript sono strumenti che ci permettono
          di scrivere codice più facilmente e velocemente.
        </p>
        <p class="fragment">
          Le librerie sono collezioni di funzioni e oggetti che possiamo
          utilizzare per svolgere determinate operazioni.
        </p>
        <p class="fragment">
          I framework sono librerie che ci permettono di scrivere applicazioni
          seguendo uno schema prestabilito.
        </p>
      </Slide>
      <Slide title="Librerie e framework JavaScript">
        <p class="fragment">
          Alcune delle librerie e framework JavaScript più famosi sono:
        </p>
        <ul class="fragment">
          <li>React</li>
          <li>Angular</li>
          <li>Vue.js</li>
          <li>jQuery</li>
        </ul>
      </Slide>
      <Slide title="React">
        <p class="fragment">
          React è una libreria JavaScript sviluppata da Facebook per la
          creazione di interfacce utente.
        </p>
        <p class="fragment">
          Con React possiamo creare componenti riutilizzabili che vengono
          aggiornati automaticamente quando lo stato dell'applicazione cambia.
        </p>
      </Slide>
      <Slide title="Angular">
        <p class="fragment">
          Angular è un framework JavaScript sviluppato da Google per la
          creazione di applicazioni web.
        </p>
        <p class="fragment">
          Con Angular possiamo creare applicazioni web complesse seguendo uno
          schema prestabilito.
        </p>
      </Slide>
      <Slide title="Vue.js">
        <p class="fragment">
          Vue.js è un framework JavaScript sviluppato da Evan You per la
          creazione di applicazioni web.
        </p>
        <p class="fragment">
          Con Vue.js possiamo creare applicazioni web complesse seguendo uno
          schema prestabilito.
        </p>
      </Slide>
      <Slide title="jQuery">
        <p class="fragment">
          jQuery è una libreria JavaScript sviluppata da John Resig per
          semplificare la manipolazione del DOM e l'interazione con il browser.
        </p>
        <p class="fragment">
          jQuery è stata molto popolare negli ultimi anni, ma è stata superata
          da React, Angular e Vue.js.
        </p>
      </Slide>
      <Slide title="Criteri di scelta">
        <p class="fragment">
          Quando scegliamo una libreria o un framework JavaScript dobbiamo
          valutare diversi criteri:
        </p>
        <ul class="fragment">
          <li>Facilità d'uso</li>
          <li>Performance</li>
          <li>Documentazione</li>
          <li>Comunità</li>
        </ul>
      </Slide>
        <Slide title="Facilità d'uso">
            <p class="fragment">
            La facilità d'uso è un criterio importante quando scegliamo una
            libreria o un framework JavaScript.
            </p>
            <p class="fragment">
            Dobbiamo scegliere una libreria o un framework che ci permetta di
            scrivere codice in modo semplice e veloce.
            </p>
        </Slide>
        <Slide title="Performance">
            <p class="fragment">
            La performance è un criterio importante quando scegliamo una libreria
            o un framework JavaScript.
            </p>
            <p class="fragment">
            Dobbiamo scegliere una libreria o un framework che ci permetta di
            creare applicazioni veloci e reattive.
            </p>
        </Slide>
        <Slide title="Documentazione">
            <p class="fragment">
            La documentazione è un criterio importante quando scegliamo una
            libreria o un framework JavaScript.
            </p>
            <p class="fragment">
            Dobbiamo scegliere una libreria o un framework che abbia una
            documentazione chiara e completa.
            </p>
        </Slide>
        <Slide title="Comunità">
            <p class="fragment">
            La comunità è un criterio importante quando scegliamo una libreria o
            un framework JavaScript.
            </p>
            <p class="fragment">
            Dobbiamo scegliere una libreria o un framework che abbia una grande
            comunità di sviluppatori attivi.
            </p>
        </Slide>
    </Deck>
  )
})
