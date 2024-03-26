import { Options } from "reveal.js"
import RevealHighlight from "reveal.js/plugin/highlight/highlight"
import RevealNotes from "reveal.js/plugin/notes/notes"

export const revealConfig: Options = {
  controls: true,
  progress: true,
  slideNumber: false,
  hash: true,
  center: false,
  plugins: [RevealHighlight, RevealNotes],
}
