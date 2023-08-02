// let n=5;
// let print = '';

// for(let i=0; i<n; i++){
//     for(let s=0; s<n - i; s++){
//         print += ' ';
//     }
//     for(let j=0; j<=i; j++){
//         print += '*';
//     }
//     for(let j=0; j<i; j++){
//         print += '*';
//     }
//     for(let l=i; l<n; l++){
//         print += ' ';
//     }
//     for(let l=i; l<n; l++){
//         print += ' ';
//     }
//     for(let o=0; o<=i; o++){
//         print += '*';
//     }
//     for(let m=0; m<i; m++){
//         print += '*';
//     }
//     print += '\n';
// }

// for(let i=0; i<=n; i++){
//     for(let j=0; j<i; j++){
//         print += ' ';
//     }
//     for(let s=i; s<n; s++){
//         print += '*';
//     }
//     for(let j=i; j<=n; j++){
//         print += '*';
//     }
//     for(let l=0; l<i; l++){
//         print += ' ';
//     }
//     for(let l=0; l<i; l++){
//         print += ' ';
//     }
//     for(let o=i; o<=n; o++){
//         print += '*';
//     }
//     for(let m=i; m<n; m++){
//         print += '*';
//     }
//     print += '\n';
// }
// console.log(print);

let data = [1,4,6,2,5,8];

// console.log(data);

// let updateArray = data.splice(4,0,50);
// console.log(data);

let newEle = 72;
let pos = 2;

console.log(data);
for(let i=data.length-1; i>= 0; i--){
    if(i>= pos){
        data[i+1] = data[i];
        if(i == pos){
            data[i] = newEle;
        }
    }
}
console.log(data);
