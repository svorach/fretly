import { TOGGLE_HELP } from '../constants/actionTypes';

const showHelp = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_HELP:
      return action.showHelp;
    default:
      return state;
  }
};

export default showHelp;
