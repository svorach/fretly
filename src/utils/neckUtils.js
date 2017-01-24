import { getFretNote } from './noteUtils';

const frets = [...Array(25).keys()];

function mapNotesToFrets(string) {
  return frets.map((fret) => getFretNote(string.rootNote, fret));
}

function buildFrets(string) {
  const builtFrets = mapNotesToFrets(string);

  return Object.assign({}, { frets: builtFrets }, string);
}

function buildStrings(strings) {
  return strings.map(buildFrets);
}

export { frets, buildStrings };
