# First attempt

I'm going to go overboard, and create a recursive function that prints out ***all*** the possible paths, not just gets the count.

Here we go!

1. We'll use recursion, _a la_ Fibonacci and memoization.
2. At each point, we'll simply add.

It should be noted that I'm simply the one doing overkill: since all the question asked for was the ***count***, the simple solution is simply, for all `k1, k2, k3, ...,` in `K`:

`num_ways(N) = num_ways(N-k1) + num_ways(N-k2) + ... + num_ways(N-K)`

e.g.

if our `K` is `{1, 3, 5}`, and our `N` is...say, `7`:

`num_ways(7) = num_ways(7-1) + num_ways(7-3) + num_ways(7-5)`

...which gives us:

`num_ways(7) = num_ways(6) + num_ways(4) + num_ways(2)`

...and then you run the recursion downwards, till you get `num_ways(0)`, which will always be `1` (i.e. you're already there), and the bubble the solutions back up.

(again: take advantage of memoization!)