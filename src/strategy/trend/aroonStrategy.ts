import { Asset } from '../asset';
import { Action } from '../action';
import { aroon } from '../../indicator/trend/aroon';

/**
 * Aroon strategy.
 * @param asset asset object.
 * @return strategy actions.
 */
export function aroonStrategy(asset: Asset): Action[] {
  const indicator = aroon(asset.highs, asset.lows);

  const actions = new Array<Action>(indicator.up.length);

  for (let i = 0; i < actions.length; i++) {
    if (indicator.up[i] > indicator.down[i]) {
      actions[i] = Action.BUY;
    } else if (indicator.down[i] > indicator.up[i]) {
      actions[i] = Action.SELL;
    } else {
      actions[i] = Action.HOLD;
    }
  }

  return actions;
}
