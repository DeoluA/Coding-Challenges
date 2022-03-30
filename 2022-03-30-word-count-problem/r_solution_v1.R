# solution.R

## FIRST ATTEMPT ##
	solution = function(message, K) {
		# first, strip any double spaces
	    m = gsub(pattern = "  ", x = message, replacement = "");
	    # next, convert the string to an array of words. We'll split using spaces
	    new_m = unlist(strsplit(x = m, split = " "));

	    outcome = ""; counter = 1;

	    while(counter <= length(new_m)){
	    	# if adding this new word to the already existing outcome does NOT exceed the limit, add it
	    	temp = paste(outcome, new_m[counter], sep = " ");
	    	if(nchar(temp) <= K) {
	    		outcome = temp;
	    	}
            # if it does, end it: we're done
            else {
                break;
            };
		    #strip the space at the beginning, just in case
		    outcome = gsub(pattern = "^ ", x = outcome, replacement = "");
	    	counter = counter + 1;
	    };

	    return(outcome);
	};