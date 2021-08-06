import axios from "axios"
import { BASE_URL } from '../Constants/url';
<<<<<<< HEAD
import { goToHome } from "../routes/cordinator";
import FormHelperText from '@material-ui/core/FormHelperText';
=======
import { goToHome, goToCadastroEndereco } from "../routes/cordinator";
>>>>>>> master

export const logar = (body, clear, history) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((res)=>{
      localStorage.setItem("token", res.data.token)
      clear()
      goToHome(history)
    })
    .catch((err)=> alert(err.response.data.message))
  }




<<<<<<< HEAD
export const signUp = (body, clear, history) => {
    
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
          localStorage.setItem("token", res.data.token)
            clear()
            goToHome(history)            
        })
        .catch((err) => {
            
            alert(err.response.data.message)
        })
}
=======
>>>>>>> master
