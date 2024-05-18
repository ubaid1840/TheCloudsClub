// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/oswald'
import '@fontsource/source-code-pro'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  fonts : {
    heading: `'Oswald', sans-serif`,
    body: `'Source Code Pro', monospace`,
  }
}

// 3. extend the theme
const theme = extendTheme({ 
  fonts : {
    heading : 'Oswald',
    body : 'Source Code Pro'
  },
  initialColorMode: 'dark',
  components: {
    Button : {
      defaultProps: {
        colorScheme: 'teal', // default is gray
      },
    }
  }
 })

export default theme