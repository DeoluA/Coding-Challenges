# Fourth attempt

Noticed a problem with the third attempt: _it will misbehave if duplicates exist in the given array._

e.g. the array `[10, 10, 10]` _should_ return `3` (i.e. one filter at each location); instead it will return `4`.

Fix: I like my "array sort" function, but _*sniff_* I might have to let it go. Will replace with an object that simply tracks the limits, and iterates downward.

# Third attempt

1. Get the limits of the array (minimum, maximum, value just below maximum, etc...)
2. Starting from the maximum:
	a. increasingly multiply it by powers of (1/2) i.e. `2**(-1)`, `2**(-2)`, `2**(-3)`, etc...
	b. At each multiplication, confirm if it's become redundant i.e. it is less than the minimum value in the array. If it is, then there's no point in multiplying any further.
	c. Increase the filter count by how many times the current power value.
	d. If the removing this amount from the total pollution is still not below the target, go to the maximum just below this, and repeat from step `a`

I'll be using an array and a custom function for step `1`.

# Second attempt

Afterwards, I tried to clean up the garbage, debugging and fixing what could be done.
The more I tried, the more I realised: _garbage can't be fixed_ (not all the time, at least).

Back to the drawing board!

# First attempt

I did pretty much garbage, lol.

But what I _intended_ to do was try to find some way to iterate over the array and multiply each pollution by half, then keep checking to see if the sum was more than intended target yet.

...but like I said, it was garbage.