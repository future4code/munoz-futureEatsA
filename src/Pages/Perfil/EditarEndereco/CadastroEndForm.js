import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer, TitleButton } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import {putNewAdress} from '../../../services/putNewAdress'
import CircularProgress from '@material-ui/core/CircularProgress'


const CadastroEndForm = ({ setRightButtonText }) => {
    
    
    const history = useHistory()
    const [form, onChange, clear] = useForm({ street: '', number: '', neighbourhood: '', city: '', state: '', complement: '' })
    const [isLoading, setIsLoading] = useState(false)   

    

    const onSubmitForm = (event) => {
        event.preventDefault()
        putNewAdress(form, clear, history)
        
    }

    

    return (
        <form onSubmit={onSubmitForm}>

            <InputsContainer>
                <TextField
                    
                    value={form.street}
                    name={'street'}
                    onChange={onChange}
                    label={'Rua/Av'}
                    variant={'outlined'}
                    fullWidth
                    required
                    autoFocus
                    margin={'normal'}
                    
                />
                <TextField
                    value={form.number}
                    name={'number'}
                    onChange={onChange}
                    label={'Número'}
                    variant={'outlined'}
                    type={'number'}
                    fullWidth
                    required
                    margin={'normal'}
                />
                <TextField
                    value={form.complement}
                    name={'complement'}
                    onChange={onChange}
                    label={'Complemento'}
                    variant={'outlined'}
                    type={'text'}
                    fullWidth                   
                    margin={'normal'}
                />
                <TextField
                    value={form.neighbourhood}
                    name={'neighbourhood'}
                    onChange={onChange}
                    label={'Bairro'}
                    variant={'outlined'}
                    type={'text'}
                    fullWidth
                    required
                    margin={'normal'}
                />
                <TextField
                    value={form.city}
                    name={'city'}
                    onChange={onChange}
                    label={'Cidade'}
                    variant={'outlined'}
                    type={'text'}
                    fullWidth
                    required
                    margin={'normal'}
                />
                <TextField
                    value={form.state}
                    name={'state'}
                    onChange={onChange}
                    label={'Estado'}
                    variant={'outlined'}
                    type={'text'}
                    fullWidth
                    required
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

export default CadastroEndForm