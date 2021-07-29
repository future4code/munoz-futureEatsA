import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';


function Home () {
  useProtectedPage()
  return (
    <>
      <h1>E</h1>
    </>
  );
}

export default Home;
