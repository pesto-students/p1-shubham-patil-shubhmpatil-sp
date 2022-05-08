// Memoize function accept add function as input and check wheather passed inputs are present in cache or not
// we have create cache variable as map that content data in {key,value} pair. In our example number of inputs act as a 
// key and the their sum as value i.e. {number of inputs , => sum}

function Memorize(fn)
{
    const cache = new Map();
    return function (...args){
        const key = args.toString();
        console.log("fn called with "+ key);
        console.log(cache);
        if (cache.has(key)){
            
            return cache.get(key);
            
        }
        cache.set(key,fn(...args));
        return cache.get(key);
    };
}

// Add function accept n number of inputs and return single value as Sum of all values passed as argument
function add(...args) {
    var sum = 0;
    /* Here, we check whether Single argument is present or not, 
       if Yes, then simply return the value as it is.
    */
    if (args.length == 1)
    {
        return parseInt(args);
    }
    else {
        for (var i = 0; i < args.length;i++)
        {
            sum += parseInt(args[i]);
        }
    }
    return sum;
}

// Here, We have create time function only for the tracking execution time. 
function time(fn)
{
    console.time();
    fn();
    console.timeEnd();
}

const result = Memorize(add);

time(() => result(100,100));
time(() => result(100));
time(() => result(100,200));
time(() => result(100,100));
time(() => result(100,200));
time(() => result(100,200));
