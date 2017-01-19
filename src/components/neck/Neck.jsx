import React from 'react';
import String from '../string/String.jsx';
import { neck } from '../../utils/neckUtils';

const Neck = ({ highlight }) => {
  const mapStrings = (string, i) =>
    <String data={string} highlight={highlight} key={`string-${i}`} />;
  const getStrings = () => neck.map(mapStrings);

  return (<section className="neck">{getStrings()}</section>);
};

Neck.propTypes = {
  highlight: React.PropTypes.func,
};

export default Neck;
