import { component$ } from "@builder.io/qwik"
import { Slide } from "."

type Props = {
  lessonNumber: number
}

export const FirstSlide = component$<Props>(({ lessonNumber }) => {
  return (
    <Slide
      title="Sviluppo di Applicazioni Web e Mobile"
      className="top-1/2 -translate-y-1/2"
    >
      <small>Lezione {lessonNumber}</small>
    </Slide>
  )
})
