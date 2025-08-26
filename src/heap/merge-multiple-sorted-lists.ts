import {Heap} from 'heap-js';



export const mergeSortedLists = (sortedLists : number[][]) : number[] => {

    const minHeap = new Heap(Heap.minComparator);





}

export const main = () => {
    const data1 : number[] = [];
    const data2 : number[] = [];
    const data3 : number[] = [];

    const mergedList = mergeSortedLists([data1, data2, data3]);
    console.log(`merged sortedLists are: ${JSON.stringify(mergeSortedLists)}`);
}