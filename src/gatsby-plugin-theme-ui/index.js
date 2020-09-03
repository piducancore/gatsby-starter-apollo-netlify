import { swiss as light, deep as dark } from "@theme-ui/presets"
import { merge } from "theme-ui"

export default merge(light, {
  colors: {
    modes: {
      dark: {
        ...dark.colors,
      },
    },
  },
  sizes: {
    container: 768,
  },
  styles: {
    code: {
      bg: `muted`,
      px: 1,
      borderRadius: 3,
    },
  },
})
