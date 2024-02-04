import { divide, multiplyBy, subtract } from '../../helper/numArray';
import { mmax } from '../trend/mmax';
import { mmin } from '../trend/mmin';

/**
 * Williams R. Determine overbought and oversold.
 *
 * WR = (Highest High - Closing) / (Highest High - Lowest Low) * -100.
 *
 * Buy when -80 and below. Sell when -20 and above.
 *
 * @param highs high values.
 * @param lows low values.
 * @param closings closing values.
 * @return wr values.
 */
export function williamsR(
  highs: number[],
  lows: number[],
  closings: number[],
  period = 14,
): number[] {
  const highestHigh = mmax(period, highs);
  const lowestLow = mmin(period, lows);
  return multiplyBy(
    -100,
    divide(subtract(highestHigh, closings), subtract(highestHigh, lowestLow)),
  );
}
