import React from 'react';
import PropTypes from 'prop-types';
import String from '../string/String.jsx';

const Neck = ({ strings, rootNote, highlight, showOnHighlight, selectNote, isNoteSelected }) => {
  const mapStrings = (string, i) =>
    <String
      data={string}
      highlight={highlight}
      selectNote={selectNote}
      rootNote={rootNote}
      showOnHighlight={showOnHighlight}
      isNoteSelected={isNoteSelected}
      key={`string-${i}`}
    />;

  return (
    <section className="neck-container">
      <section className="neck">{strings.map(mapStrings)}</section>
    </section>
  );
};

Neck.propTypes = {
  strings: PropTypes.array.isRequired,
  rootNote: PropTypes.string,
  highlight: PropTypes.func.isRequired,
  showOnHighlight: PropTypes.bool.isRequired,
  selectNote: PropTypes.func.isRequired,
  isNoteSelected: PropTypes.func.isRequired,
};

export default Neck;
