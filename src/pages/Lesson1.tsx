import { component$ } from "@builder.io/qwik"
import { Deck, FirstSlide, GenericSlide } from "../components"

export const Lesson1 = component$(() => {
  return (
    <main class="h-screen relative">
      <Deck>
        <FirstSlide lessonNumber={1} />
        <GenericSlide title="Cosa vedremo in questo modulo?">
          <ul>
            <li>Introduzione allo sviluppo di applicazioni web e mobile</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript - introduzione</li>
            <li>Librerie e framework</li>
            <li>Sviluppo Backend - introduzione</li>
            <li>Come effettuare il rilascio di un'applicazione</li>
          </ul>
        </GenericSlide>
        <GenericSlide title="Cos'è un'applicazione web?" />
        <GenericSlide title="Cos'è un'applicazione mobile?" />
        <GenericSlide title="Quali sono le varie tipologie di applicazioni mobile?" />
      </Deck>
    </main>
  )
})
