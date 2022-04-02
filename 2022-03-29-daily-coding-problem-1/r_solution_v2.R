# solution.R

## SECOND ATTEMPT ##
	# "A" is the vector, and "k" is the sum
	# function will return true if found
	solution_v2 = function(A, k) {
		#  this time, we're using a named vector
		B = c("0" = F);

		# iterate over the vector `A`
		i = 1; answer = F;
		while(i <= length(A)) {
			# deduct the value `k` from `A[i]` to get `k_left`
			k_left = k - A[i];

			# check if named vector `B` is null/undefined (in this case, NA) at location `k_left`.
			# this time, we have to convert the value to string, so it can be part of the named indices
			if( !is.na(B[as.character(k_left)]) ) {
				# If it's not, congrats: you're done. Return `true`.
				answer = T;
				break;
			}
				# If it is...
			else {
				#...then place a new element into `B` at index location `A[i]`, with value equal to `1` (or `true`).
				B[as.character(A[i])] = T;
				# Also place `1` (or `true`) at index location `k_left`.
				B[as.character(k_left)] = T;
			};
			i = i + 1;
		}

		# or using a regular for-loop:
		# answer = F;
		# for(i in 1:length(A)) {
		# 	# deduct the value `k` from `A[i]` to get `k_left`
		# 	k_left = k - A[i];

		# 	# check if named vector `B` is null/undefined (in this case, NA) at location `k_left`.
		# 	if( !is.na(B[as.character(k_left)]) ) {
		# 		# If it's not, congrats: you're done. Return `true`.
		# 		answer = T;
		# 		break;
		# 	}
		# 		# If it is...
		# 	else {
		# 		#...then place a new element into `B` at index location `A[i]`, with value equal to `1` (or `true`).
		# 		B[as.character(A[i])] = T;
		# 		# Also place `1` (or `true`) at index location `k_left`.
		# 		B[as.character(k_left)] = T;
		# 	};
		# }
		

		return(answer);
	};