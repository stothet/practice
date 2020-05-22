export function quicksort(list: number[], start: number, end: number) {
  // base case
  if (start >= end) return
  
  let pivotPos = start, a = start + 1, b = end, pivot = list[pivotPos]
  
  // partition
  while (a <= b) {
    if (pivot > list[a]) {
      list[pivotPos] = list[a]
      list[a] = list[pivotPos + 1]
      pivotPos++
    }
    a++
  }
  
  list[pivotPos] = pivot 
 
  // sort
  quicksort(list, start, pivotPos - 1)
  quicksort(list, pivotPos + 1, end)
}

example lists

[0,1]
[4,2,1] -> [2,1,4] -> [1,2,4]
[5,8,3,2] -> [3,,8,2] -> [3,2,8,8] -> [3,2,5,8]
