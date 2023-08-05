class Queue{
constructor(size){
    this.maxSize = size;
    this.item = new Array(size);
    this.curSize = 0;
    this.rear = -1;
    this.front = -1;
}
enqueue(val){
    if(this.curSize != this.maxSize){
        if(this.rear == this.maxSize -1){
            this.rear = 0;
        }else{
            this.rear++;
        }
        this.item[this.rear] = val;
        if(this.front == -1){
            this.front = this.rear;
        }
    }
}
// dequeue()
display(){
    console.log(this.item);
}

}

let data = new Queue(5);
data.enqueue(2);
data.display();