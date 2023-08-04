//reverse an array with recursion

let data = [4,67,1,98,23,67];
let temp = 0;

function reverseMe(data, start, end){
    if(start <= end){
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;

        reverseMe(data, start +1, end - 1);
    }
    console.log(data);
}
reverseMe(data, 0, data.length-1);