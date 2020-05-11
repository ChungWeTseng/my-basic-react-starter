import { ACTION_PLACEHOLDER } from '../constants';

const placeholder = (action) => {
  return {
    data: action.data,
    id: Math.random()
  }
}

const placeholders = (state = [], action) => {
  let placeholders = null;
  switch(action.type) {
    case ACTION_PLACEHOLDER:
      placeholders = [...state, placeholder(action)]; //Adding action to an state array. Change to your action
      console.log('action placeholders', placeholders);
      return placeholders;
    default:
      return state;
  }
}

export default placeholders;