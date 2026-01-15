function binarySearch(arr, first ,last , target)
{
    if (first <= last)
    {
        let mid  = Math.floor((first+last)/2);

        if(arr[mid] === target)
        {
            return mid;
        }
        else if(arr[mid] > target)
        {
            return binarySearch(arr, first, mid-1, target);
        }
        else
        {
            return binarySearch(arr, mid+1, last, target);
        }
    }else{
        return -1;
    }
}

let arr = [2,3,4,10,40,50,60,70,80,90,100];
let target = 40;
let result = binarySearch(arr, 0, arr.length-1, target);

if(result === -1)
{
    console.log("Element is not present in array ");
}else{
    console.log("Element is present at index ", result);
}
