import _ from 'lodash';
import { SELECT_NOTE, CLEAR_NOTES } from '../constants/actionTypes';

const selectedNotes = (state = [], action) => {
  let nextState = state.slice();

  switch (action.type) {
    case SELECT_NOTE:
      if (state.indexOf(action.note) === -1) {
        nextState.push(action.note);
      } else {
        nextState = _.without(nextState, action.note);
      }

      return nextState;
    case CLEAR_NOTES:
      return [];
    default:
      return state;
  }
};

export default selectedNotes;
