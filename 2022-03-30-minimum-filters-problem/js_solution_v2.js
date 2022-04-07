// solution.js


/* SECOND ATTEMPT */
	function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
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
	    // console.log(`total_pollution: ${total_pollution}`);
	    // console.log(`A_copy: ${A_copy}`);

        for(let i = A_copy.length - 1; i >= 0; i--) {
        	let j = 1, iterate_sum;
	        if(current_sum >= (0.5 * total_pollution)) {
	        	break;
	        }
	        else {
	        	iterate_sum = 0;
	        	// console.log(j, 2**(-j));
	        	// console.log(`(A_copy[i] * 2**(-j)) ${(A_copy[i] * 2**(-j))}`);
	        	// while( (A_copy[i] * 2**(-j)) > 0 ){
	        	// while( iterate_sum <= A_copy[i] ) {
	        	while( iterate_sum <= (A_copy[i] - 1) ) {
	        		// console.log(iterate_sum)
		        	iterate_sum += (A_copy[i] * 2**(-j));
		        	j++;
		        }
		        // console.log(`A_copy[i], ${A_copy[i]}`);
		        // console.log(`iterate_sum, ${iterate_sum}`);
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

	first = "  Fishing is seen by some to be a relaxing sport"; K = 15;
	console.log(`\nRunning for string ${first} and length "${K}"`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first, K)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	// K = 14
	K = 14;
	console.log(`\nRunning for string ${first} and length "${K}"`);
	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first, K)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	first = "     A"; K = 1;
	console.log(`\nRunning for string ${first} and length "${K}"`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first, K)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);