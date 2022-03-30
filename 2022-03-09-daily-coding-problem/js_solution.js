// solution.js


/* FIRST ATTEMPT */
	// "A" is the array, and "k" is the sum
	// function will return true if found
	const solution_v1 = (A, k) => {
		//  first, define a new array `B` of length `k`, containing empty elements
		let B = new Array(k);

		// iterate over the array `A`
		let i = 0, answer = false;
		while(i < A.length) {
			// deduct the value `k` from `A[i]` to get `k_left`
			let k_left = k - A[i];

			// check if array `B` is null/undefined at location `k_left`.
			if(B[k_left]) {
				// If it's not, congrats: you're done. Return `true`.
				answer = true;
				break;
			}
				// If it is...
			else {
				//...then place a new element into `B` at index location `A[i]`, with value equal to `1` (or `true`).
				B[A[i]] = true;
				// Also place `1` (or `true`) at index location `k_left`.
				B[k_left] = true;
			};
			i++;
		}

		/* or using a regular for-loop:
		let answer = false;
		for(let i = 0; i < A.length; i++) {
			// deduct the value `k` from `A[i]` to get `k_left`
			let k_left = k - A[i];

			// check if array `B` is null/undefined at location `k_left`.
			if(B[k_left]) {
				// If it's not, congrats: you're done. Return `true`.
				answer = true;
				break;
			}
				// If it is...
			else {
				//...then place a new element into `B` at index location `A[i]`, with value equal to `1` (or `true`).
				B[A[i]] = true;
				// Also place `1` (or `true`) at index location `k_left`.
				B[k_left] = true;
			};
		}
		*/

		return answer;
	};


	/* following lines run samples: */
	let start, stop, first, k;

	first = [10, 15, 3, 7]; k = 17;
	console.log(`\nRunning for array ${first} and sum "${k}"`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution_v1(first, k)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	// let's try an ordered list
	first = [3, 7, 10, 15]; k = 17;
	console.log(`\nRunning for array ${first} and sum "${k}"`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution_v1(first, k)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);

	// how about something that WON'T be found
	first = [3, 7, 10, 15]; k = 20;
	console.log(`\nRunning for array ${first} and sum "${k}"`);

	start = (new Date()).getTime();
	console.log(`Outcome returned: ${solution_v1(first, k)}`);
	stop = (new Date()).getTime();
	console.log(`Total time: ${(stop - start)/1000}s`);