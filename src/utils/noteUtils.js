import tonal from 'tonal';
// FUTURE: Unit Test!!!!
const NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const FLAT_TO_SHARP_MAP = {
  Ab: 'G#',
  Bb: 'A#',
  Cb: 'B',
  Db: 'C#',
  Eb: 'D#',
  Fb: 'E',
  Gb: 'F#',
  Abb: 'G',
  Bbb: 'A',
  Cbb: 'A#',
  Dbb: 'C',
  Ebb: 'D',
  Fbb: 'D#',
  Gbb: 'F',
};

const DOUBLE_SHARP_MAP = {
  'A##': 'C',
  'B##': 'C#',
  'C##': 'D',
  'D##': 'E',
  'E##': 'F#',
  'F##': 'G',
  'G##': 'A',
};

const ACCIDENTAL_SHARP_MAP = {
  'E#': 'F',
  'B#': 'C',
};

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

const convertFlatsToSharps = (notes) => notes.map((note) => FLAT_TO_SHARP_MAP[note] || note);
const convertDoubleSharps = (notes) => notes.map((note) => DOUBLE_SHARP_MAP[note] || note);
const convertAccidentalSharps = (notes) => notes.map((note) => ACCIDENTAL_SHARP_MAP[note] || note);

const normalizeNotes = (notes) => {
  if (notes && notes.length) {
    let normalizedNotes = notes.slice();

    normalizedNotes = convertFlatsToSharps(normalizedNotes);
    normalizedNotes = convertDoubleSharps(normalizedNotes);
    normalizedNotes = convertAccidentalSharps(normalizedNotes);

    return normalizedNotes;
  }

  return notes;
};

class FRScale {
  constructor(scale) {
    if (scale) {
      const notes = normalizeNotes(scale.notes);

      Object.assign(this, {
        notes,
        intervals: tonal.harmonics(notes),
        name: scale.name,
      });
    }
  }
}

export { NOTES, getFretNote, getNoteMap, getIndexMap, normalizeNotes, FRScale };
