import { Asset } from '../asset';
import { Action } from '../action';
import { macd } from '../../indicator/trend/macd';

/**
 * MACD strategy.
 * @param asset asset object.
 * @return strategy actions.
 */
export function macdStrategy(asset: Asset): Action[] {
  const macdResult = macd(asset.closings);
  const actions = new Array<number>(macdResult.macdLine.length);

  for (let i = 0; i < actions.length; i++) {
    if (macdResult.macdLine[i] > macdResult.signalLine[i]) {
      actions[i] = Action.BUY;
    } else if (macdResult.macdLine[i] < macdResult.signalLine[i]) {
      actions[i] = Action.SELL;
    } else {
      actions[i] = Action.HOLD;
    }
  }

  return actions;
}
