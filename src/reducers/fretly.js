import visibilityFilter from './visibilityFilter';

function fretly(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
}

export default fretly;