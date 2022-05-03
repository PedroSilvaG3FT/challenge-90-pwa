import 'react-circular-progressbar/dist/styles.css'
import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${tw`text-base`}
    background: ${props => props.theme.colors.bgPrimary};
    color: ${props => props.theme.colors.text};
    font-family: 'Montserrat', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  button {
    ${tw`border-0`}
  }

  #__next {
      height: 100vh;
  }
`
