// solution.js


/* THIRD ATTEMPT */
	function solution(A) {
	    // write your code in JavaScript (Node.js 8.9.4)
	    try {
	    	// how many filters we need?
		    let filters_needed = 0, total_pollution = 0;
		    // we'll have a function that tracks the minimum, as well as maximum, and some other parameters
		    let minMaxesArr = [], tracker = {};
		    // fill with 0s
		    for(let i = 0; i <= Math.round(A.length/2); i++){
		    	minMaxesArr.push(0);
		    };
		    // make the minimum large, to begin with
		    // minMaxesArr[0] = 2**5;
		    
		    /* // if track value:
		    function trackArr(thisValue){
		    	// if it's lower than the minimum
			    if( (thisValue < minMaxesArr[0]) && thisValue > 1 ) {
			    	minMaxesArr[0] = thisValue;
			    	// we're done;
			    	return true;
			    }
			    else {
			    	// check from the back
			    	let keepGoing = true;
			    	for(let j = (minMaxesArr.length - 1); j > 0; j--){
			    		if(keepGoing){
				    		if(thisValue > minMaxesArr[j]) {
				    			temp = minMaxesArr[j];
				    			minMaxesArr[j] = thisValue;
				    			let previous_temp;
				    			for(let k = j-1; k > 0; k--){
				    				previous_temp = minMaxesArr[k];
				    				minMaxesArr[k] = temp;
				    				temp = previous_temp;
				    			};
				    			keepGoing = false;
				    		}
				    	}
			    	};
			    	return true;
			    }
			};
			*/

			// if track position:
		    function trackArr(thisPosition){
		    	// if it's lower than the minimum
			    if( (A[thisPosition] < A[minMaxesArr[0]]) && A[thisPosition] > 1 ) {
			    	minMaxesArr[0] = thisPosition;
			    	// we're done;
			    	return true;
			    }
			    // if it's equal to:
			    else if( (A[thisPosition] === A[minMaxesArr[0]]) && A[thisPosition] > 1 ) {
			    	if(A[thisPosition] >= A[minMaxesArr[1]]){
			    		minMaxesArr[1] = thisPosition;
			    	};
			    	// we're done;
			    	return true;
			    }

			    else {
			    	// check from the maximum, and shift downwards accordingly
			    	let keepGoing = true;
			    	for(let j = (minMaxesArr.length - 1); j > 0; j--){
			    		if(keepGoing){
				    		if( A[thisPosition] > A[minMaxesArr[j]] ) {
				    			temp = minMaxesArr[j];
				    			minMaxesArr[j] = thisPosition;
				    			let previous_temp;
				    			for(let k = j-1; k > 0; k--){
				    				previous_temp = minMaxesArr[k];
				    				minMaxesArr[k] = temp;
				    				temp = previous_temp;
				    			};
				    			keepGoing = false;
				    		}
				    	}
			    	};
			    	return true;
			    }
			};

			// hajime!!
			for(let i = 0; i < A.length; i++) {
				// track each iteration
				trackArr(i);
				// get total pollution
				total_pollution += A[i];
			};

			// then determine how many filters needed:
			let sum_so_far = 0;
			while((total_pollution - sum_so_far) > (total_pollution/2)) {

				for(let j = (minMaxesArr.length - 1); j > 0; j--){
					let powers = 0;
					let current = A[minMaxesArr[j]];
					let whereWeAt = current*(2**powers);
					while(whereWeAt >= A[minMaxesArr[0]]){
						// update it
						powers--;
						whereWeAt = current*(2**powers);
					};
					// how many filters we got so far?
					filters_needed += Math.abs(powers);
					tracker[minMaxesArr[j]] = Math.abs(powers);
					sum_so_far += (current - whereWeAt);
				};

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
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	first = [10, 10];
	console.log(`\nRunning for array ${first}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	first = [3, 0, 5];
	console.log(`\nRunning for array ${first}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);