# First attempt

This looks like a sliding window problem.

1. First, we'll track if we've seen a letter before. If we _haven't_, we'll add it to our tracker; if we _have_, we'll update the count at that position.
We'll keep adding letters to our string as we encounter them.
2. If the number of elements in our tracker exceed our desired `k`, we start trimming, from the left.
We'll get the character at the leftmost point in our current string, and subtract its count in its position from our tracker. If the count drops to zero, we delete it from the tracker. We'll keep repeating this till elements in tracker reduce to `k`.
3. At the end of our string, return the largest string(s) found.

...and we're done!

e.g. say our string is `Apples`, and our `k` is 2.

`i = 0`: character's seen are `A`; tracker is `{a:1}`

`i = 1`: character's seen are `Ap`; tracker is `{a: 1, p: 1}`

`i = 2`: character's seen are `App`; tracker is now `{a: 1, p: 2}`

`i = 3`: character's seen are `Appl`; tracker is `{a: 1, p: 2, l: 1}`, which exceeds our desired `k`

So start trimming, from the left:

- `A` is leftmost of `Appl`, so reduce count of `A` from tracker: `{a: 0, p: 2, l: 1}`.
- since tracker at `a` is now 0, delete: `{p: 2, l: 1}`.

...and we're back. Current string is `ppl`

`i = 4`: character's seen are `pple`; tracker is `{p: 2, l: 1, e: 1}`, which exceeds our desired `k`

So start trimming, from the left:

- `p` is leftmost of `pple`, so reduce count of `p` from tracker: `{p: 1, l: 1, e: 1}`.
- still not sufficient, so go again
- `p` is leftmost of `ple`, so reduce count of `p` from tracker: `{p: 0, l: 1, e: 1}`.
- since tracker at `p` is now 0, delete: `{l: 1, e: 1}`.

...and we're back. Current string is `le`

`i = 5`: character's seen are `les`; tracker is `{l: 1, e: 1, s: 1}`, which exceeds our desired `k`

So start trimming, from the left:

- `l` is leftmost of `les`, so reduce count of `l` from tracker: `{l: 0, e: 1, s: 1}`.
- since tracker at `l` is now 0, delete: `{e: 1, s: 1}`.

...and we're back. Current string is `es`

End of string. Longest values encountered are `App` and `ppl`!