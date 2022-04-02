# Third attempt

While the second attempt works, I felt it was expensive that the while loop had to go through the entire array each time. How about if it was "smarter", and it started at some precise locations first?

This will be the approach:

1. Same as before, _but this time_ ***keep track of extreme values*** _(smallest, largest, next_largest, 3rd_largest, etc)_.
2. Same as before.
3. Same as before, _but this time_, ***start the loop by checking the smallest value first***. If that doesn't suffice, go to the next, and so on, till you arrive at the largest.

I'm starting from the smallest first, then to the smallest-largest, before finally going to the largest, because I'm assuming the algorithm was designed for car size as well i.e. if there are 2 people, take a 2-seater car instead of a 5-seater, and all this before even considering the 20-seater bus.

I'm also doing this _because I_ ***absolutely DO NOT*** _want to sort the array._ Don't want to incur even more expenses.

At the same time, I'm also considering the maximum and next-to-maximum because I'm assuming those values should be big enough to contain every person, or at least make it less expensive to loop through the array as we subtract 1s.

If the above conditions aren't met, continue as before.


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