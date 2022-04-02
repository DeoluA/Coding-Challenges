I had an interview, where I got posed this problem:

> A company has a number of locations, each containing pollution levels given by an array `N`

> The company needs to determine the minimum number of filters required to be installed to cut the total pollution by at least half.

> Each filter installed halves it's previous value e.g. if a pollution level is `32`,
> - one filter installed will slice this to `16`
> - another filter installed will slice this to `8`
> - a third filter installed will slice this to `4`

> ...and so on and so forth

> Write a function to determine this minimum number of filters to achieve this desired outcome

> For example: if the given array of pollution levels `N` is `[5, 19, 8, 1]`,

> your function should return `3`

> i.e. 2 filters installed in the 2nd store `(19/2)/2` and 1 installed in the third `8/2`,

> which will bring the pollution from an intial total of `5 + 19 + 8 + 1 = 33`

> down to `5 + ((19/2)/2) + (8/2) + 1 = 14.75` (which is less than `33/2 = 16.5`)

> If `N` is `[10, 10]`, it should return 2: one at each location

> If `N` is `[3, 0, 5]`, it should return 2: one at the first, and the other at the third.