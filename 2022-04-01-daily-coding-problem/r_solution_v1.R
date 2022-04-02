# solution.R

## Approach from:
##	https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/ 
##	(archived here: https://archive.vn/wtABE)
##
	solution = function(A) {
		n = length(A);
		# To mark the occurrence of elements
		present = rep(F, n);
		
		# Mark the occurrences
		for(i in 1:n) {
			# Only mark the required elements
			# All non-positive elements and
			# the elements greater n + 1 will never
			# be the answer
			# For example, the array will be {1, 2, 3}
			# in the worst case and the result
			# will be 4 which is n + 1
			if (A[i] > 0 && A[i] <= n)
			{
				present[A[i]] = T;
			}
		}
		# Find the first element which didn't
		# appear in the original array

		for(i in 1:n) {
			if (!present[i])
			{
				return(i);
			}
		}
		# If the original array was of the
		# type {1, 2, 3} in its sorted form
		return(n + 1);
	};


	## following lines run samples:
	# A = c(3, 4, -1, 1); solution(A);
	# A = c(1, 2, 0); solution(A);
	# A = c(2, 4); solution(A);
	# A = c(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100); solution(A);