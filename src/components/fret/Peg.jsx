import React from 'react';
import PropTypes from 'prop-types';

import { NOTES } from '../../utils/noteUtils';

console.log(NOTES);

export const Peg = ({ changeTuning, string, note }) => {
  // console.log(changeTuning, string);

  const mapNotes = mapNote =>
    <option id={mapNote} key={mapNote}>{mapNote}</option>;

  return (
    <select onChange={e => changeTuning(e, string.stringNumber)} value={note}>
      {NOTES.map(mapNotes).reverse()}
    </select>
  );
};

Peg.propTypes = {
  changeTuning: PropTypes.func.isRequired,
  string: PropTypes.object.isRequired,
  note: PropTypes.string.isRequired,
};

export default Peg;
