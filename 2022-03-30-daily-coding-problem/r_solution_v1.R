# solution.R

## FIRST ATTEMPT ##
	solution_v1 = function(A) {
		#  get the total product
		total_product = 1;
		# 'outcome' will be the new vector
		outcome = NULL; 

		# iterate over the array `A`
		for(i in 1:length(A)) {
			total_product = total_product * A[i];
		};

		# iterate over the array `A`
		for(i in 1:length(A)) {
			# divide each value by the `i`-th element
			outcome = c(outcome, total_product/A[i]);
		};

		return(outcome);
	};