import { deepStrictEqual } from 'assert';
import { roundDigitsAll } from '../../helper/numArray';
import { vortex } from './vortex';

describe('Vortex Indicator', () => {
  it('should be able to compute vortex', () => {
    const highs = [1404.14, 1405.95, 1405.98, 1405.87, 1410.03];
    const lows = [1396.13, 1398.8, 1395.62, 1397.32, 1400.6];
    const closings = [1402.22, 1402.8, 1405.87, 1404.11, 1403.93];
    const expectedPlusVi = [1, 1.00189, 0.99964, 1.00083, 1.0031];
    const expectedMinusVi = [0.9943, 0.99304, 0.99307, 0.99319, 0.99034];

    const actual = vortex(highs, lows, closings);
    deepStrictEqual(roundDigitsAll(5, actual.plusVi), expectedPlusVi);
    deepStrictEqual(roundDigitsAll(5, actual.minusVi), expectedMinusVi);
  });
});
