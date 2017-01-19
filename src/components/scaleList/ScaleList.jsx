import React from 'react';
import Scale from './Scale.jsx';

const mapScales = (scales, setScale) =>
  scales.map((scale, i) => <Scale scale={scale} setScale={setScale} key={`scale-${i}`} />);

const ScaleList = ({ scales, setScale }) =>
  <ul className="scale-list">{mapScales(scales, setScale)}</ul>;

ScaleList.propTypes = ({
  scales: React.PropTypes.array,
  setScale: React.PropTypes.func,
});

export default ScaleList;