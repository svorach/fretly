import { FIND_CHORD } from '../constants/actionTypes';

const possibleChords = (state = [], action) => {
  switch (action.type) {
    case FIND_CHORD:
      return action.possibleChords;
    default:
      return state;
  }
};

export default possibleChords;
