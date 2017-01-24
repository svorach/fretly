import React from 'react';
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
  activeTuning: React.PropTypes.object,
  tunings: React.PropTypes.array,
  setActiveTuning: React.PropTypes.function,
});

export default TuningList;
