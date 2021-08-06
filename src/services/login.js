import axios from "axios"
import { BASE_URL } from '../Constants/url';
import { goToHome } from "../routes/cordinator";
import FormHelperText from '@material-ui/core/FormHelperText';
export const logar = (body, clear, history) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((res)=>{
      localStorage.setItem("token", res.data.token)
      clear()
      goToHome(history)
    })
    .catch((err)=> alert(err.response.data.message))
  }




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
