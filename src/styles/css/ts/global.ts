import 'react-circular-progressbar/dist/styles.css'
import 'react-toastify/dist/ReactToastify.css'

import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export default createGlobalStyle`
   :root {
    --toastify-color-dark: ${props => props.theme.colors.bgSecondary};
   }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
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
