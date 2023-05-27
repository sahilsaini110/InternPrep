void heapify(vector<int> &arr, int size, int index){
    // Step 1: Check the Base condition
    if(index >= size) return;

    // Step 2: Point a pointer to the smallest element to the root.
    int smallest = index;
    
    // Step 3: find the index to the right and left child.
    int left = index*2 + 1;
    int right = index*2 + 2;

    // Step 4: Check and update the smallest value.
    if(left < size && arr[smallest] > arr[left])
        smallest = left;
    if(right < size && arr[smallest] > arr[right])
        smallest = right;
    
    // Step 5: Check If the smallest value is updates
    if(smallest != index){
        // Step 6: swap the smallest value and the root value.
        swap(arr[smallest], arr[index]);
        
        // Step 7: Recursively update the updated tree.
        heapify(arr, size, smallest);
    }
}

vector<int> buildMinHeap(vector<int> &arr)
{
    // Time Complexity: O(N)
    int size = arr.size();
    // Step 1: Loop OVER ALL THE INTERNAL NODES AND APPLY HEAPIFY FROM BOTTOM-RIGHT.
    for(int i = (size/2 - 1); i >= 0; i--){
        // Step 2: Apply Heapify
        heapify(arr, size, i);
    }
    return arr;
}