import React from 'react';
import NoteFilter from './NoteFilter.jsx';

const mapNoteFilters = (setVisibilityFilter, activeFilter, filters) => 
  filters.map((filter, i) =>
    <NoteFilter setVisibilityFilter={setVisibilityFilter} activeFilter={activeFilter} filter={filter} key={'filter' + i} />);

function NoteFilterList({ setVisibilityFilter, activeFilter, filters }) {
  return (
    <div className="note-filters">
      <h2>Filter</h2>
      {mapNoteFilters(setVisibilityFilter, activeFilter, filters)}
      <br />
    </div>
  );
}

NoteFilterList.propTypes = {
  setVisibilityFilter: React.PropTypes.func.isRequired,
  activeFilter: React.PropTypes.string.isRequired,
  filters: React.PropTypes.array.isRequired,
};

export default NoteFilterList;
