import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
/* import {signUp} from "../../services/user" */
import CircularProgress from '@material-ui/core/CircularProgress'
import useUnProtectedPage from '../../hooks/useUnprotectedPage'

const CadastroForm = ({ setRightButtonText }) => {
    useUnProtectedPage()
    
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: '', email: '', cpf: '', password: '' })
    const [isLoading, setIsLoading] = useState(false)
    const [valuePassword, setValuePassword] = useState(false);   
       

    const handleClickShowPassword = () => {
        setValuePassword(!valuePassword);
    };

    const onSubmitForm = (event) => {
        event.preventDefault()
        /* signUp(form, clear, history, setRightButtonText, setIsLoading) */
        console.log("clicou", form)
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
                /* InputLabelProps={{
                    shrink: true,
                }} */



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
                    value={form.password}
                    InputLabelProps={{
                        shrink: true,
                    }}
                >
                    <InputLabel

                    >Password</InputLabel>
                    <OutlinedInput
                        type={valuePassword ? 'text' : 'password'}
                        value={form.password}
                        onChange={onChange}
                        name={'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}

                                >
                                    {valuePassword ? <Visibility /> : <VisibilityOff />}
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
                    
                    

                >
                    <InputLabel

                    >Confirmar</InputLabel>
                    <OutlinedInput
                        type={valuePassword? 'text' : 'password'}
                        name={'password'}
                        value={form.password}
                        onChange={onChange}
                        variant={'outlined'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {valuePassword? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}

                    /> </FormControl>






            </InputsContainer>
            <Button
                color={'primary'}
                variant={'contained'}
                type={'submit'}
                fullWidth
            >
                {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Fazer Cadastro</>}
            </Button>

        </form>
    )
}

export default CadastroForm