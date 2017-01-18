import React from 'react';
// import { notes, getNoteMap, getIndexMap } from '../../utils/noteUtils';

const Fret = ({ data }) => <div className="fret">{data}</div>;

Fret.propTypes = {
  data: React.PropTypes.string,
};

export default Fret;
