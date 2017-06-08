import React from 'react';
import PropTypes from 'prop-types';
import Control from '../controls/Control.jsx';

const Help = ({ show, toggle }) =>
  <section className={`info-help animated ${show ? 'on-canvas' : 'off-canvas'}`}>
    <header>
      <h2>About Fretly</h2>
      <p>
        Roadmap to stability and full planned feature list coming soon!
        For now, please have a look at the tips below.
        How you start depends on your needs.
        All feedback is welcome and greatly appreciated.
      </p>
    </header>

    <p>
      One of the most powerful things about Fretly is how extendable the chart is.
      Fretly is mobile first for extensive visual reference in your pocket, but quite useful
      on desktop for the writing musician as well.
    </p>

    <p>
      Fretly has a wide variety of uses and they all
      apply to any tuning, any number of strings.
      Bass players, 7, 8 and even 12 string guitars,
      banjoes, mandolins are all possible.
      Custom tunings will be coming very quickly but
      are already supported internally.
      Fretly was designed from the ground up to work
      with all fretted and stringed instruments.
    </p>

    <h2>WiP Features</h2>

    <ul>
      <li>
        <b>Note Reference</b>
      </li>
      <li>
        <b>Scale Reference</b>
        <ol>
          <li>Select a mode/scale from the list</li>
          <li>Tap on a note to select a root and complete the "key"</li>
          <li>You can filter out notes that are not in key using the controls below.</li>
          <li>
            Switch the
          </li>
        </ol>
      </li>
      <li>
        <b>Chord Discovery</b>
        <ol>
          <li>Start by selecting a note without having a scale/mode selected.</li>
          <li>Select another note.</li>
          <li>It is possible a chord has already been found, if not try a third note.</li>
          <li>If no chord found after four notes, resetting and trying again may help.</li>
          <li>Chances are you just need to widen your intervals! (gap between notes)</li>
          <li>Avoid chromatic selections (A, A#, B)</li>
          <li>Storing chords coming soon.</li>
          <li>Chord progression building coming soon.</li>
        </ol>
      </li>
    </ul>

    <Control text="Close Help" disabled={false} onClick={toggle} />
  </section>;

Help.propTypes = ({
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
});

export default Help;
