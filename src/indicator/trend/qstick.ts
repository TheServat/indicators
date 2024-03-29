import { subtract } from '../../helper/numArray';
import { sma } from './sma';

/**
 * The Qstick function calculates the ratio of recent up and down bars.
 *
 * QS = Sma(Closing - Opening)
 *
 * @param period window period.
 * @param openings openinig values.
 * @param closings closing values.
 * @return qstick values.
 */
export function qstick(
  period: number,
  openings: number[],
  closings: number[],
): number[] {
  return sma(period, subtract(closings, openings));
}
