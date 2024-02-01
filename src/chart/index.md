### Chart

Chart provides an easy way to plot the outcome of the indicators and the strategies.

- [Chart Initialization](#chart-initialization)
- [Data Set](#data-set)
- [Add Data](#add-data)
- [Remove Data](#remove-data)
- [Draw Chart](#draw-chart)

#### Chart Initialization

The [Chart](./chart.ts) is used to draw the plot on a given canvas.

```HTML
<canvas id="chart"></canvas>
```

```TypeScript
import {Chart} from 'indicatorts';

const chart = new Chart('canvas');
```

#### Data Set

The [DataSet](./chart.ts) interface provides the necessary information for ploting the data.

```TypeScript
export interface DataSet {
  legend: string,
  values: number[],
  style?: string | string[],
  width?: number,
}
```

The _legend_ is the legend to display for the data, the _values_ are the data values, the optional _style_ is either a single color, or an array of colors, and the optional _width_ is the width of the line.

#### Add Data

The [add](./chart.ts) function is used to add data to the chart.

```TypeScript
chart.add({
    legend: 'Values',
    values: [1, 2, 3, 4],
    style: 'blue',
    width: 2,
});
```

#### Remove Data

The [remove](./chart.ts) function is used to remove data from chart by the given _legend_ value.

```TypeScript
const removed = chart.remove(legend);
```

#### Draw Chart

The [draw](./chart.ts) function is used to draw the added data to the chart.

```TypeScript
chart.draw();
```

## Disclaimer

The information provided on this project is strictly for informational purposes and is not to be construed as advice or solicitation to buy or sell any security.

## License

The source code is provided under MIT License.
