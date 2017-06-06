import React from 'react';
import PropTypes from 'prop-types';

function NoteFilter({ setVisibilityFilter, visibilityFilter, filters }) {
  const statusClass = (visibilityFilter === filters.SHOW_ONLY_HIGHLIGHTED_NOTES) ? 'off' : 'on';

  /**
   * THIS NEEDS TO MOVE TO APP.JSX
   */
  const toggle = (e) => {
    e.preventDefault();

    if (visibilityFilter === filters.SHOW_ONLY_HIGHLIGHTED_NOTES) {
      setVisibilityFilter(e, filters.SHOW_ALL_NOTES);
    } else {
      setVisibilityFilter(e, filters.SHOW_ONLY_HIGHLIGHTED_NOTES);
    }
  };

  return (
    <a
      href=""
      className={`control setting ${statusClass}`}
      onClick={(e) => { toggle(e); }}
    >
      Show All Notes
    </a>
  );
}

NoteFilter.propTypes = {
  setVisibilityFilter: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
};

export default NoteFilter;
