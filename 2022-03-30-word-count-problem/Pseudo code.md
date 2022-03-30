# Second attempt
## (20:34, March 30, 2022 WAT)


If there's a `0` anywhere in the given array, the solution won't work
e.g. if the array is `[2, 0, 3]`, the solution should be `[0, 6, 0]`, but the solution will return `[0, invalid_number, 0]`



# First attempt
## (18:44, March 30, 2022 WAT)


Naive approach will be straightforward:
1. Get the product of all elements in the array
2. Iterate through once again, dividing by the `i`-th element, into a new array.