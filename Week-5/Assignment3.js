const hasDuplicate=(arr)=> {
    const setContainer = new Set(arr);
    return setContainer.size !== arr.length;
}

console.log(hasDuplicate([10,20,10,30,20,40,50,50,60,60,70,60]));
