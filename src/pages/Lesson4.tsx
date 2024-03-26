import { component$ } from "@builder.io/qwik"
import { Deck, FirstSlide, Slide } from "../components"

export const Lesson4 = component$(() => {
  return (
    <Deck>
      <FirstSlide lessonNumber={4} />
      <Slide title="Librerie e framework CSS">
        <p class="fragment">
          Le librerie CSS sono raccolte di file CSS predefiniti contenenti stili
          e regole che possono essere utilizzati per aggiungere rapidamente
          stile e design a un sito web.
        </p>
        <p class="fragment">
          I framework CSS sono strutture più complesse che includono non solo
          stili predefiniti, ma anche componenti, layout e spesso anche script
          JavaScript per l'interattività.
        </p>
      </Slide>
      <Slide title="Librerie e framework CSS">
        <p class="fragment">
          Entrambi semplificano il processo di sviluppo web consentendo agli
          sviluppatori di concentrarsi sul contenuto e sulla funzionalità senza
          dover scrivere codice CSS da zero.
        </p>
        <p class="fragment">
          Utilizzando librerie e framework CSS, è possibile creare siti web
          responsive, con un design coerente e una buona esperienza utente.
        </p>
      </Slide>
      <Slide title="Vantaggi">
        <p class="fragment">
          <strong>Velocità:</strong> Risparmio di tempo nello sviluppo.
        </p>
        <p class="fragment">
          <strong>Consistenza:</strong> Stili predefiniti per garantire un
          design coerente.
        </p>
        <p class="fragment">
          <strong>Responsività:</strong> Layout e componenti già pronti per
          adattarsi a diverse dimensioni di schermo.
        </p>
        <p class="fragment">
          <strong>Compatibilità:</strong> Testati su diversi browser e
          dispositivi.
        </p>
        <p class="fragment">
          <strong>Comunità:</strong> Supporto e documentazione online.
        </p>
      </Slide>
      <Slide title="Svantaggi">
        <p class="fragment">
          <strong>Personalizzazione:</strong> Limitazioni nella
          personalizzazione dei componenti.
        </p>
        <p class="fragment">
          <strong>Peso:</strong> File CSS e JavaScript aggiuntivi possono
          aumentare il tempo di caricamento della pagina.
        </p>
        <p class="fragment">
          <strong>Complessità:</strong> Alcuni framework possono essere
          complessi da imparare e utilizzare.
        </p>
        <p class="fragment">
          <strong>Overhead:</strong> Componenti non utilizzati possono aumentare
          le dimensioni del file finale.
        </p>
      </Slide>
      <Slide title="Principali Framework e Librerie CSS">
        <p class="fragment">
          <strong>Bootstrap:</strong> Framework popolare con componenti UI
          predefiniti e un sistema di griglia flessibile.
        </p>
        <p class="fragment">
          <strong>Foundation:</strong> Altro framework ampiamente utilizzato,
          con approccio modulare e personalizzabile.
        </p>
        <p class="fragment">
          <strong>Bulma:</strong> Libreria leggera e flessibile basata
          sull'approccio "utility-first".
        </p>
        <p class="fragment">
          <strong>Materialize:</strong> Basato sul design Material di Google,
          offre componenti UI vivaci.
        </p>
      </Slide>
      <Slide title="Principali Framework e Librerie CSS">
        <p class="fragment">
          <strong>Semantic UI:</strong> Framework che si basa sull'utilizzo di
          semantica HTML per costruire interfacce web.
        </p>
        <p class="fragment">
          <strong>Tailwind CSS:</strong> Libreria "utility-first" che offre un
          approccio basato su classi di utilità per la creazione di stili
          personalizzati.
        </p>
        <p class="fragment">
          <strong>Altri Framework e Librerie:</strong> Esistono numerosi altri
          framework e librerie con varie caratteristiche e casi d'uso.
        </p>
      </Slide>
      <Slide title="Considerazioni per la scelta">
        <p class="fragment">
          <strong>Scopo:</strong> Valutare se il framework soddisfa le esigenze
          del progetto.
        </p>
        <p class="fragment">
          <strong>Personalizzazione:</strong> Verificare se è possibile
          personalizzare i componenti e gli stili.
        </p>
        <p class="fragment">
          <strong>Dimensioni:</strong> Controllare le dimensioni dei file
          generati per evitare sovraccarichi.
        </p>
        <p class="fragment">
          <strong>Documentazione:</strong> Assicurarsi che ci sia una buona
          documentazione e supporto online.
        </p>
      </Slide>
      <Slide title="Considerazioni per la scelta">
        <p class="fragment">
          <strong>Esperienza:</strong> Scegliere un framework che si adatti alla
          propria esperienza e conoscenza.
        </p>
        <p class="fragment">
          <strong>Comunità:</strong> Verificare se c'è una comunità attiva e
          supporto online per il framework scelto.
        </p>
        <p class="fragment">
          <strong>Aggiornamenti:</strong> Controllare la frequenza degli
          aggiornamenti e la compatibilità con le nuove versioni.
        </p>
        <p class="fragment">
          <strong>Test:</strong> Effettuare test e valutazioni per verificare la
          compatibilità e le prestazioni del framework.
        </p>
      </Slide>
      <Slide title="Libreria vs Framework">
        <p class="fragment">
          <strong>Libreria:</strong> Raccolta di stili CSS predefiniti che
          possono essere utilizzati a piacimento.
        </p>
        <p class="fragment">
          <strong>Framework:</strong> Struttura più complessa che include
          componenti, layout e script JavaScript per l'interattività.
        </p>
      </Slide>
      <Slide title="Bootstrap - Storia">
        <p class="fragment">
          <strong>Bootstrap:</strong> Framework front-end open-source creato da
          Twitter nel 2011.
        </p>
        <p class="fragment">
          <strong>Obiettivo:</strong> Fornire uno strumento per la creazione di
          interfacce web responsive e consistenti.
        </p>
        <p class="fragment">
          <strong>Versioni:</strong> Bootstrap ha subito diverse evoluzioni e
          aggiornamenti nel corso degli anni.
        </p>
      </Slide>
      <Slide title="Bootstrap - Caratteristiche">
        <p class="fragment">
          <strong>Griglia:</strong> Sistema di griglia flessibile per la
          creazione di layout responsive.
        </p>
        <p class="fragment">
          <strong>Componenti:</strong> Numerosi componenti UI predefiniti come
          bottoni, modali, navbar, ecc.
        </p>
        <p class="fragment">
          <strong>Stili:</strong> Stili predefiniti per testo, colori, margini,
          padding, ecc.
        </p>
        <p class="fragment">
          <strong>JavaScript:</strong> Script per l'interattività come dropdown,
          carousel, modal, ecc.
        </p>
      </Slide>
      <Slide title="Bootstrap - Vantaggi">
        <p class="fragment">
          <strong>Rapidità:</strong> Creazione veloce di interfacce web
          responsive.
        </p>
        <p class="fragment">
          <strong>Consistenza:</strong> Design coerente e uniforme per tutti i
          componenti.
        </p>
        <p class="fragment">
          <strong>Personalizzazione:</strong> Possibilità di personalizzare i
          componenti e gli stili.
        </p>
        <p class="fragment">
          <strong>Documentazione:</strong> Ampia documentazione e supporto
          online.
        </p>
      </Slide>
      <Slide title="Bootstrap - Installazione">
        <p class="fragment">
          È possibile utilizzare Bootstrap aggiungendo i link ai file CSS e
          JavaScript tramite una CDN.
        </p>
        <pre class="fragment">
          <code>
            {`<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
/>`}
          </code>
        </pre>
        <pre class="fragment">
          <code>
            {`<script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
></script>`}
          </code>
        </pre>
        <a
          class="fragment"
          href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
          target="_blank"
        >
          Guida all'installazione di Bootstrap
        </a>
      </Slide>
      <Slide title="Bootstrap - Layout">
        <p class="fragment">
          Bootstrap utilizza un sistema di griglia flessibile basato su 12
          colonne per la creazione di layout responsive.
        </p>
        <pre class="fragment">
          <code>
            {`<div class="container">
    <div class="row">
        <div class="col-sm-6">Colonna 1</div>
        <div class="col-sm-6">Colonna 2</div>
    </div>
</div>`}
          </code>
        </pre>
        <a
          class="fragment"
          href="https://getbootstrap.com/docs/5.3/layout/grid/"
          target="_blank"
        >
          Guida al sistema di griglia di Bootstrap
        </a>
      </Slide>
      <Slide title="Bootstrap - componenti">
        <p class="fragment">
          Bootstrap offre numerosi componenti UI predefiniti come bottoni,
          modali, navbar, form, ecc.
        </p>
        <pre class="fragment">
          <code>{`<button class="btn btn-primary">Bottone</button>`}</code>
        </pre>
        <pre class="fragment">
          <code>
            {`<div class="modal">
    <div class="modal-dialog">
        <div class="modal-content">
            ...
        </div>
    </div>
</div>`}
          </code>
        </pre>
        <a
          class="fragment"
          href="https://getbootstrap.com/docs/5.3/components/"
          target="_blank"
        >
          Guida ai componenti di Bootstrap
        </a>
      </Slide>
      <Slide title="Bootstrap - personalizzazione">
        <p class="fragment">
          È possibile personalizzare Bootstrap utilizzando variabili CSS e
          modificando i file SCSS.
        </p>
        <pre class="fragment">
          <code>
            {`$primary: #007bff;
$secondary: #6c757d;
...
@import "bootstrap";`}
          </code>
        </pre>
        <a
          class="fragment"
          href="https://getbootstrap.com/docs/5.3/customize/sass/"
          target="_blank"
        >
          Guida alla personalizzazione di Bootstrap
        </a>
      </Slide>
      <Slide title="Bootstrap - esempi">
        <p class="fragment">
          Ecco alcuni esempi di componenti e layout realizzati con Bootstrap:
        </p>
        <p class="fragment">
          <a
            href="https://getbootstrap.com/docs/5.3/examples/album/"
            target="_blank"
          >
            Album
          </a>
        </p>
        <p class="fragment">
          <a
            href="https://getbootstrap.com/docs/5.3/examples/checkout/"
            target="_blank"
          >
            Checkout
          </a>
        </p>
        <p class="fragment">
          <a
            href="https://getbootstrap.com/docs/5.3/examples/dashboard/"
            target="_blank"
          >
            Dashboard
          </a>
        </p>
      </Slide>
    </Deck>
  )
})
