//Stack normal operations push and pop
// let data = [];
// let currSize = data.length;
// let max= 5;


// function push(newEle){
//     if(currSize >= max){
//         console.log("Stack is full");
//     }
//     data[currSize] = newEle;
//     currSize+=1;
// }

// function pop(){
//     if(currSize > 0){
//         currSize -= 1;
//         data.length = currSize;

//     }else{
//         console.log("stack is empty");
//     }

// }

// push(2);
// push(12);
// push(50);
// push(1);
// push(6);
// push(4);

// pop();
// pop();
// pop();
// pop();
// pop();

// console.log(data);

//Reverse a string with stack

// let data = [];
// let  currSize = data.length;

// function push(item){
//     data[currSize] = item;
//     currSize += 1;
// }

// function pop(){
//     if(currSize < 0){
//         console.log("stack is empty");
//     }
//     lastRemovedItem = data[currSize - 1];
//     currSize -= 1;
//     data.length = currSize;
//     return lastRemovedItem;
// }

// function revString(item){
//     for(let i=0; i<item.length; i++){
//         push(item[i]);
//         // console.log(item);
//     }
//     for(let i=0; i<item.length; i++){
//         item[i] = pop();
        // console.log(pop());
//     }
// }

// let str = "shubham";
// str = str.split("");
// // console.log(str);
// revString(str);
// console.log(str.join(""));

// console.log(data);
// push(4);
// pop();
// console.log(data);

//Re-done
let data =[];
let curSize = data.length;

function push(newVal){
data[curSize] = newVal;
curSize += 1;
}

function pop(){
    lastRemovedItem = data[curSize - 1];
    curSize -= 1;
    data.length = curSize;
    return lastRemovedItem;
}

function reverseStr(item){
    for(let i=0; i<item.length; i++){
        push(item[i]);
    }
    for(let i=0; i<item.length; i++){
        item[i] = pop();
        // console.log(pop());
    }
}

let str = "shubham";
str = str.split("");
reverseStr(str);
console.log(str.join(''));


