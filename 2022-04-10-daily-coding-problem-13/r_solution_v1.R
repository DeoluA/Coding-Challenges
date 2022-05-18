# solution.R

	solution = function(s, k) {

        tracker = list(); longest = ""; all_seen = list();

        # hajime!
        for(i in 1:nchar(s)){

            current_char = substr(s, i, i);

            longest = paste0(longest, current_char);

            # have we seen this?
            # if not, add it
            if( length(tracker) == 0 || !tolower(current_char) %in% names(tracker) ) {
                tracker[tolower(current_char)] = 1;
            } else {
                tracker[[tolower(current_char)]] = tracker[[tolower(current_char)]] + 1;
            };

            tracker_length = length(names(tracker));

            # if we've hit our goal:
            if(tracker_length <= k) {
                if( length(all_seen) > 0 && nchar(longest) <= length(all_seen) ){
                    all_seen[[nchar(longest)]] = c(all_seen[[nchar(longest)]], longest);
                }
                else all_seen[nchar(longest)] = c(longest);
            }
            else if(tracker_length > k){
                # if we've exceeded our maximum
                while(tracker_length > k) {
                    # reduce the count
                    tracker[[tolower(substr(longest, 1, 1))]] = tracker[[tolower(substr(longest, 1, 1))]] - 1;
                    # if it's zero, remove it
                    if(tracker[[tolower(substr(longest, 1, 1))]] == 0){
                        tracker[tolower(substr(longest, 1, 1))] = NULL;
                        tracker_length = tracker_length - 1;
                    };                  
                    # then the first element encountered
                    longest = substring(longest, 2);
                };
                # updating, for good measure
                if( length(all_seen) > 0 && nchar(longest) <= length(all_seen) ){
                    all_seen[[nchar(longest)]] = c( all_seen[[nchar(longest)]], longest );
                }
                else all_seen[nchar(longest)] = c(longest);
            };

        };

        # return the longest
        # all_seen_keys = names(all_seen);
        return(all_seen[[length(all_seen)]]);

    };


	## following lines run samples:
	# first = "abcba"; k = 2; solution(first, k); # solution should be c('bcb')
    # first = "abcba"; k = 3; solution(first, k); # solution should be c('abcba')
    # first = "Apples"; k = 2; solution(first, k); # solution should be c('App', 'ppl')
    # first = "Bananas"; k = 2; solution(first, k); # solution should be c('anana')
    # first = "Bananas"; k = 3; solution(first, k); # solution should be c('Banana', 'ananas')