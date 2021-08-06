import React from 'react';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';

const Frame = (props) => {

  const history = useHistory();

  return (
    <>
      <Header
        onClickReturn={() =>history.push(props.onClickString)}
      />
      <div>{props.page}</div>
    </>
  );
};

export default Frame;