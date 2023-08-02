let data1= [2,5,7,8,9,0];
let data2 = [23,65,89,19,65];
let merge = [];


for(let i=0; i<data1.length; i++){
    merge[i] = data1[i];
}

for(let j=0; j<data2.length; j++){
    merge[data1.length + j] = data2[j]; 
}

//Easyway to perform same operation
// let result = [...data1, ...data2]; // It return whole array itself.
// console.log(result);

//Default option for merge
console.log(merge);

//Reverse an array
// console.log(data1);
// for(let i=data1.length-1; i>=0; i--){
//     console.log(data1[i]);
// }
