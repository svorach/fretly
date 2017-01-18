import React from 'react';
import String from '../string/String.jsx';
import { neck } from '../../utils/neckUtils';

const mapStrings = (string, i) => <String data={string} key={`string-${i}`} />;
const getStrings = () => neck.map(mapStrings);
const Neck = () => <section className="neck">{getStrings()}</section>;

Neck.propTypes = {
};

export default Neck;
