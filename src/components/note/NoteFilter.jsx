import React from 'react';

function NoteFilter({ setVisibilityFilter, activeFilter, filters }) {
  function getToggleButton() {
    if (activeFilter === filters.SHOW_ONLY_HIGHLIGHTED_NOTES) {
      return (
        <span>
          <a href="#" onClick={(e) => setVisibilityFilter(e, filters.SHOW_ALL_NOTES)}>
            <i className="fa fa-toggle-off"></i>
          </a>
        </span>
      );
    }

    return (
      <span>
        <a href="#" onClick={(e) => setVisibilityFilter(e, filters.SHOW_ONLY_HIGHLIGHTED_NOTES)}>
          <i className="fa fa-toggle-on"></i>
        </a>
      </span>
    );
  }

  return (
    <div className="note-filters">
      <h2>Filter</h2>
      <label htmlFor="filter">Show All Notes</label>&nbsp;

      {getToggleButton(activeFilter)}
      <br /><br />
    </div>
  );
}

NoteFilter.propTypes = {
  setVisibilityFilter: React.PropTypes.func.isRequired,
  activeFilter: React.PropTypes.string.isRequired,
  filters: React.PropTypes.object.isRequired,
};

export default NoteFilter;
