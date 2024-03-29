import { roundDigitsAll } from '../../index';
import { defaultEaseOfMovement } from './easeOfMovement';

describe('Ease of Movement (EMV)', () => {
  it('should be able to compute EMV', () => {
    const highs = [10, 9, 12, 14, 12];
    const lows = [6, 7, 9, 12, 10];
    const volumes = [100, 110, 80, 120, 90];
    const expected = [32000000, 16000000, 13791666.67, 11385416.67, 8219444.44];

    const actual = defaultEaseOfMovement(highs, lows, volumes);
    expect(roundDigitsAll(2, actual)).toStrictEqual(expected);
  });
});
