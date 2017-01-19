import React from 'react';
import String from '../string/String.jsx';
import { neck } from '../../utils/neckUtils';

const Neck = ({ highlightNote }) => {
  const mapStrings = (string, i) => <String data={string} highlightNote={highlightNote} key={`string-${i}`} />;
  const getStrings = () => neck.map(mapStrings);

  return (<section className="neck">{getStrings()}</section>);
};

Neck.propTypes = {
  highlightNote: React.PropTypes.func,
};

export default Neck;
