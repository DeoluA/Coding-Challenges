# solution.R

	solution = function(N, k) {
	    
    	sorted_k = list();

    	# sort the k
    	for(i in 1:length(k)){
    		# for sorting in R, it's a bit different:
    		# rather than use the as.character (which will insert elements as it appears),
    		# we'll use the numbers as is, and remove NULLs later
    		# We'll also put the number itself inside

    		sorted_k[k] = k;
    	};

    	# here we remove the NULLs:
    	sorted_k = sorted_k[!sapply(sorted_k,is.null)];

    	# ...and then we get the first occuring figure, if we need to:
    	# k_min = sorted_k[[1]];

    	# thank you https://www.tutorialspoint.com/how-to-remove-null-values-from-a-list-in-r for the inspiration!

    	# ...afterwards, we want it named:
    	names(sorted_k) = sapply(sorted_k, function(x){ return(as.character(x)) })

    	paths = function(N) {

			# break out
			if(N <= 0) {
				nu = list();
				# nu[1] = 1;
				nu["0"] = 1
				return(nu);
			};

			# call it again
			current = paths(N - 1);
			# print(N, current);

			# initialize
			N_character = as.character(N);
			current[[N_character]] = 0;

			# add other ks
			for(j in names(sorted_k)) {
				eachK = as.integer(j);
				N_eachK_character = as.character(N-eachK);
				# add em up!
				if( ((N-eachK) <= length(current)) && !is.null(current[[N_eachK_character]]) ){
					current[[N_character]] = current[[N_character]] + current[[N_eachK_character]];
				};
			};

			return(current);
		};

		outcome = paths(N);

		# if we only want the count, then return the count at the point N
		# print(outcome);
		return(outcome[[as.character(N)]]);
	};


	## following lines run samples:
	# first = 4; k = c(1, 2); solution(first, k); # solution should be 5
	# first = 10; k = c(2, 3, 5); solution(first, k); # solution should be 14