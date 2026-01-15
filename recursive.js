// function fun(n)
// {
//     if(n == 0 ) return ;

//     console.log(n);
//     fun(n-1);
// }

// fun(5);

// function funAdd(n)
// {
//     if(n == 0 ) return ;

//     funAdd(n-1);
//     console.log(n);
// }

// funAdd(5);

// function funSum(n)
// {
//     if(n == 1 ) return n;

//    return n + funSum(n-1);
// }

// var funSum = funSum(5);
// console.log("funSum ",funSum);

// function funFactorial(n)
// {
//     if(n == 1 ) return n;

//    return n * funFactorial(n-1);
// }

// var funFactorial = funFactorial(5);

// console.log("funFactorial ",funFactorial);

// function funFibonacci(n)
// {
//     if(n <= 1 ) return n;

//     return funFibonacci(n-1) + funFibonacci(n-2);
// }

// var funFibonacci = funFibonacci(6);

// console.log("funFibonacci ",funFibonacci);

// print fibonacci series upto n terms using recursive function
// function fibonacciSeries(n)
// {
//     if(n <= 1 ) return n;
//     var series = [];
//     for(var i=0; i<n; i++)
//     {
//         series.push(fibonacciSeries(i));
//     }
//     return series;
// }

// var fibonacciSeries = fibonacciSeries(6);

// console.log("fibonacciSeries ",fibonacciSeries);

function funGcd(a,b)
{
    if(a == b) return a

    if(a>b ) return funGcd(a-b,b);
    else return funGcd(a,b-a);
}

var funGcd = funGcd(32,20);

console.log("funGcd ",funGcd);
    