import React from 'react';
import PropTypes from 'prop-types';

const mapChords = (chords) =>
  chords.map((chord, i) =>
    <li className="chord" key={`chord-${i}`}>
      Chord: <span className="chord-name">{chord.chord}</span>
      <br />
      Notes: <span className="chord-notes">{chord.notes}</span>
    </li>
  );

const renderChordList = (chords) => {
  if (chords.length) {
    return (
      <div className="list-container">
        <h2>Possible Chords</h2>
        <ul className="list chord-list">
          {mapChords(chords)}
        </ul>
      </div>
    );
  }

  return <span></span>;
};

const ChordList = ({ chords }) => renderChordList(chords);

ChordList.propTypes = ({
  chords: PropTypes.array,
});

export default ChordList;
