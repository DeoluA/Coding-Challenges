'use strict';
// solution.js


/* FIRST ATTEMPT */
	function solution(N, k) {
	    // try {
	    	let sorted_k = {};

	    	// sort the k
	    	for(let i = 0; i < k.length; i++){
	    		sorted_k[k[i]] = 1;
	    	};

	    	// let k_min = Object.keys(sorted_k)[0];

	    	function paths(N) {

				// break out
				if(N <= 0) {
					let nu = {};
					nu[0] = 1;
					return nu;
				};

				// call it again
				let current = paths(N - 1);
				// console.log(N, current);

				// initialize
				current[N] = 0;

				// add other ks
				// Object.keys(sorted_k).every((eachK) => {
				Object.keys(sorted_k).forEach((eachK) => {
					// add em up!
					if(current[N-eachK]){
						current[N] += current[N-eachK];
					};
				});

				return current;
			};

			let outcome = paths(N);

			// if we only want the count, then return the count at the point N
			// console.log(outcome);
			return outcome[N];

		// }
		// catch(c){
		// 	console.log(`caught: ${c}`);
		// }
	};


	/* following lines run samples: */
	let first, k;

	first = 4;
	k = [1, 2];
	// console.log(first);
	console.log(solution(first, k)); // solution should be 5

	first = 10;
	k = [2, 3, 5];
	// console.log(first);
	console.log(solution(first, k)); // solution should be 14