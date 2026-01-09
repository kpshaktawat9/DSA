// bubble sorting 
let arr = [5, 3, 8, 4, 2];

function bubbleSort(array) {
    let n = array.length;
    for (let i = 0 ; i < n-1 ; i++)
    {
        for( let j = 0 ; j < n-1-i ; j++)
        {
            if(array[j] > array[j+1])
            {
                // swap array[j] and array[j+1]
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

// selction sorting
function selectionSort(array) {
    let n = array.length;
    for (let i = 0 ; i < n-1 ; i++)
    {
        let minIndex = i;
        for( let j = i+1 ; j < n ; j++)
        {
            if(array[j] < array[minIndex])
            {
                minIndex = j;
            }
        }
        if(minIndex !== i)
        {
            // swap array[i] and array[minIndex]
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}

// insertion sorting
function insertionSort(array) {
    let n = array.length;
    for (let i = 1 ; i < n ; i++)
    {
        let key = array[i];//3
        let j = i - 1;//0
        while(j >= 0 && array[j] > key)
        {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}

console.log(bubbleSort(arr)); // Output: [2, 3, 4, 5, 8]
console.log(selectionSort(arr)); // Output: [2, 3, 4, 5, 8]
console.log(insertionSort(arr)); // Output: [2, 3, 4, 5, 8]