import React from 'react';
import PropTypes from 'prop-types';
import Scale from './Scale.jsx';

import { MODES } from '../../constants/scales';

let classes = '';
let open = true;

const mapScales = (scales, activeScale, setActiveScale) =>
  MODES.map((scale, i) =>
    <Scale
      scale={scale}
      setActiveScale={setActiveScale}
      activeScale={activeScale}
      key={`scale-${i}`}
    />
  );

const toggle = (e) => {
  e.preventDefault();

  open = !open;
  classes = open ? 'open' : 'collapsed';

  return null;
};

const ScaleList = ({ scales, activeScale, setActiveScale }) =>
  <div>
    <h2 onClick={toggle} >Modes {activeScale.name} <a href="">-</a></h2>
    <ul className={`scale-list  ${classes}`}>
      {mapScales(scales, activeScale, setActiveScale)}
    </ul>
  </div>;

ScaleList.propTypes = ({
  scales: PropTypes.array,
  activeScale: PropTypes.object,
  setActiveScale: PropTypes.func,
});

export default ScaleList;
