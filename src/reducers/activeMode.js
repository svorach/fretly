import { CLEAR_MODE, SET_ACTIVE_MODE } from '../constants/actionTypes';

const scale = (state = {}, action) => {
  switch (action.type) {
    case CLEAR_MODE:
      return {};
    case SET_ACTIVE_MODE:
      return action.scale;
    default:
      return state;
  }
};

export default scale;
