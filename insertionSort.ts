export function insertionSort(list: number[]) {
  for (let n = 0, n <= list.length, n++) {
    for (let m = list.length - 1, m >= 0, m--) {
      if ( list[n] > list[m] ) {
        let temp = list[n]
        list[n] = list[m]
        list[m] = temp
      }
    }
  }
}


4, 3, 2, 7, 1
1, 3, 2, 7, 4
1, 2, 3, 7, 4
1, 2, 3, 7, 4
1, 2, 3, 4, 7
