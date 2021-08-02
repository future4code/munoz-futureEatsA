import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer, TitleButton } from '../SignUpEnd/styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {postSignup} from '../../../services/postSignup'
import CircularProgress from '@material-ui/core/CircularProgress'


const CadastroForm = ({ setRightButtonText }) => {
    
    
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: '', email: '', cpf: '', password: '' })
    const [isLoading, setIsLoading] = useState(false)
    const [value, setValue] = useState({
        
        password1: false,
        password2: false,
        passwordConfirm: ""
    });   
       
    
    const handleClickShowPassword1 = () => {
        setValue({...value, password1: !value.password1});
        console.log(value.passwordConfirm)
    };

    const handleChange = (event) => {
        setValue({ ...value, passwordConfirm: event.target.value });
      };

      const handleClickShowPassword2 = () => {
        setValue({...value, password2: !value.password2});
        
    };

    const onSubmitForm = (event) => {
        event.preventDefault()
        postSignup(form, clear, history)
        
    }

    

    return (
        <form onSubmit={onSubmitForm}>

            <InputsContainer>
                <TextField
                    
                    value={form.name}
                    name={'name'}
                    onChange={onChange}
                    label={'Nome'}
                    variant={'outlined'}
                    fullWidth
                    required
                    autoFocus
                    margin={'normal'}
                />
                <TextField
                    value={form.email}
                    name={'email'}
                    onChange={onChange}
                    label={'E-mail'}
                    variant={'outlined'}
                    type={'email'}
                    fullWidth
                    required
                    margin={'normal'}
                />
                <TextField
                    value={form.cpf}
                    name={'cpf'}
                    onChange={onChange}
                    label={'Cpf'}
                    variant={'outlined'}
                    type={'text'}
                    fullWidth
                    required
                    margin={'normal'}
                />
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

                <FormControl
                    variant="outlined"
                    fullWidth
                    required
                    margin={'normal'}
                    error= {form.password !== value.passwordConfirm? true : false}
                    id="filled-error"
                    label="Error"
                    defaultValue="Hello World"
                    
                >
                    <InputLabel
                    

                    >Confirmar</InputLabel>
                    <OutlinedInput
                        aria-describedby="component-error-text"
                        type={value.password2? 'text' : 'password'}
                        name={'passwordConfirm'}
                        value={value.passwordConfirm}
                        onChange={handleChange}
                        variant={'outlined'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword2}
                                >
                                    {value.password2? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}

                    /> {form.password !== value.passwordConfirm? <FormHelperText>Digite a mesma senha para confirmar</FormHelperText> : false}</FormControl> 






            </InputsContainer>
            <Button
                color={'primary'}
                variant={'contained'}
                type={'submit'}
                fullWidth
            >
                {isLoading ? <CircularProgress   /> : <>Criar</>}
            </Button>

        </form>
    )
}

export default CadastroForm