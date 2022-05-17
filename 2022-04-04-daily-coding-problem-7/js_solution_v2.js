'use strict';
// solution.js


/* FIRST ATTEMPT */
	function solution(A) {
	    try {
	    	// add only the first 9 characters to memory.  Since all we care about is *count*, not the paths themselves:
	    	let memo = {}, counter = 0, letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	    	while(counter < 9){
	    		// memo[letters[counter]] = 1;
	    		memo[counter+1] = 1;
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
	    		let new_entry = 0;

	    		// if the str already exists as a letter, that's one way already:
	    		if(parseInt(str) <= letters.length) {
	    			new_entry = 1;
	    		};

	    		// if the first recursion below is of length 2 and greater than 26, remove 1:
	    		const first_element_removed = str.substring(1, str.length);
	    		const last_element_removed = str.substring(0, str.length-1);

	    		if( ( first_element_removed.length === 2 && parseInt(first_element_removed) > 26 ) || ( last_element_removed.length === 2 && parseInt(last_element_removed) > 26 ) ) {
	    			new_entry -= 1;
	    		};

	    		// recursion with the first and then first TWO elements removed
	    		new_entry += ways(str.substring(1, str.length)) + ways(str.substring(2, str.length));

	    		// else new_entry = ways(str.substring(0, str.length-1)) + ways(str.substr(-1,1));

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

	first = "111";
	console.log(`number of ways to decode "${first}": ${solution(first)} (expecting 3)`);
	// should equal 3

	first = "001";
	console.log(`number of ways to decode "${first}": ${solution(first)} (expecting 0)`);
	// should equal 0

	first = "27";
	console.log(`number of ways to decode "${first}": ${solution(first)} (expecting 1)`);
	// should equal 1

	first = "277";
	console.log(`number of ways to decode "${first}": ${solution(first)} (expecting 1)`);
	// should equal 1

	first = "62";
	console.log(`number of ways to decode "${first}": ${solution(first)} (expecting 1)`);
	// should equal 1

	first = "262";
	console.log(`number of ways to decode "${first}": ${solution(first)} (expecting 2)`);
	// should equal 2

	first = "626";
	console.log(`number of ways to decode "${first}": ${solution(first)} (expecting 2)`);
	// should equal 2

	first = "2626";
	console.log(`number of ways to decode "${first}": ${solution(first)} (expecting 4)`);
	// should equal 4

	first = "26262";
	console.log(`number of ways to decode "${first}": ${solution(first)} (expecting 3)`);
	// should equal 3