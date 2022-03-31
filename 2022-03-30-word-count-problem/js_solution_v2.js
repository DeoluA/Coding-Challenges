// solution.js


/* SECOND ATTEMPT */
	function solution(message, K) {
	    try {
		    let outcome = "", counter = 0, previous_char = " ";

		    // a variable 'temp' will hold the current words encountered
		    let temp = "";

		    // this will keep track of if a word was started
		    let word_was_started = false;
		    
		    while(counter < message.length){
		    	// if the previous char is a space, and the current one is a space, move on
		    	if(previous_char === " " && message[counter] === " "){
		    		// do nothing
		    	}
		    	// if the previous char is a space, and the current one is NOT a space, a new word has begun
		    	else if(previous_char === " " && message[counter] !== " "){
		    		temp = message[counter];
		    		word_was_started = true;
		    	}
		    	// if the previous char is NOT a space, and the current one is NOT a space, it's another letter in the current word
		    	else if(previous_char !== " " && message[counter] !== " "){
		    		temp += message[counter];

		    		// we can also check here to see if we even need to keep going
		    		let length_so_far = outcome.length;
		    		let remaining = K - length_so_far;
		    		if(temp.length > remaining){
			    		// console.log("This current word's length has already exceeded. No need to continue.");
			    		break;
			    	}
		    		// set this back to false
		    		word_was_started = false;
		    	}
		    	// if none of the above conditions are met, then it's the end of a new word: do the check
		    	else {
			    	// if adding this new word to the already existing outcome does NOT exceed the limit, add it
			    	if(outcome !== ""){
			    		temp = outcome + " " + temp;
			    	};

			    	if(temp.length <= K) {
			    		outcome = temp;
			    	}
		            // if it does, end it: we're done
		            else {
		                break;
		            };
			    };
			    // update previous_char
			    previous_char = message[counter];

		    	counter++;
		    };

		    // if by some chance, the outcome is still empty, yet a word was started, we'll assume it's a one-letter word
		    if(outcome === "" && word_was_started){
		    	outcome = temp;
		    };

		    return outcome;
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