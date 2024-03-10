import { component$ } from "@builder.io/qwik"
import { Deck, Slide } from "../components"

export const Lesson1 = component$(() => {
  return (
    <main class="h-screen">
      <Deck>
        <Slide>Slide 1</Slide>
        <Slide>Slide 2</Slide>
        <Slide>Slide 3</Slide>
        <Slide>Slide 4</Slide>
      </Deck>
    </main>
  )
})
