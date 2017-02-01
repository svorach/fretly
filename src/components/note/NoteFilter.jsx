import React from 'react';
import PropTypes from 'prop-types';

function NoteFilter({ setVisibilityFilter, visibilityFilter, filters }) {
  function getToggleButton() {
    if (visibilityFilter === filters.SHOW_ONLY_HIGHLIGHTED_NOTES) {
      return (
        <span>
          <a
            href="#"
            className="setting"
            onClick={(e) => setVisibilityFilter(e, filters.SHOW_ALL_NOTES)}
          >
            Show All Notes&nbsp;
            <i className="fa fa-toggle-off"></i>
          </a>
        </span>
      );
    }

    return (
      <span>
        <a
          href="#"
          className="setting active"
          onClick={(e) => setVisibilityFilter(e, filters.SHOW_ONLY_HIGHLIGHTED_NOTES)}
        >
          Show All Notes&nbsp;
          <i className="fa fa-toggle-on"></i>
        </a>
      </span>
    );
  }

  return (
    <div className="note-filters">
      <h2>Filter</h2>

      {getToggleButton(visibilityFilter)}
      <br /><br />
    </div>
  );
}

NoteFilter.propTypes = {
  setVisibilityFilter: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
};

export default NoteFilter;
