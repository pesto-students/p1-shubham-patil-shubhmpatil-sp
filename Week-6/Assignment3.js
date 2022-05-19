const SortedArray = (array) => {

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

console.log("Sorted array", SortedArray([0, 0, 2, 1, 1, 0, 1, 2, 2]))

/* 
Time Complexity : O(n)
Space Complexity : O(1)
*/