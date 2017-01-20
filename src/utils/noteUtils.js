const OCTAVE_SEMITONE_COUNT = 12;

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const scales = [
  { name: 'C Major (Ionian)', notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'] },
  { name: 'D Lydian', notes: ['D', 'E', 'F#', 'G#', 'A', 'B', 'C#'] },
  { name: 'B Natural Minor', notes: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'] },
  { name: 'B Harmonic Minor', notes: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A#'] },
  { name: 'G Minor', notes: ['G', 'A', 'A#', 'C', 'D', 'D#', 'F'] },
];

/**
 * returns a map that allows for note lookup by index
 */
const getNoteMap = () => {
  const map = {};

  notes.map((note, i) => (map[note] = i));

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

export { notes, scales, getFretNote, getNoteMap, getIndexMap };
