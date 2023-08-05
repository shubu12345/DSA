let data =[];
let curSize = data.length;
let maxSize = 5;

function enqueue(newVal){
    if(curSize <= maxSize){
        data[curSize] = newVal;
        curSize++;
    } else {
        console.log("queue is full");
    }
}

function dequeue(){
    if(!isEmpty()){
        curSize--;
        data.length = curSize;
    } else {
        console.log("queue is empty");
    }
}

function front(){
    if(curSize >= 0){
        console.log(data[0]);
    }else{
        console.log("queue is empty");
    }
}

function rear(){
    if(curSize >= 0){
        console.log(data[curSize - 1]);
    }else {
        console.log("queue is empty");
    }
}

function isEmpty(){
    if(curSize <= 0){
        return true;
    }else {
        return false;
    }
}

function display(){
    console.log(data);
}

enqueue(1);
enqueue(3);
enqueue(5);
enqueue(7);
enqueue(9);
enqueue(11);
enqueue(13);
front();
rear();
// dequeue();
// dequeue();
// dequeue();
// dequeue();
// display();