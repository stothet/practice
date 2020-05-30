# practice

## sorting

### Insertion Sort

**time complexity**

### Divide & Conquer
- Always has a base case. If base case is found, return statement.
- Solution for problem P is derived from dividing the problem into parts P0, P1... which are solved recursively.
- Solutions of P0, P1... are then combined to find solution for P.

### Merge Sort
1. Base case is when start index = end index of sub part
2. Problem is divided into 2 parts by midpoint
3. Divided parts are merged in few passes

**time complexity**
A merge sort is a divide and conquer algorithm. This means that is a recursive problem, where solution is obtained by combining the solutions of the sub-parts of the problem. In the case of MergeSort, the recursion leads to the array (size n) to be divided m times until there are n sub-parts. At the mth division, there are 2^m sub parts. So m = log(n), number of times the array is subdivided. The subparts are then combined  in n time  at every merge. Therefore, nlog(n).

### Quick Sort
1. Base case is when end is less than or equal to start
2. Problem has 2 parts partitioned by pivot
3. Repeated on sub parts until solution is found

**time complexity**
List gets partitioned logn times and partition occurs in linear time.

//TODO
- insertion sort
- radix sort
- count sort
