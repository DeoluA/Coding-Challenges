# solution.R

## SECOND ATTEMPT ##
	solution = function(A) {
		# 'product_so_far' will track the product of all elements seen so far
		product_so_far = 1;
		# 'outcome' will be the new vector...we'll declare it with product_so_far after the if statement

		# if the given vector's length is less than 2, stop
		if(length(A) < 2) {
			print("Can't run. Not enough elements...outcome will be empty");
			return(NULL);
		};

		# for the 1-th element (R is NOT zero indexed), start with the product_so_far of '1'
		outcome = c(product_so_far);

		# iterate over the vector `A`
		for( i in 2:length(A) ) {
			# in R, you can multiply over all elements at a go:
			outcome = outcome * A[i];
			
			# then push the prev last element times the previous element
			product_so_far = product_so_far * A[i-1];

			outcome = c(outcome, product_so_far);
		};

		return(outcome);
		
	};