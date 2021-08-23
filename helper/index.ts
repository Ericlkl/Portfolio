import { CompareFunction } from 'interfaces/helper';

export function getDevToolIconPath(name: string) {
  const iconName = name.toLowerCase();
  return `/icons/${iconName}/${iconName}-original.svg`;
}

export function quickSort<T>(array: T[], compareFn: CompareFunction<T>): T[] {
  if (array.length < 2) {
    return array;
  }
  const pivot: T = array[0];
  const smallerArr: T[] = [];
  const equalsArr: T[] = [pivot];
  const largerArr: T[] = [];
  for (let i = 1; i < array.length; i++) {
    const currentElm = array[i];
    const result = compareFn(pivot, currentElm);
    if (result > 0) {
      largerArr.push(currentElm);
    } else if (result === 0) {
      equalsArr.push(currentElm);
    } else {
      smallerArr.push(currentElm);
    }
  }
  return [
    ...quickSort(smallerArr, compareFn),
    ...equalsArr,
    ...quickSort(largerArr, compareFn),
  ];
}
