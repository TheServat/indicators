import { add, divideBy } from '../../helper/numArray';

/**
 * The Typical Price. It is another approximation of
 * average price for each period and can be used as
 * a filter for moving average systems.
 *
 * TPI = (High + Low + Closing) / 3
 *
 * @param highs high values.
 * @param lows low values.
 * @param closings closing values.
 * @return tpi values.
 */
export function typicalPrice(
  highs: number[],
  lows: number[],
  closings: number[],
): number[] {
  return divideBy(3, add(add(highs, lows), closings));
}
