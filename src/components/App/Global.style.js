import { createGlobalStyle } from 'styled-components'
import PressStart2P from './../../assets/PressStart2P-Regular.ttf'

export const Global = createGlobalStyle`
  @font-face {
    font-family: 'PressStart2P';
    src: url(${PressStart2P}) format('truetype');
  }
  * {
    box-sizing: border-box;
  }
`