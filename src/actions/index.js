import { ACTION_PLACEHOLDER } from '../constants';

export const actionPlaceholder = (data) => {
  const action = {
    type: ACTION_PLACEHOLDER,
    data
  }

  return action
}
