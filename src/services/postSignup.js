import axios from "axios"
import { BASE_URL } from '../Constants/url';
import { goToCadastroEndereco } from "../routes/cordinator";


export const postSignup = (body, clear, history) => {
    
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
          localStorage.setItem("token1", res.data.token)
            clear()
            goToCadastroEndereco(history)            
        })
        .catch((err) => {
            
            alert(err.response.data.message)
        })
}