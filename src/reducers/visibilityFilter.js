import { SHOW_ALL_NOTES } from '../constants/actions';
import { SET_VISIBILITY_FILTER } from '../constants/actionTypes';

function visibilityFilter(state = SHOW_ALL_NOTES, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
