import { add, divideBy } from '../../helper/numArray';
import { mmax } from '../trend/mmax';
import { mmin } from '../trend/mmin';

/**
 * Donchian channel result object.
 */
export interface DonchianChannelResult {
  upperChannel: number[];
  middleChannel: number[];
  lowerChannel: number[];
}

/**
 * The Donchian Channel (DC) calculates three lines generated by moving average
 * calculations that comprise an indicator formed by upper and lower bands
 * around a midrange or median band. The upper band marks the highest
 * price of an asset while the lower band marks the lowest price of
 * an asset, and the area between the upper and lower bands
 * represents the Donchian Channel.
 *
 * Upper Channel = Mmax(period, closings)
 * Lower Channel = Mmin(period, closings)
 * Middle Channel = (Upper Channel + Lower Channel) / 2
 *
 * @param period window period.
 * @param closings closing values.
 * @returns dc result.
 */
export function donchianChannel(
  period: number,
  closings: number[],
): DonchianChannelResult {
  const upperChannel = mmax(period, closings);
  const lowerChannel = mmin(period, closings);
  const middleChannel = divideBy(2, add(upperChannel, lowerChannel));

  return {
    upperChannel,
    middleChannel,
    lowerChannel,
  };
}
