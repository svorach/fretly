import React from 'react';

function NoteFilter({ setVisibilityFilter, visibilityFilter, filters }) {
  function getToggleButton() {
    if (visibilityFilter === filters.SHOW_ONLY_HIGHLIGHTED_NOTES) {
      return (
        <span>
          <a href="#" onClick={(e) => setVisibilityFilter(e, filters.SHOW_ALL_NOTES)}>
            Show All Notes&nbsp;
            <i className="fa fa-toggle-off"></i>
          </a>
        </span>
      );
    }

    return (
      <span>
        <a href="#" onClick={(e) => setVisibilityFilter(e, filters.SHOW_ONLY_HIGHLIGHTED_NOTES)}>
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
  setVisibilityFilter: React.PropTypes.func.isRequired,
  visibilityFilter: React.PropTypes.string.isRequired,
  filters: React.PropTypes.object.isRequired,
};

export default NoteFilter;
