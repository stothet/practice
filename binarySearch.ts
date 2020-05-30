export function binarySearch(n: number, list: number[], start: number, end: number): number {
  if (start == end) {
    return start
  }
  
  const mid = (start + end) / 2
  
  if (n > list[mid]) {
    return binarySearch(n, list, mid + 1, end)
  } else {
    return binarySearch(n, list, start, mid)
  }
}
