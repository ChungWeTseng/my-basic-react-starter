import React, { useState } from 'react'

const Placeholder = () => {
  const [dataState, setdataState] = useState({
    data: 'State data',
  });

  const changeState = () => {
    setdataState({ data: 'Changed data'});
  }

  return (
    <div>
      <h1> Component Placeholder </h1>
      <p> { dataState.data } </p>
      <button onClick={ changeState }> Change state </button>
    </div>
  );
}

export default Placeholder
