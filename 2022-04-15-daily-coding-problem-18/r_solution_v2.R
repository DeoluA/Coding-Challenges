# solution.R

	solution = function(arr, k) {
    	tracker = list(); all_maxes = NULL; theLocations = NULL;
    	
    	for( i in 1:length(arr) ){

    		tracker[arr[i]] = arr[i];

    		# if(i >= (k - 1)) {
    		# R is NOT zero-indexed, so no need to remove 1 from k initially
    		if(i >= (k)) {
    			# remove all NULLs, but only for character vector
    			theLocations = tracker[!sapply(tracker,is.null)];
    			theLocations = sapply(theLocations,as.character);

    			# then use THIS to get the largest value
    			current_biggest = as.numeric(theLocations[length(theLocations)]);

    			all_maxes = c(all_maxes, current_biggest);
    			# tracker = tracker[-arr[i - (k - 1)]];
    			# tracker = tracker[-arr[i - (k)]];
    			# tracker = tracker[-arr[i - (k - 1)]];

    			# tracker[arr[i - (k - 1)]] = NULL;
    			# tracker[[arr[i - (k - 1)]]] = NULL;
    			# ^^ NONE of these actually set it to NULL - it deletes this element! 
    			# check out: https://stackoverflow.com/questions/7944809/assigning-null-to-a-list-element-in-r
    			tracker[arr[i - (k - 1)]] = list(NULL);

    		};
    	};

    	return(all_maxes);
	};


	## following lines run samples:
	# first = c(10, 5, 2, 7, 8, 7); k = 3; solution(first, k); # solution should be (10, 7, 8, 8)