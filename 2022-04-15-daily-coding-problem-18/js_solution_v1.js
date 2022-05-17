'use strict';
// solution.js


/* FIRST ATTEMPT */
	function solution(arr, k) {
	    try {
	    	let tracker = {}, all_maxes = [];

	    	
	    	for(let i = 0; i < arr.length; i++){

	    		tracker[arr[i]] = 1;

	    		if(i >= (k - 1)) {
	    			let current_biggest = Object.keys(tracker)[Object.keys(tracker).length-1];
	    			all_maxes.push(current_biggest);
	    			delete tracker[arr[i - (k - 1)]];
	    		};
	    	};

	    	return all_maxes;

		}
		catch(c){
			console.log(`caught: ${c}`);
		}
	};


	/* following lines run samples: */
	let first, k;

	first = [10, 5, 2, 7, 8, 7];
	k = 3;
	// console.log(first);
	console.log(solution(first, k));
	// answer should be [10, 7, 8, 8]