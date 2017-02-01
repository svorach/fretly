import tonal from 'tonal';


const mapScales = (mode) => {
  const modeObj = { name: mode };

  return modeObj;
};


export const SCALES = [
  { name: 'D Major', notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C♯'] },
  { name: 'C Major (Ionian)', notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'] },
  { name: 'D Lydian', notes: ['D', 'E', 'F#', 'G#', 'A', 'B', 'C#'] },
  { name: 'B Natural Minor', notes: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'] },
  { name: 'B Harmonic Minor', notes: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A#'] },
  { name: 'G Minor', notes: ['G', 'A', 'A#', 'C', 'D', 'D#', 'F'] },
  { name: 'None', notes: [] },
];

export const TRADITIONAL_MODES = tonal.scale.names().slice(1, 8).map(mapScales);
export const MODES = tonal.scale.names().map(mapScales);
