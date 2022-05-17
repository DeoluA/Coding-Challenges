# Second attempt

Noticed an error with my `R` function: the first check (`if the current value is greater than the greatest value in the list, add it in`), will cause some errors down the line. We can't be omitting values!

So instead, what I'll do is use the _character vector_ to track the largest value.


# First attempt

1. I'll use an `Object` to keep track of the highest value for subset.
2. At `k-1`, remove the `i-k-1`th key from the `Object`.
3. Afterwards, return the largest, which will be the last key in the `Object`. _Voila!_

`R` doesn't have an `Object` property, so I'll use a `list` in combination with a character vector:

1. if the current value is greater than the greatest value in the list, add it in
2. remove all the `NULL` values
3. get the all the remaining values as a character vector
4. maximum value will be the value at the current `length` of the list.
5. remove the `i-k-1`th element from the list, using the character vector to confirm its index