function fun(n)
{
    if(n == 0 ) return ;

    console.log(n);
    fun(n-1);
}

fun(5);

function funAdd(n)
{
    if(n == 0 ) return ;

    funAdd(n-1);
    console.log(n);
}

funAdd(5);

function funSum(n)
{
    if(n == 1 ) return n;

   return n + funSum(n-1);
}

var funSum = funSum(5);
console.log("funSum ",funSum);

function funFactorial(n)
{
    if(n == 1 ) return n;

   return n * funFactorial(n-1);
}

var funFactorial = funFactorial(5);

console.log("funFactorial ",funFactorial);