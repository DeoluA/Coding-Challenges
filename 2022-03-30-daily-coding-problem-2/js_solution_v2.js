// solution.js


/* SECOND ATTEMPT */
	// "A" is the array
	const solution = (A) => {
		try {
			// 'product_so_far' will track the product of all elements seen so far
			product_so_far = 1;
			// 'outcome' will be the new array
			let outcome = [];

			// if the given array's length is less than 2, stop
			if(A.length < 2) {
				console.log("Can't run. Not enough elements...outcome will be empty");
				return outcome;
			};

			// for the 0-th element, start with the product_so_far of '1'
			outcome.push(product_so_far);

			// iterate over the array `A`
			for(let i = 1; i < A.length; i++) {
				// multiply all the current elements of outcome by the current value
				let j = 0;
				while(j < outcome.length) {
					outcome[j] *= A[i];
					j++;
				};
				// then push the prev last element times the previous element
				product_so_far *= A[i-1];

				outcome.push(product_so_far);
			};

			return outcome;
		}
		catch(c) {
			console.log(`Something went wrong bro: ${c}`)
		};
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

	// how about the case of 0s?
	first = [2, 0, 3];
	console.log(`\nRunning for array ${first}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	// how about an empty array, or one with not enough elements?
	first = [2];
	console.log(`\nRunning for array ${first}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	// negative numbers?
	first = [2, -1, 3];
	console.log(`\nRunning for array ${first}`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution(first)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);