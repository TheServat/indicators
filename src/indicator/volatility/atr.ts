import { checkSameLength, max, subtract } from '../../helper/numArray';
import { sma } from '../../indicator/trend/sma';

/**
 * ATR result.
 */
export interface AtrResult {
  trLine: number[];
  atrLine: number[];
}

/**
 * Average True Range (ATR). It is a technical analysis indicator that
 * measures market volatility by decomposing the entire range of stock
 * prices for that period.
 *
 * TR = Max((High - Low), (High - Closing), (Closing - Low))
 * ATR = SMA TR
 *
 * @param period window period.
 * @param highs high values.
 * @param lows low values.
 * @param closings closing values.
 * @return atr result.const ATR_PERIOD = 14;
 */
export function atr(
  period: number,
  highs: number[],
  lows: number[],
  closings: number[],
): AtrResult {
  checkSameLength(highs, lows, closings);

  const trLine = max(
    subtract(highs, lows),
    subtract(highs, closings),
    subtract(closings, lows),
  );

  const atrLine = sma(period, trLine);

  return {
    trLine,
    atrLine,
  };
}
