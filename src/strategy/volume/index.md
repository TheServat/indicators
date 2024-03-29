### Volume Strategies

Momentum strategies generate signals based on a momentum indicator.

- [Chaikin Money Flow Strategy](#chaikin-money-flow-strategy)
- [Ease of Movement Strategy](#ease-of-movement-strategy)
- [Force Index Strategy](#force-index-strategy)
- [Money Flow Index Strategy](#money-flow-index-strategy)
- [Negative Volume Index Strategy](#negative-volume-index-strategy)
- [Volume Weighted Average Price Strategy](#volume-weighted-average-price-strategy)

#### Chaikin Money Flow Strategy

The [chaikinMoneyFlowStrategy](./chaikinMoneyFlowStrategy.ts) uses the _cmf_ values that are generated by the [Chaikin Money Flow (CMF)](../../indicator/volume/index.md#chaikin-money-flow-cmf) indicator function to provide a _BUY_ action when _cmf_ is less than zero, a _SELL_ action when _cmf_ is greather than zero, a _HOLD_ action otherwise.

```TypeScript
import {chaikinMoneyFlowStrategy} from 'indicatorts';

const actions = chaikinMoneyFlowStrategy(asset);
```

#### Ease of Movement Strategy

The [easeOfMovementStrategy](./easeOfMovementStrategy.ts) uses the _emv_ values that are generated by the [Ease of Movement (EMV)](../../indicator/volume/index.md#ease-of-movement-emv) indicator function to provide a _BUY_ action when _emv_ is greather than zero, and a _SELL_ action when _emv_ is less than zero, a _HOLD_ action otherwise.

```TypeScript
import {easeOfMovementStrategy} from 'indicatorts';

const actions = easeOfMovementStrategy(asset);
```

#### Force Index Strategy

The [forceIndexStrategy](./forceIndexStrategy.ts) uses the _fi_ values that are generated by the [Force Index (FI)](../../indicator/volume/index.md#force-index-fi) indicator function to provide a _BUY_ action when _fi_ is greather than zero, and a _SELL_ action when _fi_ is less than zero, a _HOLD_ action otherwise.

```TypeScript
import {forceIndexStrategy} from 'indicatorts';

const actions = forceIndexStrategy(asset);
```

#### Money Flow Index Strategy

The [moneyFlowIndexStrategy](./moneyFlowIndexStrategy.ts) uses the _mfi_ values that are generated by the [Money Flow Index (MFI)](../../indicator/volume/index.md#money-flow-index-mfi) indicator function to provide a _SELL_ action when _mfi_ is greather than or equal to 80, and a _BUY_ action when _mfi_ is less than or equal to 20.

```TypeScript
import {moneyFlowIndexStrategy} from 'indicatorts';

const actions = moneyFlowIndexStrategy(asset);
```

#### Negative Volume Index Strategy

The [negativeVolumeIndexStrategy](./negativeVolumeIndexStrategy.ts) uses the _nvi_ values that are generated by the [Negative Volume Index (NVI)](../../indicator/volume/index.md#negative-volume-index-nvi) indicator function to provide a _BUY_ action when _nvi_ is less than its 255-period EMA, and a _SELL_ action when it is greather than its 255-period EMA, otherwise a _HOLD_ action.

```TypeScript
import {negativeVolumeIndexStrategy} from 'indicatorts';

const actions = negativeVolumeIndexStrategy(asset);
```

#### Volume Weighted Average Price Strategy

The [volumeWeightedAveragePriceStrategy](./volumeWeightedAveragePriceStrategy.ts) uses the values that are generated by the [Volume Weighted Average Price (VWAP)](../../indicator/volume/index.md#volume-weighted-average-price-vwap) indicator function to provide a _BUY_ action when the _closing_ is below the _VWAP_, and a _SELL_ action when the _closing_ is below the _VWAP_, a _HOLD_ action otherwise.

```TypeScript
import {volumeWeightedAveragePriceStrategy} from 'indicatorts';

const actions = volumeWeightedAveragePriceStrategy(asset);
```

## Disclaimer

The information provided on this project is strictly for informational purposes and is not to be construed as advice or solicitation to buy or sell any security.

## License

The source code is provided under MIT License.
