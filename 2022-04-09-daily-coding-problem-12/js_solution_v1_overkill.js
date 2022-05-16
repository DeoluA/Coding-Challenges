'use strict';
// solution.js


/* FIRST ATTEMPT */
	function solution(N, k) {
	    // try {
	    	let tracker = {}, sorted_k = {};

	    	// sort the k
	    	for(let i = 0; i < k.length; i++){
	    		sorted_k[k[i]] = 1;
	    	};

	    	let k_min = Object.keys(sorted_k)[0];

	    	function paths(N) {

				// break out
				if(N <= 0) {
					let nu = {};
					nu[N] = {};
					nu[N][k_min] = 1;
					return nu;
				};

				// call it again
				let current = paths(N - 1);

				// initialize
				current[N] = {};

				// add other ks
				Object.keys(sorted_k).every((eachK) => {
					if(N > eachK) {
						// get the position
						let positionObj = current[N-eachK];
						if(Object.keys(positionObj).length > 0){
							let toCheck;
							Object.keys(positionObj).forEach((innerEach) => {
								// front 
								toCheck = innerEach+eachK;
								/*if(current[N][toCheck]){
									current[N][toCheck] += 1;
								}
								else current[N][toCheck] = 1;*/
								if(!current[N][toCheck]){
									current[N][toCheck] = 1;
								};

								// back
								toCheck = eachK+innerEach;
								/*if(current[N][toCheck]){
									current[N][toCheck] += 1;
								}
								else current[N][toCheck] = 1;*/
								if(!current[N][toCheck]){
									current[N][toCheck] = 1;
								};
							});
						};
						// delete current[eachK];
					}
					// else current[eachK] = 1;

					// finally, check if perfect division
					if((N % eachK) === 0) {
						let counter = 0, temp = "";
						while(counter < (N/eachK)){
							temp += eachK;
							counter++;
						};
						/*if(current[N][temp]){
							current[N][temp] += 1;
						}
						else current[N][temp] = 1;*/
						if(!current[N][temp]){
							current[N][temp] = 1;
						};
					};
					// stop clause
					return N > eachK;
				});

				return current;
			};

			let outcome = paths(N);

			// if we want all the paths, return outcome
			console.log("paths:", outcome);

			// if we only want the count, then return the count at the point N
			return Object.keys(outcome[N]).length;

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
	console.log(solution(first, k));

	first = 10;
	k = [2, 3, 5];
	// console.log(first);
	console.log(solution(first, k));