let data = [];
let currSize = data.length;
let max= 5;


function push(newEle){
    if(currSize >= max){
        console.log("Stack is full");
    }
    data[currSize] = newEle;
    currSize+=1;
}

function pop(){
    if(currSize > 0){
        currSize -= 1;
        data.length = currSize;

    }else{
        console.log("stack is empty");
    }

}


push(2);
push(12);
push(50);
push(1);
push(6);
// push(4);

pop();
pop();
pop();
pop();
pop();

console.log(data);
