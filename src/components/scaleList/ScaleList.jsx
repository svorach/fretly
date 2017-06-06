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
<<<<<<< HEAD
<<<<<<< HEAD
  <div className="list-container">
    <h2>Modes - {activeScale.name} <a href=""></a></h2>
    <ul className="list scale-list">
=======
  <div>
    <h2>Modes - {activeScale.name} <a href=""></a></h2>
    <ul className="scale-list">
>>>>>>> c4ef9c0... Wired up a possible chords component. UX sucks.
=======
  <div className="list-container">
    <h2>Modes - {activeScale.name} <a href=""></a></h2>
    <ul className="list scale-list">
>>>>>>> a59a8b3... Finished rebase of UX, improved UX after merge.
      {mapScales(scales, activeScale, setActiveScale)}
    </ul>
  </div>;

ScaleList.propTypes = ({
  scales: PropTypes.array,
  activeScale: PropTypes.object,
  setActiveScale: PropTypes.func,
});

export default ScaleList;
