import { SELECT_ROOT_NOTE, CLEAR_ROOT_NOTE } from '../constants/actionTypes';

const rootNote = (state = '', action) => {
  switch (action.type) {
    case SELECT_ROOT_NOTE:
      return action.note;
    case CLEAR_ROOT_NOTE:
      return '';
    default:
      return state;
  }
};

export default rootNote;
