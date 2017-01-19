import React from 'react';
// import { notes, getNoteMap, getIndexMap } from '../../utils/noteUtils';

function Fret({ data, highlightNote }) {
  const classList = ['fret'];
  if (highlightNote(data)) {
    classList.push('highlight');
  }
  return (<div className={classList.join(' ')}>{data}</div>);
}

Fret.propTypes = {
  data: React.PropTypes.string,
  highlightNote: React.PropTypes.func,
};

export default Fret;
