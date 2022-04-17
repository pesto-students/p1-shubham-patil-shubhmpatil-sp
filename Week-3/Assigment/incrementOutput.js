function createIncrement()
{
    letcount = 0;
    functionIncrement()
    {
        count++;
    }
    letmessage = `Count is${count}`;
    functionlog()
    {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();

console.log(increment());
console.log(increment());
increment();
console.log(log()); // Count is 0


/*  When we execute functionCreateIncrement this function at line number 13
    it's create a execution context, here all the variables are assigned to memory.
    so the message variable is being created with "Count is 0" value, 
    but when we increment count by calling "increment" function it actually increment the count,
    but it does not change the value of message variable."log" function getting the access of "message" variable, 
    even after "functionCreateIncrement" function popped out from it's execution context, because of closure.
*/