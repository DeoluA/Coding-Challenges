// solution.js


/* FOURTH ATTEMPT */
	function solution(A) {
	    // write your code in JavaScript (Node.js 8.9.4)
	    try {
	    	// how many filters we need?
		    let filters_needed = 0, total_pollution = 0;
		    // we'll have an object that tracks the minimum and as maximum, only
		    let minMaxTracker = {}, tracker = {}, min_val = A[0], max_val = 0;

			// hajime!!
			for(let i = 0; i < A.length; i++) {
				// track each iteration
				if(minMaxTracker[A[i]]) {
					minMaxTracker[A[i]].push(i);
				}
				else minMaxTracker[A[i]] = [i];
				// get total pollution
				total_pollution += A[i];

				// get minimum and maximum
				min_val = A[i] < min_val && A[i] > 1 ? A[i] : min_val;
				max_val = A[i] > max_val ? A[i] : max_val;
			};
			// console.log(min_val, max_val, minMaxTracker);

			// then determine how many filters needed:
			let sum_so_far = 0, j = max_val;
			while( j >= min_val && (total_pollution - sum_so_far) > (total_pollution/2) ){
				if(minMaxTracker[j]){
					let thisArr = minMaxTracker[j];
					for(let k = 0; k < thisArr.length; k++){
						let powers = 0, current = A[thisArr[k]];
						let whereWeAt = current*(2**powers);
						while(whereWeAt >= min_val){
							// update it
							powers--;
							whereWeAt = current*(2**powers);
						};
						// how many filters we got so far?
						filters_needed += Math.abs(powers);
						tracker[thisArr[k]] = Math.abs(powers);
						sum_so_far += (current - whereWeAt);
					};
				};
				j--;
			};

			// console.log(minMaxesArr);
			// console.log(tracker);
			return filters_needed;


		}
		catch(c){
			console.log(`caught: ${c}`);
		}
	};


	/* following lines run samples: */
	let start, stop, first;

	first = [5, 19, 8, 1];
	console.log(`\nRunning for array ${first}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first)}`);
	// outcome should be 3
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	first = [10, 10];
	console.log(`\nRunning for array ${first}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first)}`);
	// outcome should be 2
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	first = [10, 10, 10];
	console.log(`\nRunning for array ${first}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first)}`);
	// outcome should be 3
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	first = [10, 5, 10];
	console.log(`\nRunning for array ${first}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first)}`);
	// outcome should be 4
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	first = [3, 0, 5];
	console.log(`\nRunning for array ${first}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first)}`);
	// outcome should be 2
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);