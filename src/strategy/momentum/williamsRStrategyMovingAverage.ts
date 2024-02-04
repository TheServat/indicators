import { Asset } from '../asset';
import { Action } from '../action';
import { williamsR } from '../../indicator/momentum/williamsR';
import { ema } from '../../index';

/**
 * Williams R strategy function.
 *
 * @param asset asset object.
 * @return strategy actions.
 */
export function williamsREmaFactory(emaPeriod = 50, williamsRPeriod = 14) {
  return (asset: Asset): Action[] => {
    const wr = williamsR(
      asset.highs,
      asset.lows,
      asset.closings,
      williamsRPeriod,
    );
    const er = ema(emaPeriod, asset.closings);

    return wr.map((value, i) => {
      if (value <= -80 && er[i] < asset.closings[i]) {
        return Action.BUY;
      } else if (value >= -20 && er[i] > asset.closings[i]) {
        return Action.SELL;
      } else {
        return Action.HOLD;
      }
    });
  };
}
