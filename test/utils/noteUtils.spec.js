import { expect } from 'chai';
import { NOTES as notes, scales, getNoteMap, getIndexMap } from '../../src/utils/noteUtils';

describe('noteUtils', () => {
  describe('getNotes', () => {
    it('should return an array containing the 12 pitches', () => {
      expect(notes).to.deep.equal(['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']);
    });
  });

  describe('getNoteMap', () => {
    it('should return an object containing the index of a note passed in.', () => {
      expect(getNoteMap()).to.deep.equal({ A: 0, 'A#': 1, B: 2, C: 3, 'C#': 4, D: 5, 'D#': 6, E: 7, F: 8, 'F#': 9, G: 10, 'G#': 11 });
    });
  });

  describe('getNoteMap', () => {
    it('should return an object containing the index of a note passed in.', () => {
      expect(getIndexMap()).to.deep.equal({ 0: 'A', 1: 'A#', 2: 'B', 3: 'C', 4: 'C#', 5: 'D', 6: 'D#', 7: 'E', 8: 'F', 9: 'F#', 10: 'G', 11: 'G#' });
    });
  });
});