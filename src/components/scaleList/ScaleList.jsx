import React from 'react';
import Scale from './Scale.jsx';

const mapScales = (scales, setScale) =>
  scales.map((scale, i) => <Scale scale={scale} setScale={setScale} key={`scale-${i}`} />);

const ScaleList = ({ scales, setScale, clearScale }) =>
  <div>
    <h2>Scales</h2>
    <ul className="scale-list">
      {mapScales(scales, setScale)}
      <li><a href="" onClick={clearScale}>Clear Selected Scale</a></li>
    </ul>
  </div>;

ScaleList.propTypes = ({
  clearScale: React.PropTypes.func,
  scales: React.PropTypes.array,
  setScale: React.PropTypes.func,
});

export default ScaleList;
