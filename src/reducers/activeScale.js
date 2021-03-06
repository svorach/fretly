import { CLEAR_SCALE, SET_ACTIVE_SCALE } from '../constants/actionTypes';

const scale = (state = {}, action) => {
  switch (action.type) {
    case CLEAR_SCALE:
      return {};
    case SET_ACTIVE_SCALE:
      return action.scale;
    default:
      return state;
  }
};

export default scale;
