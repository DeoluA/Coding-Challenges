# First attempt
## (22:11, March 29, 2022 WAT)

> Return whether any two numbers from the list add up to `k`

Thankfully, all this problem requires is for ***any*** two numbers that fit the bill, _meaning we can_ ***stop*** the moment we find _at least one_

So, if we have an array `A` containing elements `[V, W, X, Y, Z]`, to find any two values with sum `k`, we should be able to do the following
- first, define a new array `B` of length `k`, containing empty elements
- iterate over the array `A`. For each element `A[i]`:
	1. deduct the value `k` from `A[i]` to get `k_left`
	2. check if array `B` is null/undefined at location `k_left`.
	3. If it's not, congrats: you're done. Return `true`.
	4. If it is, then place a new element into `B` at index location `A[i]`, with value equal to `1` (or `true`).
	5. Also place `1` (or `true`) at index location `k_left`.
	6. Return `false` at the end, if entire array is traversed and none is found