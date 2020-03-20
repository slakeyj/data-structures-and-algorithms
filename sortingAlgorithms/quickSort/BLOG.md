
#### How To Quicksort

* Today I'll step you through quick sort
* First, our pseudocode

![Pseudo1](../../assets/quick-sort-pseudo.png)
![Pseudo2](../../assets/quick-sort-partition.png)
![Pseudo3](../../assets/quick-sort-swap.png)

* The quickSort function calls partition.  Within partition a "pivot" is created.  Using this pivot, we then call our swap function to swap numbers based on the pivot.  


* Let's start with an example.  We will look at the recursive calls of just the left side of our array for this exercise:

![qs1](../../assets/quick-sort.jpg)

* As you can see, we will call quickSort recursively to continue branching our function out into "nodes".  We then stop recursion and swap our values.  One thing to note is that this is all being done in place, rather than creating new arrays like we did in merge sort.

![qs2](../../assets/quick-sort2.jpg)

* In our first call of quicksort we set the pivot to be 4.  

![qs3](../../assets/quick-sort3.jpg)

* This will set 4 into the middle of our array, with all values to the left being less than 4 and all values to right being greater than 4.
![qs4](../../assets/quick-sort4.jpg)
* We make another call to quickSort with the left side of our array. Pirot is set to 3.  Since both 1 and 2 are less than 3, no change occurs.
![qs5](../../assets/quick-sort5.jpg)
* We make another call to quicksort with the values of [1,2]. 2 is the pivot and no change is made
* One last call is made to quickSort with [2].  No change is made.


* Source: https://www.youtube.com/watch?v=COk73cpQbFQ