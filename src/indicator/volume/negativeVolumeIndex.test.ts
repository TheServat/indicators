import { roundDigitsAll } from '../../index';
import { negativeVolumeIndex } from './negativeVolumeIndex';

describe('Negative Volume Index (NVI)', () => {
  it('should be able to compute NVI', () => {
    const closings = [9, 11, 7, 10, 8];
    const volumes = [100, 110, 80, 120, 90];
    const expected = [1000, 1000, 636.36, 636.36, 509.09];

    const actual = negativeVolumeIndex(closings, volumes);
    expect(roundDigitsAll(2, actual)).toStrictEqual(expected);
  });
});
