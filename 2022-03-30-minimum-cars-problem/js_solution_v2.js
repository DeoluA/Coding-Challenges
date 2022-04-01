// solution.js


/* SECOND ATTEMPT */
	function solution(P, S) {
	    try {
		    // P and S will always have the same length, so let's declare our needed variables
		    let total_persons = 0, total_seats = 0, num_free_seats = 0;
		    // I'm going to use 'remainder' as an array, for reasons that should become apparent shortly
		    let remainder = [];

		    // final seating arrangment
		    let final_arrangement = new Array(P.length);
		    // ...and then just for clarity, let's also add the number of cars found
		    let final_num_cars = 0;

		    // get all the totals
		    for(let i = 0; i < S.length; i++) {
		    	total_persons += P[i];
		    	total_seats += S[i];
		    };

		    num_free_seats = total_seats - total_persons;

		    // the first element of 'remainder' will initially be the total number of persons
		    remainder.push(total_persons);

		    // begin the checks
		    // if there are no free seats, you're good with the original arrangement
		    if(num_free_seats <= 0) {
		    	final_arrangement = P;
		    	final_num_cars = final_arrangement.length;
		    }
		    else {
		    	while(remainder.length >= 1 && remainder[0] > 0) {
		    		let was_found = false;
		    		let k = 0;
		    		while(k < final_arrangement.length) {
			    		if(final_arrangement[k] === undefined && S[k] >= remainder[0]) {
			    			final_arrangement[k] = remainder[0];
			    			// remove it
			    			remainder.shift();
			    			was_found = true;
			    			final_num_cars++;
			    			break;
			    		};

			    		k++;
			    	};
		    		// if none is found, subtract
		    		if(!was_found){
			    		remainder[0] -= 1;
			    		if(remainder.length > 1) {
			    			remainder[remainder.length - 1] += 1;
			    		}
			    		else remainder.push(1);
			    	};

		    	}
		    }

		    console.log(`Number of cars necessary: ${final_num_cars}`);
			return final_arrangement;
		    

		}
		catch(c){
			console.log(`caught: ${c}`);
		}
	};


	/* following lines run samples: */
	let start, stop, p, s;

	p = [1, 4, 1]; s = [1, 5, 1];
	console.log(`\nRunning for persons ${p} and car seats ${s}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(p, s)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	p = [1, 2, 5, 1]; s = [3, 10, 2, 4];
	console.log(`\nRunning for persons ${p} and car seats ${s}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(p, s)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	p = [4, 4, 2, 4]; s = [5, 5, 2, 5];
	console.log(`\nRunning for persons ${p} and car seats ${s}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(p, s)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);