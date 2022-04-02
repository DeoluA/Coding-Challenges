# Second attempt
## (20:34, March 30, 2022 WAT)


Error: If there's a `0` anywhere in the given array, the solution won't work

e.g. if the array is `[2, 0, 3]`, the solution should be `[0, 6, 0]`, but the solution will return `[0, invalid_number, 0]`

Also:
> Follow-up: what if you can't use division?

My new solution will involve the following:
1. Declare a variable `product_so_far` to keep track of products of all elements seen so far.
2. Initialise `product_so_far` to be 1.
3. Begin iteration over array `A`:
	- at `0`-th position, push `product_so_far` into the array to be returned (let's call it `outcome`).
	- for any `n`-th position afterwards:
		- multiply all the elements currently in `outcome` by the the latest value `A[n]`
		- multiply the current `product_so_far` by the ***previous*** value `A[n-1]`
		- push `product_so_far` into `outcome`.

Solution works for previous examples, as well as arrays with `0` (or even _negative_ values) present.

Also doesn't include any division. ***Yah-tah-zee!!***


# First attempt
## (18:44, March 30, 2022 WAT)


Naive approach will be straightforward:
1. Get the product of all elements in the array
2. Iterate through once again, dividing by the `i`-th element, into a new array.