# Second attempt

This will be the approach:

1. Iterate through the entire array, and get the total number of persons `total_persons` in array `P`, and the total number of seats `total_seats` available in array `S`. Thankfully, both arrays are the same length, so we can loop through both at the same time.
2. Determine if there are any free seats — let's call this `num_free_seats` — by subtracting the total persons from the total seats.
3. If `num_free_seats > 0`, start the following loop:
	1. Declare a `remainder` variable, initialize to `0`.
	2. Check where `S[k] >= total_persons`
		- If such is found, move everyone to `S[k]`. You're done.
		- If none is found, subtract 1 from `total_persons` (add it to the `remainder` variable), and repeat the loop, keeping track of each car that's already been filled.
	2. Once the above is finished, repeat the loop again, but with the `remainder` variable.

# First attempt

...was ***garbage!!!***

I didn't even finish...😅🤦🏽‍♂️