import { getFretNote } from './noteUtils';

const frets = [...Array(25).keys()];

const mapNotesToFrets = string => frets.map((fret) => getFretNote(string.rootNote, fret));

function buildFrets(string) {
  const builtFrets = mapNotesToFrets(string);

  return Object.assign({}, { frets: builtFrets }, string);
}

const buildStrings = strings => strings.map(buildFrets);

export { frets, buildStrings };
