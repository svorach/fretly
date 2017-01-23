import React from 'react';

function NoteFilter({ setVisibilityFilter, activeFilter, filter }) {
  return (
    <div className="visibility-filter">
      <label htmlFor="filter">{filter}</label>
      <input
        type="radio"
        name="set-visibility-filter"
        checked={activeFilter === filter}
        onChange={(e) => setVisibilityFilter(e, filter)}
      />
    </div>
  );
}

NoteFilter.propTypes = {
  setVisibilityFilter: React.PropTypes.func.isRequired,
  activeFilter: React.PropTypes.string.isRequired,
  filter: React.PropTypes.string.isRequired,
};

export default NoteFilter;
