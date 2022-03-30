# Second attempt
## (01:57, March 30, 2022 WAT)

I noticed an error in my first attempt...well, _two_ errors, actually:
1. _The function only works with lists containing integers greater than 0_ e.g. if the given list is `[-10, 15, 3, 7]`, the function will throw an error when it's trying to find index `-10`.
2. _The array `B` will not be initialized to the right size if there are negative values present._
e.g. if the given list is `[-1, 0, 2]` and the `k` we're checking for is `1`, `B` will be initialized to size `1`, which is wrong (and if the `k` even happens to be negative, say `-1`, it won't even initialize ***at all***).

Solution: _use_ ***NAMED*** _lists/vectors (or objects)_. This way, the indices become strings, so we don't have to worry about negative values, and we also don't have to worry about initializing with any size at the onset.

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