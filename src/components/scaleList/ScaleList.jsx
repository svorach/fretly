import React from 'react';
import Scale from './Scale.jsx';

const mapScales = (scales, activeScale, setActiveScale) =>
  scales.map((scale, i) =>
    <Scale
      scale={scale}
      setActiveScale={setActiveScale}
      activeScale={activeScale}
      key={`scale-${i}`}
    />
  );

const ScaleList = ({ scales, activeScale, setActiveScale }) =>
  <div>
    <h2>Scales</h2>
    <ul className="scale-list">
      {mapScales(scales, activeScale, setActiveScale)}
    </ul>
  </div>;

ScaleList.propTypes = ({
  scales: React.PropTypes.array,
  activeScale: React.PropTypes.object,
  setActiveScale: React.PropTypes.func,
});

export default ScaleList;
