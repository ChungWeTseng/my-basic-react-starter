import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actionPlaceholder } from '../actions'

const Placeholder = props => {
  const [dataState, setdataState] = useState({
    data: 'State data',
  });

  const changeState = () => {
    setdataState({ data: 'Changed data'});
  }

  const actionPlaceholder = () => {
    props.actionPlaceholder(dataState.data);
  }

  console.log( 'props', props );

  return (
    <div>
      <h1> Component Placeholder </h1>
      <p> { dataState.data } </p>
      <button onClick={ changeState }> Change state </button>
      <button onClick={ actionPlaceholder }> Test reducer </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    placeholder: state
  }
}

export default connect(mapStateToProps, {actionPlaceholder})(Placeholder);