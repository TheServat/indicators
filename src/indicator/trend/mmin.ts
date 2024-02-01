import { BinarySearchTree } from '../../helper/binarySearchTree';

/**
 * Moving min for the given period.
 * @param period window period.
 * @param values values array.
 * @return moving min.
 */
export function mmin(period: number, values: number[]): number[] {
  const result = new Array<number>(values.length);
  const bst = new BinarySearchTree();

  for (let i = 0; i < values.length; i++) {
    bst.insert(values[i]);

    if (i >= period) {
      bst.remove(values[i - period]);
    }

    result[i] = bst.min();
  }

  return result;
}
