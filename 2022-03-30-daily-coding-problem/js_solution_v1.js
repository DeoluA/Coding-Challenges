// solution.js


/* FIRST ATTEMPT */
	// "A" is the array
	const solution = (A) => {
		//  get the total product
		let total_product = 1;
		// 'outcome' will be the new array
		let outcome = []; 

		A.forEach((r) => {
			total_product *= r;
		});

		// iterate over the array `A`
		for(let i = 0; i < A.length; i++) {
			// divide each value by the `i`-th element
			outcome.push(total_product/A[i]);
		};

		return outcome;
	};


	/* following lines run samples: */
	let start, stop, first;

	first = [1, 2, 3, 4, 5];
	console.log(`\nRunning for array ${first}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	first = [3, 2, 1];
	console.log(`\nRunning for array ${first}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);