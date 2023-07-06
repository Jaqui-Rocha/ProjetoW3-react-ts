import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --dark: #313131;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body, input, select, textarea {
    font-size: 1rem;
    color: var(--dark);
  }
 .chat{
 width: 35vh;
 margin: 0 auto;
 }
.logoMenu{
  width: 30vh;
  margin: 0 auto;
  margin-top: 3vw;
}
#hands{
  position: relative;
  transform: translateX(30px) translateY(100px);
}
`
