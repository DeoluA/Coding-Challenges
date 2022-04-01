# solution.R


## SECOND ATTEMPT ##
	solution = function(P, S) {
	    # P and S will always have the same length, so let's declare our needed variables
	    total_persons = 0; total_seats = 0; num_free_seats = 0;
	    # I'm going to use 'remainder' as an vector, for reasons that should become apparent shortly
	    remainder = NULL;

	    # final seating arrangment, replicated with NAs initially
	    final_arrangement = rep(NA, length(P));
	    # ...and then just for clarity, let's also add the number of cars found
	    final_num_cars = 0;

	    # get all the totals
	    for(i in 1:length(S)) {
	    	total_persons = total_persons + P[i];
	    	total_seats = total_seats + S[i];
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
	    		k = 1;
	    		while(k <= length(final_arrangement)) {
		    		if( is.na(final_arrangement[k]) && S[k] >= remainder[1]) {
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

	    print(paste0("Number of cars necessary: ", final_num_cars));
		return(final_arrangement);
	};