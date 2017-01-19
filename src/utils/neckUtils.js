
import { getFretNote } from './noteUtils';

const frets = [...Array(25).keys()];
const tuning = [
  { stringNumber: 1, rootNote: 'E' },
  { stringNumber: 2, rootNote: 'B' },
  { stringNumber: 3, rootNote: 'G' },
  { stringNumber: 4, rootNote: 'D' },
  { stringNumber: 5, rootNote: 'A' },
  { stringNumber: 6, rootNote: 'E' },
];

function mapNotesToFrets(string) {
  return frets.map((fret) => getFretNote(string.rootNote, fret));
}

function buildFrets(string) {
  const builtFrets = mapNotesToFrets(string);

  return Object.assign({}, { frets: builtFrets }, string);
}

function buildNeck() {
  return tuning.map(buildFrets);
}

const neck = buildNeck();

export { frets, tuning, buildNeck, neck };
