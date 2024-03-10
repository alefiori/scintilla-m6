import { component$ } from "@builder.io/qwik"
import { Slide } from "."

type Props = {
  lessonNumber: number
}

export const FirstSlide = component$<Props>(({ lessonNumber }) => {
  return (
    <Slide>
      <h2 class="r-fit-text">Sviluppo di Applicazioni Web e Mobile</h2>
      <small>Lezione {lessonNumber}</small>
    </Slide>
  )
})
