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
    font-family: 'Poppins', sans-serif;

  }
 .chat{
  width: 25vh;
  margin-left: 1vw;
 }
.logoMenu{
  width: 20vh;
  margin: 0 auto;
  margin-top: 3vw;
}
#hands{
  position: relative;
  transform: translateX(29px) translateY(60px);
  width: 20vh;
}
.dashboard{
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 15px;
  width: 98%;
  padding:5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-top: 3vw;
  text-decoration: none;
}
.dashboard:hover{
  background-color: #7682C1;
  font-weight: bold;
}
.predicoes{
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 15px;
  width: 98%;
  padding:5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-top: 3vw;
  text-decoration: none;
}
.predicoes:hover{
  background-color: #7682C1;
  font-weight: bold;
}
.produtos{
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 15px;
  width: 98%;
  padding:5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-top: 3vw;
  text-decoration: none;
}
.produtos:hover{
  background-color: #7682C1;
  font-weight: bold;
}
.d-flex{
  display: flex;
  flex-direction:column;
  margin: 10px;
  justify-content: center;
 }
img.imgLogin{
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 15px;
}
.box{
  width: 400px;

}
.font-weight{
  font-weight: bold;

}
.between{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
}
.ButtonLogin{
  background-color: #001C98;
  border:none;
  color:white;
  width: 400px;
  border-radius:5px;
  height: 6vh;
  gap:10px;
}
`
