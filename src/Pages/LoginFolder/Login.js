import React from 'react';
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


const ButtonSubmit = styled(Button)({
 marginTop: 15,
 height: 45
})

const ButtonSignUp= styled(Button)({
  textTransform: 'none'
 })
 

const Login = () => {
  /* useUnProtectedPage() */

  const history = useHistory()
  
  const [form, onChange, clear] = useForm({email: "", password: ""})


  const onSubmitForm = (event) => {
    event.preventDefault()
    logar(form, clear, history)
  }

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

        <TextField
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
        />

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
