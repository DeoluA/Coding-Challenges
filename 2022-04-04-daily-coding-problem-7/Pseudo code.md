# Second attempt

Noticed that some edge cases failed e.g. `27` returned 2 ways, instead of 1 ("bf"). So it doesn't handle the edge cases of 27 - 99, or 127 - 199, and so forth.

What I'll do now is:

1. If removing the first or last element from the given string
	- results in a string of length `2`
	- has a value greater than `26` (letters of the alphabet)

	the number of ways will be subtracted by 1.

2. Process the recursion two levels below.

e.g. say we're given `"277"` to decode:

1. `"277"` is greater than `26`, so `num_ways = 0`

2.
- Does `"27"` or `"77"` have a length of `2`? Yes.
- Does either `"27"` or `"77"` have a value greater than `26`? Yes.
- Both conditions fulfilled, `num_ways = -1`.

3. Process functions again with inputs `"77"` and `"7"`

Final answer will be `1` way (which is correct: `"277"` can only be decoded as `"bgg"`)



# First attempt

Will solve this using recursion, similar to a Fibonacci sequence, as long as a memory storage (to save time).

1. First, we'll initiate the memory with all letters at numbers less than 2 digits i.e. 1st to 10th letters (which is a-j)

Reason for this is simple: for single digits (1-9), the only way to decode them is 1 i.e. the letters themselves. Once you enter _double_ digits, the number of ways becomes more than one e.g. "11" can either be "k" or "aa";

(we're including "10" because, though it's double digit, there's only one way to decode it: "j")

2. Next, we declare the function.

- if the received code is already in memory, return the number of ways at that value.
- if it isn't, and it's empty, return 0: we've reached the end.
- at this point, we check if this string is a letter.
	- If it is, then that's one way already, so we only need to do one recursion below: we remove the rightmost character, and check for the rest.
	- If it _isn't_, then we do _two_ recursions below: same as previous, ***but we also check for the rightmost character as well***.

3. Bubble up the results, and *boom-bam*: we have our number of ways of decoding the message.