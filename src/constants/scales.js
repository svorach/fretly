import tonal from 'tonal';

const mapScales = (mode) => {
  const modeObj = { name: mode };

  return modeObj;
};

// export const MODES = tonal.scale.names().slice(1, 8).map(mapScales);
export const MODES = tonal.scale.names().map(mapScales);
