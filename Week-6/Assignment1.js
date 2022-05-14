const maxSum = (array) => {
    var max_val = 0;
    var sum = 0;
    var i=0;
    for (i=0;i<array.length;i++)
    {
        sum = Math.max(array[i],sum + array[i]);

        max_val = Math.max(sum,max_val);
    }
    return max_val;
}

// console.log("max sum of array: ",maxSum([1, 2, 3, 4, -10]));
console.log("max sum of array: ",maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

/* 
Time Complexity : O(n)
Space Complexity : O(1)
*/