# solution.R

	solution = function(arr, k) {
    	tracker = list(); all_maxes = NULL; theLocations = NULL;
    	
    	for( i in 1:length(arr) ){

    		# we're doing this to avoid R's repetition of list elements
    		if(length(tracker)==0 || arr[i] > tracker[[length(tracker)]]){
    			tracker[arr[i]] = arr[i];
    		};

    		# if(i >= (k - 1)) {
    		# R is NOT zero-indexed, so no need to remove 1 from k initially
    		if(i >= (k)) {
    			# remove all NULLs
    			tracker = tracker[!sapply(tracker,is.null)];
    			theLocations = sapply(tracker,as.character);

    			current_biggest = tracker[[length(tracker)]];

    			all_maxes = c(all_maxes, current_biggest);
    			# tracker = tracker[-arr[i - (k - 1)]];
    			# tracker = tracker[-arr[i - (k)]];
    			tracker = tracker[!theLocations == arr[i - (k - 1)]];
    		};
    	};

    	return(all_maxes);
	};


	## following lines run samples:
	# first = c(10, 5, 2, 7, 8, 7); k = 3; solution(first, k); # solution should be (10, 7, 8, 8)