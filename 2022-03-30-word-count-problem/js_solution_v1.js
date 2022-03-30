// solution.js


/* FIRST ATTEMPT: what I submitted to the interview */
	function solution(message, K) {
	    try {
		    // first, strip any double spaces
		    const m = message.replace(/  /gm, "");
		    // next, convert the string to an array of words. We'll split using spaces
		    const array_m = m.split(" ");

		    let outcome = "", counter = 0;

		    while(counter < array_m.length){
		    	// if adding this new word to the already existing outcome does NOT exceed the limit, add it
		    	let temp = outcome + " " + array_m[counter];
		    	if(temp.length <= K) {
		    		outcome = temp;
		    	}
	            // if it does, end it: we're done
	            else {
	                break;
	            };
			    //strip the space at the beginning, just in case
			    outcome = outcome.replace(/^ /, "");
		    	counter++
		    };

		    return outcome;
		}
		catch(c){
			console.log(`caught: ${c}`);
		}
	};


	/* following lines run samples: */
	let start, stop, first, K;

	first = "Fishing is seen by some to be a relaxing sport"; K = 15;
	console.log(`\nRunning for string ${first} and length "${K}"`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first, K)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	// K = 14
	K = 14;
	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first, K)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);