import React from 'react';
import Divider from '@material-ui/core/Divider';
import { Retornar, Head } from './styled'

const Header = (props) => {
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
  );
};

export default Header;