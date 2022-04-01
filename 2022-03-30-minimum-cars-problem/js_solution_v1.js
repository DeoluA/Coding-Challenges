// solution.js


/* FIRST ATTEMPT: what I submitted to the interview. GARBAGE! DIDN'T EVEN FINISH! -__- */
	function solution(P, S) {
	    // write your code in JavaScript (Node.js 8.9.4)
	    try {
		    // P and S will always have the same length, so
		    let num_cars_initial = P.length;
		    // we'll also need an empty object to track which cars have free seats, if any
		    let free_seats = [], previous_free = 0;
		    // finally, we'll need to know the final number of cars, which initially will be the same as the beginning
		    let num_cars_final = num_cars_initial;

		    for(let i = 0; i < num_cars_initial; i++) {
		    	// any free seats
		    	if((S[i] - P[i]) > 0) {
		    		free_seats[i] = S[i] - P[i];
		    	}
		    }
		}
		catch(c){
			console.log(`caught: ${c}`);
		}
	};


	/* following lines run samples: */
	let start, stop, p, s;

	p = [1, 5, 1]; s = [1, 4, 1];
	console.log(`\nRunning for persons ${p} and car seats ${s}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(p, s)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);