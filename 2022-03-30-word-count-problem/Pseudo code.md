# Second attempt

The first attempt works, but I felt it could still be improved.

For starters, a new array has to be created, which might be space consuming.

Improvement: we'll parse the string as is, and naively create the outcome as we go along.

For each character of the given string, check:
1. _if the previous character is a space, and the current one is a space,_ ***do nothing*** (move on with the loop)
2. _if the previous char is a space, and the current one is NOT a space,_ ***a new word has begun***
3. _if the previous char is NOT a space, and the current one is NOT a space,_ ***it's another letter in the current word*** (so add it)
4. _if none of the above conditions are met,_ ***then it's the end of the current word*** (so check if adding it to our list of words so far will exceed `K`)

Also, for step 3, we can even check the length of the current word to see if it's already exceeding our remaining limit (this way, we don't have to reach its end before discovering it's too long anyway).

Finally, there's the possibility of _one-word messages_ e.g. message containing just the letters "I" or "a", or even "o", if perhaps the message is the lyrics to a song or something _(None of these assumptions were mentioned, I'm just taking the liberty to account for them, just in case.)_

New solution does _not_ create any arrays or involve any array-wide operations. Also takes care of spaces _as they are encountered_ (as against replacing all through the string prior).

Good to go!


# First attempt
How I approached this in my solution to the interview:
1. replace any double spacing found in the given string with a singular space
2. convert the string into an array, splitting by spaces
3. iterate:
	- create a temporary variable `temp` to hold the previous words, as well as the latest word addition, with a space in between
	- if the length of `temp` is `<= K`, add it to the list of previous words
	- if it is, stop: you're done
4. Return the found list of words.