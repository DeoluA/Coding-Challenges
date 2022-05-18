'use strict';
// solution.js


/* FIRST ATTEMPT */
	function solution(s, k) {
	    // try {
	    	let tracker = {}, longest = "", all_seen = {};

	    	// hajime!
	    	for(let i = 0; i < s.length; i++){

	    		longest += s[i];

	    		// have we seen this?
	    		// if not, add it
	    		if(!tracker[(s[i]).toLowerCase()]) {
	    			tracker[(s[i]).toLowerCase()] = 1;
	    		}
	    		else tracker[(s[i]).toLowerCase()]++;

	    		let tracker_length = Object.keys(tracker).length;

	    		// if we've hit our goal:
	    		if(tracker_length <= k) {
	    			if(all_seen[longest.length]){
		    			all_seen[longest.length].push(longest);
		    		}
		    		else all_seen[longest.length] = [longest];
		    	}
		    	else if(tracker_length > k){
		    		// if we've exceeded our maximum
		    		while(tracker_length > k) {
		    			// reduce the count
		    			tracker[(longest[0]).toLowerCase()]--;
		    			// if it's zero, remove it
		    			if(tracker[(longest[0]).toLowerCase()] === 0){
			    			delete tracker[(longest[0]).toLowerCase()];
			    			tracker_length--;
			    		};	    			
		    			// then the first element encountered
		    			longest = longest.substring(1);
		    		};
	    			// updating, for good measure
	    			if(all_seen[longest.length]){
		    			all_seen[longest.length].push(longest);
		    		}
		    		else all_seen[longest.length] = [longest];
		    	};

	    	};

	    	// return the longest
	    	// console.log(all_seen);
	    	let all_seen_keys = Object.keys(all_seen)
	    	return all_seen[all_seen_keys.length];	// not minus 1, because we used the raw length in our loop earlier

		// }
		// catch(c){
		// 	console.log(`caught: ${c}`);
		// }
	};


	/* following lines run samples: */
	let first, k;

	first = "abcba";
	k = 2;
	console.log(`string ${first} and k ${k}`);
	console.log(solution(first, k));	// answer should be ['bcb']

	first = "abcba";
	k = 3;
	console.log(`string ${first} and k ${k}`);
	console.log(solution(first, k));	// answer should be ['abcba']

	first = "Apples";
	k = 2;
	console.log(`string ${first} and k ${k}`);
	console.log(solution(first, k));	// answer should be ['App', 'ppl']

	first = "Bananas";
	k = 2;
	console.log(`string ${first} and k ${k}`);
	console.log(solution(first, k));	// answer should be ['anana']

	first = "Bananas";
	k = 3;
	console.log(`string ${first} and k ${k}`);
	console.log(solution(first, k));	// answer should be ['Banana', 'ananas']