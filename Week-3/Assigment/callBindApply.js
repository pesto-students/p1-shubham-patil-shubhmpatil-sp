const book = {
  name: "Kolar Gold Field",
  author: "Dr. S. Srikumar",
  total_sell: 1000,
  sell_funct(domestic, international) {
    this.total_sell = domestic + international;
  },
};

const movie = {
  name: "KGF",
  total_sell: 200000,
};

/* 
    Now movie also have the same variable total_sell,but here sell_funct is available in book object. 
    To use the sell_funct function from book object we can use .call() function
*/

console.log("1", movie.total_sell); // 200000
/* 
    we're calling "sell_funct" function, and changing the "this" instance from book object to movie object. 
*/
book.sell_funct.call(movie, 400, 1000);
console.log("2", movie.total_sell); // 1400

// .apply() also perform same thing as .call() but only the difference is it supports sequence as parameters.
book.sell_funct.apply(movie, [5000, 4060]);
console.log("3", movie.total_sell); // 9060

/* 
    .bind() returns a new function with a certain context and params, [call() and .apply() call the function immediately]
    .bind() accepts params just like .call()
*/
const sell_Calc = book.sell_funct.bind(movie, 700, 3000);
sell_Calc();
console.log("4", movie.total_sell); // 3700

/* 
  1. .call() and .apply() for borrowing methods from an object.
  2. .bind() is useful for us to call function on later point with a certain context or certain "this" keyword.
*/