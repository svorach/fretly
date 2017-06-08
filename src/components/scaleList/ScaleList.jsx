import React from 'react';
import PropTypes from 'prop-types';
import Scale from './Scale.jsx';

import { MODES } from '../../constants/scales';

const mapScales = (scales, activeScale, setActiveScale) =>
  MODES.map((scale, i) =>
    <Scale
      scale={scale}
      setActiveScale={setActiveScale}
      activeScale={activeScale}
      key={`scale-${i}`}
    />
  );

const ScaleList = ({ scales, activeScale, setActiveScale }) =>
  <div className="list-container">
    <h2>Modes</h2>
    <ul className="list scale-list">
      {mapScales(scales, activeScale, setActiveScale)}
    </ul>
  </div>;

ScaleList.propTypes = ({
  scales: PropTypes.array,
  activeScale: PropTypes.object,
  setActiveScale: PropTypes.func,
});

export default ScaleList;
