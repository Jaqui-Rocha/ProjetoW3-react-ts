import imgLogin from '../../src/assets/images/imgLogin.jpg'
import { TextField, Box } from '@mui/material';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import ButtonLogin from '@/components/Button/buttonLogin';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({

  spacing:10,
});

const LoginForm=()=>{
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

return (
<ThemeProvider theme={theme}>
<div className='d-flex'>
  <form className='d-flex'>
    <h6 >Seja bem vindo!</h6>
    <h2>Realize seu login</h2>
    <div className='d-flex box'>
    <TextField  variant="outlined" label="Email" color="success"  size="small" />
    <TextField id="outlined-basic" label="Senha" type="password"  variant="outlined" color="success"  size="small" />
    <div className='between '><span className='font-weight'><Checkbox checked={checked} onChange={handleChange} />{checked ? 'Lembrar-me' : 'Lembrar-me'} </span> Esqueci minha senha</div>
    <ButtonLogin/>
    </div>
  </form>
  <div >
    <img src={imgLogin} className='imgLogin'/>
  </div>
</div>
</ThemeProvider>
)
}
export default LoginForm

