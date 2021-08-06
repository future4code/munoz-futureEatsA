import React from 'react';
import Header from '../Header/Header';

const Frame = (props) => {

      return (
    <>    
     <Header
      onClickReturn={props.onClickReturn}
     />
     <div>{props.page}</div>
    </>
    )
}

export default Frame