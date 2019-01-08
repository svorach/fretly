import React from 'react';
import PropTypes from 'prop-types';
import Fret from '../fret/Fret.jsx';

const String = ({
  data,
  rootNote,
  highlight,
  showOnHighlight,
  selectNote,
  isNoteSelected,
  changeTuning,
}) => {
  console.log(data);
  const mapFrets = (fret, i) =>
    <Fret
      fret={i}
      note={fret}
      string={data}
      highlight={highlight}
      showOnHighlight={showOnHighlight}
      selectNote={selectNote}
      isNoteSelected={isNoteSelected}
      isRootNote={fret === rootNote}
      changeTuning={changeTuning}
      key={`fret-${i}`}
    />;

  return (<div className="string">{data.frets.map(mapFrets)}</div>);
};

String.propTypes = {
  data: PropTypes.object,
  rootNote: PropTypes.string,
  highlight: PropTypes.func.isRequired,
  showOnHighlight: PropTypes.bool.isRequired,
  selectNote: PropTypes.func.isRequired,
  isNoteSelected: PropTypes.func.isRequired,
  changeTuning: PropTypes.func.isRequired,
};

export default String;
