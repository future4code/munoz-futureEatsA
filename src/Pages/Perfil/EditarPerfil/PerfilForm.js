import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer} from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import {putUpProfile} from '../../../services/putUpProfile'
import CircularProgress from '@material-ui/core/CircularProgress'


const PerfilForm = ({ setRightButtonText }) => {
    
    
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: '', email: '', cpf: ''})
    const [isLoading, setIsLoading] = useState(false)   

    

    const onSubmitForm = (event) => {
        event.preventDefault()
        putUpProfile(form, clear, history)
        
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
                    label={'Email'}
                    variant={'outlined'}
                    type={'text'}
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
                    margin={'normal'}
                />
                
            </InputsContainer>
            <Button
                color={'primary'}
                variant={'contained'}
                type={'submit'}
                fullWidth
                
            >
                {isLoading ? <CircularProgress   /> : <>Salvar</>}
            </Button>

        </form>
    )
}

export default PerfilForm