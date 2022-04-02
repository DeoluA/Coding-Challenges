// solution.js


/* FIRST ATTEMPT: what I submitted to the interview. GARBAGE! */
	function solution(A) {
    try {
	    let filters_needed = 0;
	    // we'll make a copy and sort from smallest to largest, since we're modifying the array
	    // I've also found it's generally a good idea to keep track of the minimum and maximum values, just in case
	    let largest = 0, tiniest = 0;
	    let A_copy = [...A].sort((a, b) => {
            const more = a >= b ? a : b;
            const less = a <= b ? a : b;

            largest = more > largest ? more : largest;
            tiniest = less < tiniest ? less : tiniest;

            return a - b;
        });

	    let current_sum = 0;
	    // wish I didn't have to iterate over the whole array again
	    let total_pollution = 0; A_copy.forEach((r) => {total_pollution += r;});
        for(let i = 0; i < A.length; i++) {
        	let j = 1, iterate_sum;
	        if(current_sum >= (0.5 * total_pollution)) {
	        	break;
	        }
	        else {
	        	iterate_sum = 0;
	        	while( (A[i] * 2^(-j)) >= 0 ){
		        	iterate_sum += (A[i] * 2^(-j));
		        	j++;
		        }
	        }
	        filters_needed = filters_needed + j;
	        current_sum += iterate_sum
	    };

	    return filters_needed;

	}
	catch(c){
		console.log(`caught: ${c}`);
	}
};


	/* following lines run samples: */
	let start, stop, first, K;

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