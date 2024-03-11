import { component$ } from "@builder.io/qwik"
import { GenericSlide, Slide } from "."

type Props = {
  lessonNumber: number
}

export const FirstSlide = component$<Props>(({ lessonNumber }) => {
  return (
    <GenericSlide title="Sviluppo di Applicazioni Web e Mobile">
      <small>Lezione {lessonNumber}</small>
    </GenericSlide>
  )
})
