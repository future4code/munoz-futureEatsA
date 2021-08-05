import React from 'react';
import Divider from '@material-ui/core/Divider';
import {Retornar, Head} from './styled'
import { useHistory } from 'react-router-dom';


const Header = (props) => {

  const history = useHistory()

    return (
    <>    
    <Head>

     <Retornar
      onClick={props.onClickReturn}
      fontSize="small"
     />

    </Head>
    <Divider />
    </>
    )
}

export default Header