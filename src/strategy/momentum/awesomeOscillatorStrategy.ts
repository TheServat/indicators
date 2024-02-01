import { Asset } from '../asset';
import { Action } from '../action';
import { awesomeOscillator } from '../../indicator/momentum/awesomeOscillator';

/**
 * Awesome oscillator strategy function.
 *
 * @param asset asset object.
 * @return strategy actions.
 */
export function awesomeOscillatorStrategy(asset: Asset): Action[] {
  const os = awesomeOscillator(asset.highs, asset.lows);
  return os.map((value) => {
    if (value > 0) {
      return Action.BUY;
    } else if (value < 0) {
      return Action.SELL;
    } else {
      return Action.HOLD;
    }
  });
}
