import { expect } from 'chai';
import { describe, it } from 'mocha';

import { modeTestData } from '../resources/data/modes.test.data.js';
import {
  NOTES as notes,
  getNoteMap,
  getIndexMap,
  FRScale,
} from '../../src/utils/noteUtils';

describe('noteUtils', () => {
  describe('getNotes', () => {
    it('should return an array containing the 12 pitches', () => {
      expect(notes).to.deep.equal(
        ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
      );
    });
  });

  describe('getNoteMap', () => {
    it('should return an object containing the index of a note passed in.', () => {
      expect(getNoteMap()).to.deep.equal({
        A: 0, 'A#': 1, B: 2, C: 3, 'C#': 4, D: 5, 'D#': 6, E: 7, F: 8, 'F#': 9, G: 10, 'G#': 11,
      });
    });
  });

  describe('getIndexMap', () => {
    it('should return an object containing the index of a note passed in.', () => {
      expect(getIndexMap()).to.deep.equal({
        0: 'A', 1: 'A#', 2: 'B', 3: 'C', 4: 'C#', 5: 'D',
        6: 'D#', 7: 'E', 8: 'F', 9: 'F#', 10: 'G', 11: 'G#',
      });
    });
  });

  describe('FRScale', () => {
    let eLocrian;
    let aLocrian;
    let gLydianDominant;

    beforeEach((done) => {
      eLocrian = new FRScale({
        name: 'E Locrian',
        notes: modeTestData.eLocrian.notes,
      });

      aLocrian = new FRScale({
        name: 'A Locrian',
        notes: modeTestData.aLocrian.notes,
      });

      gLydianDominant = new FRScale({
        name: 'G Lydian Dominant',
        notes: modeTestData.gLydianDominant.notes,
      });

      done();
    });

    it('should be a function', () => expect(FRScale).to.be.function);

    it('should construct a new FRScale object', () => {
      expect(new FRScale()).to.deep.equal({});
    });

    describe('notes', () => {
      it('should normalize the notes', () => {
        expect(eLocrian.notes).to.deep.equal(modeTestData.eLocrian.normalizedNotes);
        expect(aLocrian.notes).to.deep.equal(modeTestData.aLocrian.normalizedNotes);
        expect(gLydianDominant.notes).to.deep.equal(modeTestData.gLydianDominant.normalizedNotes);
      });
    });

    describe('intervals', () => {
      it('should create an intervals property based on the notes', () => {
        expect(eLocrian.intervals).to.be.a('array');
      });

      it('should be the same length as notes', () => {
        expect(eLocrian.intervals.length).to.be.equal(eLocrian.notes.length);
      });
    });
  });
});
