import { deep as baseStyles } from "@theme-ui/presets"
export default {
  ...baseStyles,
  sizes: {
    container: 768,
  },
  styles: {
    ...baseStyles.styles,
    p: {
      // wordBreak: `break-all`,
    },
    code: {
      ...baseStyles.styles.code,
      bg: `muted`,
      px: 1,
      borderRadius: 3,
    },
  },
}
