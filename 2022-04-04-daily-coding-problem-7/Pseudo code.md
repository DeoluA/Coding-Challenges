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