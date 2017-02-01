import { SET_STRINGS } from '../constants/actionTypes';
import { TUNINGS as tunings } from '../constants/tunings';
import { buildStrings } from '../utils/neckUtils';

const defaultTuning = {
  name: tunings[0].name,
  strings: buildStrings(tunings[0].strings),
};

const tuning = (state = defaultTuning, action) => {
  switch (action.type) {
    case SET_STRINGS:
      return {
        name: action.tuning.name,
        strings: buildStrings(action.tuning.strings),
      };
    default:
      return state;
  }
};

export default tuning;
