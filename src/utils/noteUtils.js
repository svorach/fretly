const NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const NOTES_FLAT = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
const OCTAVE_SEMITONE_COUNT = NOTES.length;

/**
 * returns a map that allows for note lookup by index
 */
const getNoteMap = () => {
  const map = {};

  NOTES.map((note, i) => (map[note] = i));

  return map;
};

/**
 * returns a map that allows for index lookup by note
 */
const getIndexMap = () => {
  const map = {};
  const noteMap = getNoteMap();

  Object.keys(noteMap).map((note, i) => (map[i] = note));

  return map;
};

const normalizeFretIndex = (index) => {
  let normalizedIndex;

  if (index >= OCTAVE_SEMITONE_COUNT) {
    normalizedIndex = index - (OCTAVE_SEMITONE_COUNT);
  } else {
    normalizedIndex = index;
  }

  return normalizedIndex;
};

const getFretNote = (rootNote, index) => {
  const rootIndex = getNoteMap()[rootNote];
  const normalizedIndex = normalizeFretIndex(index);
  let noteIndex;

  if (rootIndex + normalizedIndex <= (OCTAVE_SEMITONE_COUNT - 1)) {
    noteIndex = rootIndex + normalizedIndex;
  } else {
    noteIndex = rootIndex + normalizedIndex - OCTAVE_SEMITONE_COUNT;
  }

  return getIndexMap()[noteIndex];
};

export { NOTES, getFretNote, getNoteMap, getIndexMap };
