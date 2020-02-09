function swap(arr, iIndex, jIndex){
    let temp = arr[iIndex];
    arr[iIndex]  = arr[jIndex];
    arr[jIndex] = temp;
}

class MinHeap {
    constructor() {
        this.heap = []
    }
    // return the minimum value from minHeap
    getMin() {
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
    // insert new node in minHeap
    insert(node) {
        // add new node in last 
        this.heap.push(node);

        // get new added node index;
        let current = this.heap.length - 1;

        // check current node with parent to satisfy minHeap
        while(current != 0 && this.heap[this.parent(current)] > this.heap[current]) {
            swap(this.heap, current, this.parent(current));
            current = this.parent(current)
        }
    }

    // remove minimum value from heap
    remove() {
        if(this.heap.length <= 1) {
            return this.heap.pop()
        }

        // get ROOT value
        const ROOT = this.heap[0];
        // make last node to root node
        this.heap[0] = this.heap.pop();
        // heapify to satisfy min heap
        this.heapify(0)
        return ROOT;
    }
    // heapify 
    heapify(i){
        let smallest = i;
        const l = this.left(i);
        const r = this.right(i);
        // check parent node with left child;
        if(l < this.heap.length && this.heap[l] < this.heap[i]) {
            smallest = l;
        }

        // check smallest node with right child
        if(r < this.heap.length && this.heap[r] < this.heap[smallest]) {
            smallest = r;
        }
        
        if(smallest !== i) {
            swap(this.heap, i, smallest);
            this.heapify(smallest)
        }
    }

}


const minHeap = new MinHeap();
// minHeap.insert(10)
// minHeap.insert(4)
// minHeap.insert(6)
// minHeap.insert(5)
// minHeap.insert(3)

// minHeap.insert(2)
// minHeap.insert(1)
// minHeap.insert(60)
// console.log(minHeap.heap)
// minHeap.remove();
// console.log(minHeap.heap)

module.exports = MinHeap;