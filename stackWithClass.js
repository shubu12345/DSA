// class Operation{
// item=[];
// curSize;
// maxSize;
// constructor(size) {
//     this.maxSize = size;
//     this.curSize = this.item.length;
// }
// push(newVal){
//     if(this.curSize >= this.maxSize){
//         console.log("Stack is overflow");
//     }else{
//         this.item[this.curSize] = newVal;
//         this.curSize++;
//     }
// }
//     pop(){
//         if(this.curSize > 0){
//             this.curSize--;
//             this.item.length = this.curSize;
//         }else{
//             console.log("Stack is empty");
//         }

//     }
//     display(){
//         console.log(this.item);
//     }
// }

// let data = new Operation;
// data.push(2);
// data.push(4);
// data.pop();
// data.display();


//Reverse string using stack - class

class stack{
    item= [];
    curSize;
    maxSize;

    constructor(size){
        this.maxSize = size;
        this.curSize = this.item.length;
    }
    push(newVal){
        if(this.curSize > this.maxSize){
            console.log("stack is overflow");
        }else{
            this.item[this.curSize] = newVal;
            this.curSize++;
        }
    }
    pop(){
        if(this.curSize > 0){
            let lastRemovedItem = this.item[this.curSize - 1];
            this.curSize--;
            this.item.length = this.curSize;
            return lastRemovedItem;
        }
    }

    reverseStr(item){
        for(let i=0; i<item.length; i++){
            this.push(item[i]);
        }
        for(let i=0; i<item.length; i++){
            item[i] = this.pop();
        }
    }

    display(){
        console.log(this.item);
    }
}

let data = new stack;
// data.push(2);
// data.push(4);
// data.pop();

let str = "shubham";
str = str.split("");
data.reverseStr(str);
// console.log(str);

console.log(str.join(''));

// data.display();