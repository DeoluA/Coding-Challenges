# solution.R


## THIRD ATTEMPT ##
	solution = function(P, S) {
	    # P and S will always have the same length, so let's declare our needed variables
	    total_persons = 0; total_seats = 0; num_free_seats = 0;
	    # I'm going to use 'remainder' as an vector, for reasons that should become apparent shortly
	    remainder = NULL;

	    # final seating arrangment, replicated with NAs initially
	    final_arrangement = rep(NA, length(P));
	    # ...and then just for clarity, let's also add the number of cars found
	    final_num_cars = 0;

	    # update: we'll be tracking for the minimum, next_max, and max for SEATS
	    s_min_index = 1; s_next_max_index = 1; s_max_index = 1;

	    # get all the totals
	    for(i in 1:length(S)) {
	    	total_persons = total_persons + P[i];
	    	total_seats = total_seats + S[i];

	    	# check for the extremes
	    	if(i > 1){
	    		# is the current value at this location less than previous?
	    		if(S[i] < S[s_min_index]){
	    			s_min_index = i;
	    		}

	    		# is the current value at this location more? Replace max and next_max
	    		if(S[i] > S[s_next_max_index]){
	    			s_next_max_index = i;
	    		}
	    		if(S[i] > S[s_max_index]){
	    			s_next_max_index = s_max_index;
	    		}

	    		if(S[i] > S[s_max_index]){
	    			s_max_index = i;
	    		}
		    	
		    }
	    };

	    num_free_seats = total_seats - total_persons;

	    # the first element of 'remainder' will initially be the total number of persons
	    remainder = c(remainder, total_persons);

	    # begin the checks
	    # if there are no free seats, you're good with the original arrangement
	    if(num_free_seats <= 0) {
	    	final_arrangement = P;
	    	final_num_cars = length(final_arrangement);
	    }
	    else {
	    	while(length(remainder) >= 1 && remainder[1] > 0) {
	    		was_found = F;
	    		# this time, we first check if the minimum was found
	    		if(is.na(final_arrangement[s_min_index]) && S[s_min_index] >= remainder[1]) {
	    			final_arrangement[s_min_index] = remainder[1];
	    			
	    			remainder = remainder[-1];
	    			was_found = T;
	    			final_num_cars = final_num_cars + 1;
	    		}
	    		# if that isn't, check the next_to_max
	    		else if(is.na(final_arrangement[s_next_max_index]) && S[s_next_max_index] >= remainder[1]) {
	    			final_arrangement[s_next_max_index] = remainder[1];
	    			
	    			remainder = remainder[-1];
	    			was_found = T;
	    			final_num_cars = final_num_cars + 1;
	    		}
	    		# and finally, check for the max
	    		else if(is.na(final_arrangement[s_max_index]) && S[s_max_index] >= remainder[1]) {
	    			final_arrangement[s_max_index] = remainder[1];
	    			
	    			remainder = remainder[-1];
	    			was_found = T;
	    			final_num_cars = final_num_cars + 1;
	    		}
	    		# if none of the above conditions are met, proceed as normal
	    		else{
		    		k = 1;
		    		while(k <= length(final_arrangement)) {
		    			# skip over the min, next_max and max
			    		if(k != s_min_index && k != s_next_max_index && k != s_max_index && is.na(final_arrangement[k]) && S[k] >= remainder[1]) {
			    			final_arrangement[k] = remainder[1];
			    			# remove it
			    			remainder = remainder[-1];
			    			was_found = T;
			    			final_num_cars = final_num_cars + 1;
			    			break;
			    		};

			    		k = k + 1;
			    	};
		    		# if none is found, subtract
		    		if(!was_found){
			    		remainder[1] = remainder[1] - 1;
			    		if(length(remainder) > 1) {
			    			remainder[length(remainder)] = remainder[length(remainder)] + 1;
			    		}
			    		else {
			    			remainder = c(remainder, 1);
			    		}
			    	};
			    }

	    	}
	    }

	    print(paste("Number of cars necessary:", final_num_cars, sep=" "));
		return(final_arrangement);
	 
	};


	## following lines run samples:
	# p = c(1, 4, 1); s = c(1, 5, 1); solution(p, s);
	# p = c(1, 2, 5, 1); s = c(3, 10, 2, 4); solution(p, s);
	# p = c(1, 2, 5, 1, 1); s = c(3, 10, 2, 4, 11); solution(p, s);
	# p = c(4, 4, 2, 4); s = c(5, 5, 2, 5); solution(p, s);