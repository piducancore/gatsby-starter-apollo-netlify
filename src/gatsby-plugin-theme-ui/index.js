import { swiss as light, deep as dark } from "@theme-ui/presets"

export default {
  ...light,
  colors: {
    ...light.colors,
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
    ...light.styles,
    code: {
      ...light.styles.code,
      bg: `muted`,
      px: 1,
      borderRadius: 3,
    },
  },
}
