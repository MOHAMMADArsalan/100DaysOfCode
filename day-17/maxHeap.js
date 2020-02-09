function swap(arr, iIndex, jIndex){
    let temp = arr[iIndex];
    arr[iIndex]  = arr[jIndex];
    arr[jIndex] = temp;
}

class MaxHeap {
    constructor() {
        this.heap = []
    }
    // return the maximum value from maxHeap
    getMax() {
        return this.heap[0]
    }

    // return parent index
    parent(i) {
        return Math.floor( i / 2);
    }
    // return left child index
    left(i) {
        return 2 * i + 1
    }
    //return right child index;
    right(i) {
        return 2 * i + 2;
    }
    // insert new node in maxHeap
    insert(node) {
        // add new node in last 
        this.heap.push(node);

        // get new added node index;
        let current = this.heap.length - 1;

        // check current node with parent to satisfy maxHeap
        while(current != 0 && this.heap[this.parent(current)] < this.heap[current]) {
            swap(this.heap, current, this.parent(current));
            current = this.parent(current)
        }
    }

    // remove maximum value from heap
    remove() {
        if(this.heap.length <= 1) {
            return this.heap.pop()
        }

        // get ROOT value
        const ROOT = this.heap[0];
        // make last node to root node
        this.heap[0] = this.heap.pop();
        // heapify to satisfy max heap
        this.heapify(0)
        return ROOT;
    }
    // heapify 
    heapify(i){
        let largest = i;
        const l = this.left(i);
        const r = this.right(i);
        // check parent node with left child;
        if(l < this.heap.length && this.heap[l] > this.heap[i]) {
            largest = l;
        }

        // check largest node with right child
        if(r < this.heap.length && this.heap[r] > this.heap[largest]) {
            largest = r;
        }
        
        if(largest !== i) {
            swap(this.heap, i, largest);
            this.heapify(largest)
        }
    }

}


const maxHeap = new MaxHeap();
maxHeap.insert(10)
maxHeap.insert(4)
maxHeap.insert(6)
maxHeap.insert(5)
maxHeap.insert(3)

maxHeap.insert(2)
maxHeap.insert(1)
maxHeap.insert(60)
console.log(maxHeap.heap)
maxHeap.remove();
console.log(maxHeap.heap)