'use strict';
// solution.js


/* FIRST ATTEMPT */
	function solution(A) {
	    try {
	    	// add only the first 10 characters to memory.  Since all we care about is *count*, not the paths themselves:
	    	let memo = {}, counter = 0, letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	    	while(counter < 10){
	    		memo[letters[counter]] = 1;
	    		counter++;
	    	};

	    	function ways(raw_str){
	    		// lowercase it, just to be safe
	    		let str = raw_str.toLowerCase();

	    		// if it starts with a 0, bounce it
	    		if(str[0] === "0"){
	    			return 0;
	    		};

	    		// if it's already in the memory, return it
	    		if(memo[str]){
	    			return memo[str];
	    		};

	    		// if the string is empty,  we've reached the end: return 0
	    		if(str === ""){
	    			return 0;
	    		};

	    		// initiate recursion
	    		// if the str already exists as a letter, that's one way already:
	    		let new_entry;
	    		if(parseInt(str) <= letters.length) {
	    			new_entry = 1;
	    			// in which case, we only need one recursion to add to it
	    			new_entry += ways(str.substring(0, str.length-1));
	    		}
	    		// if it doesn't, we do two recursions
	    		else new_entry = ways(str.substring(0, str.length-1)) + ways(str.substr(-1,1));

	    		// update the memory 
	    		memo[str] = new_entry;

	    		// ...and we're done 
	    		return new_entry;
	    	};

	    	return ways(A);

		}
		catch(c){
			console.log(`caught: ${c}`);
		}
	};


	/* following lines run samples: */
	let first;

	// first = "111";
	// console.log(`number of ways to decode "${first}": ${solution(first)}`);

	// first = "001";
	// console.log(`number of ways to decode "${first}": ${solution(first)}`);

	first = "27";
	console.log(`number of ways to decode "${first}": ${solution(first)}`);

	// first = "2626";
	// console.log(`number of ways to decode "${first}": ${solution(first)}`);