# solution.R

## FIRST ATTEMPT ##
	# "A" is the vector, and "k" is the sum
	# function will return true if found
	solution_v1 = function(A, k) {
		#  first, define an empty new vector `B`, put a 0 inside, just to initialize
		B = c(0);

		# iterate over the array `A`
		i = 1; answer = F;
		while(i <= length(A)) {
			# deduct the value `k` from `A[i]` to get `k_left`
			k_left = k - A[i];

			# check if array `B` is null/undefined at location `k_left`.
			if( !is.na(B[k_left]) ) {
				# If it's not, congrats: you're done. Return `true`.
				answer = T;
				break;
			}
				# If it is...
			else {
				#...then place a new element into `B` at index location `A[i]`, with value equal to `1` (or `true`).
				B[A[i]] = T;
				# Also place `1` (or `true`) at index location `k_left`.
				B[k_left] = T;
			};
			i = i + 1;
		}

		# or using a regular for-loop:
		# answer = F;
		# for(i in 1:length(A)) {
		# 	# deduct the value `k` from `A[i]` to get `k_left`
		# 	k_left = k - A[i];

		# 	# check if array `B` is null/undefined at location `k_left`.
		# 	if( !is.na(B[k_left]) ) {
		# 		# If it's not, congrats: you're done. Return `true`.
		# 		answer = T;
		# 		break;
		# 	}
		# 		# If it is...
		# 	else {
		# 		#...then place a new element into `B` at index location `A[i]`, with value equal to `1` (or `true`).
		# 		B[A[i]] = T;
		# 		# Also place `1` (or `true`) at index location `k_left`.
		# 		B[k_left] = T;
		# 	};
		# }
		

		return(answer);
	};