# solution.js


## SECOND ATTEMPT ##
	solution = function(message, K) {
		outcome = ""; counter = 1; previous_char = " ";
		# since R uses character vectors, we're going to have to split it
		message_split = unlist(strsplit(message, split=""));

	    # a variable 'temp' will hold the current words encountered
	    temp = "";

	    # this will keep track of if a word was started
	    word_was_started = F;
	    
	    while(counter <= length(message_split)){
	    	# if the previous char is a space, and the current one is a space, move on
	    	if(previous_char == " " && message_split[counter] == " "){
	    		# do nothing
	    	}
	    	# if the previous char is a space, and the current one is NOT a space, a new word has begun
	    	else if(previous_char == " " && message_split[counter] != " "){
	    		temp = message_split[counter];
	    		word_was_started = T;
	    	}
	    	# if the previous char is NOT a space, and the current one is NOT a space, it's another letter in the current word
	    	else if(previous_char != " " && message_split[counter] != " "){
	    		temp = paste0(temp, message_split[counter]);

	    		# we can also check here to see if we even need to keep going
	    		length_so_far = nchar(outcome);
	    		remaining = K - length_so_far;
	    		if(nchar(temp) > remaining){
		    		# print("This current word's length has already exceeded. No need to continue.");
		    		break;
		    	}
	    		# set this back to F
	    		word_was_started = F;
	    	}
	    	# if none of the above conditions are met, then it's the end of a new word: do the check
	    	else {
		    	# if adding this new word to the already existing outcome does NOT exceed the limit, add it
		    	if(outcome != ""){
		    		temp = paste(outcome, temp, sep = " ");
		    	};

		    	if(nchar(temp) <= K) {
		    		outcome = temp;
		    	}
	            # if it does, end it: we're done
	            else {
	                break;
	            };
		    };
		    # update previous_char
		    previous_char = message_split[counter];

	    	counter = counter + 1;
	    };

	    # if by some chance, the outcome is still empty, yet a word was started, we'll assume it's a one-letter word
	    if(outcome == "" && word_was_started){
	    	outcome = temp;
	    };

	    return(outcome);
	};