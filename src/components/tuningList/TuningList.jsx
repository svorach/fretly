import React from 'react';
import PropTypes from 'prop-types';
import Tuning from './Tuning.jsx';

const mapTunings = (activeTuning, tunings, setActiveTuning) =>
  tunings.map((tuning, i) =>
    <Tuning
      tuning={tuning}
      setActiveTuning={setActiveTuning}
      key={`tuning-${i}`}
    />
  );

const TuningList = ({ activeTuning, tunings, setActiveTuning }) =>
  <div>
    <h2>Tunings</h2>
    <ul className="tuning-list">
      {mapTunings(activeTuning, tunings, setActiveTuning)}
    </ul>
  </div>;

TuningList.propTypes = ({
  activeTuning: PropTypes.object,
  tunings: PropTypes.array,
  setActiveTuning: PropTypes.function,
});

export default TuningList;
