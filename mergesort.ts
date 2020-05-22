export function mergesort(list: number[], start: number, end: number) {
  // base case
  if (start === end) return
  
  const mid = (start + end)/2
  
  // sort
  mergesort(list, start, mid)
  mergesort(list, mid + 1, end)
  
  //merge
  merge(list, start, end, mid)
}

function merge(list: number[], start: number, end: number, midpoint: number) {
  let a = start, b = end, current = 0
  const newList = new Array(end + 1)
  
  while (a <= midpoint && b <= end) {
    if (list[a] < list[b]) {
      newList[current] = list[a]
      a++
    } else {
      newList[current] = list[b]
      b++
    }
    current++
  }
  
  while (a <= midpoint) {
    newList[current] = list[a++]
    current++
  }
  
  while (b <= end) {
    newList[current] = list[b++]
    current++
  }
}
