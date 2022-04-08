# solution.R

# thanks to this -> "Test If List Element Exists in R (3 Examples) | names, is.null & exists Functions | %in%-Operator"
# by Statistics Globe:
# https://www.youtube.com/watch?v=Eird3kgAYaM

## WORKING ATTEMPT ##
	solution = function(A) {
    	# how many filters we need?
	    filters_needed = 0; total_pollution = 0;
	    # we'll have an object that tracks the minimum and as maximum, only
	    minMaxTracker = list(); tracker = list(); min_val = A[1]; max_val = 0;

		# hajime!!
		for(i in 1:length(A)) {
			# track each iteration
			if( as.character(A[i]) %in% names(minMaxTracker) ){
				minMaxTracker[[as.character(A[i])]] = c(minMaxTracker[[as.character(A[i])]], i);
			}
			else minMaxTracker[as.character(A[i])] = c(i);
			# get total pollution
			total_pollution = total_pollution + A[i];

			# get minimum and maximum
			if(A[i] > 1){
				min_val = min(A[i], min_val);
			};
			max_val = max(A[i], max_val);
		};
		# print(min_val, max_val, minMaxTracker);

		# then determine how many filters needed:
		sum_so_far = 0; j = max_val;
		while( j >= min_val && (total_pollution - sum_so_far) > (total_pollution/2) ){
			if( as.character(j) %in% names(minMaxTracker) ){
				thisVector = minMaxTracker[[as.character(j)]];
				for(k in 1:length(thisVector)){
					powers = 0; current = A[thisVector[k]];
					whereWeAt = current*(2^powers);
					while(whereWeAt >= min_val){
						# update it
						powers = powers-1;
						whereWeAt = current*(2^powers);
					};
					# how many filters we got so far?
					filters_needed = filters_needed + abs(powers);
					tracker[as.character(thisVector[k])] = abs(powers);
					sum_so_far = sum_so_far + (current - whereWeAt);
				};
			};
			j = j-1;
		};

		# print(minMaxesArr);
		# print(tracker);
		return(filters_needed);
	};

	## following lines run samples:
	first = NULL;

	first = c(5, 19, 8, 1);
	print("\nRunning for vector:"); first;
	print( paste("Outcome returned:", solution(first)) );
	# outcome should be 3

	first = c(10, 10);
	print("\nRunning for vector:"); first;
	print( paste("Outcome returned:", solution(first)) );
	# outcome should be 2

	first = c(10, 10, 10);
	print("\nRunning for vector:"); first;
	print( paste("Outcome returned:", solution(first)) );
	# outcome should be 3

	first = c(10, 5, 10);
	print("\nRunning for vector:"); first;
	print( paste("Outcome returned:", solution(first)) );
	# outcome should be 4

	first = c(3, 0, 5);
	print("\nRunning for vector:"); first;
	print( paste("Outcome returned:", solution(first)) );
	# outcome should be 2