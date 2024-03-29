import { Asset } from '../asset';
import { Action } from '../action';
import { chandeForecastOscillator } from '../../indicator/trend/chandeForecastOscillator';

/**
 * Chande forecast oscillator strategy.
 *
 * @param asset asset object.
 * @return strategy actions.
 */
export function chandeForecastOscillatorStrategy(asset: Asset): Action[] {
  const cfo = chandeForecastOscillator(asset.closings);

  return cfo.map((value) => {
    if (value > 0) {
      return Action.BUY;
    } else if (value < 0) {
      return Action.SELL;
    } else {
      return Action.HOLD;
    }
  });
}
