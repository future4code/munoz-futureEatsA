import React, { useState } from 'react'
import {ScreenContainer, InputContainer, Title, Img} from './styled'
import logo from '../../assets/logo.png'
import useForm from '../../hooks/useForm'
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import {goToCadastroSignUp} from "../../routes/cordinator"
import {logar} from '../../services/login'
import useUnProtectedPage from '../../hooks/useUnprotectedPage';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';


const ButtonSubmit = styled(Button)({
 marginTop: 15,
 height: 45
})

const ButtonSignUp= styled(Button)({
  textTransform: 'none'
 })
 

const Login = () => {
  useUnProtectedPage()

  const history = useHistory()
  
  const [form, onChange, clear] = useForm({email: "", password: ""})
  const [value, setValue] = useState({
    password1: false,
    passwordConfirm: ""
  });   


  const onSubmitForm = (event) => {
    event.preventDefault()
    logar(form, clear, history)
  }

  const handleClickShowPassword1 = () => {
    setValue({...value, password1: !value.password1});
};

  return (
    <ScreenContainer>
      <Img src={logo}></Img>

      <Title>
        <p>Entrar</p>
      </Title>

      <InputContainer>
         <form onSubmit={onSubmitForm}>

         <TextField
          required
          label="E-mail"
          placeholder="email@email.com"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          fullWidth
          type={"email"}

          name={"email"}
          value={form.email}
          onChange={onChange}
        />

        {/* <TextField
          required
          label="Senha"
          placeholder="Minimo 6 caracteres"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          fullWidth
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
        /> */}

        <FormControl       
          variant="outlined"
          fullWidth
          required
          margin={'normal'}                    
          label={'Senha'}
          value={form.password1}
          InputLabelProps={{
                  shrink: true,
          }}
          >
          <InputLabel

          >Password</InputLabel>
          <OutlinedInput
          type={value.password1 ? 'text' : 'password'}
          value={form.password}
          onChange={onChange}
          name={'password'}
          endAdornment={
          <InputAdornment position="end">
                <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword1}
                 >
          {value.password1 ? <Visibility /> : <VisibilityOff />}
          </IconButton>
          </InputAdornment>
          }
          labelWidth={70}
         /> </FormControl>


        <ButtonSubmit 
        type={"submit"}
        fullWidth
        variant={"contained"}
        color={"primary"}
        >
          Entrar
        </ButtonSubmit>    
     
         </form>
      </InputContainer>

      <div className="SignUpButtonContainer">
       <ButtonSignUp 
        onClick={() => goToCadastroSignUp(history)}
        type={"submit"}
        fullWidth
        variant={"text"}
        
        >
        Não possui cadastro? Clique aqui.
        </ButtonSignUp>    
      </div>

    </ScreenContainer>
  );
}

export default Login;
