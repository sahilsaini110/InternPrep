#include <bits/stdc++.h>
using namespace std;

// heap class 
class heap{
    public:
        int arr[100];
        int size;
    heap(){
        arr[0] = -1;
        size = 0;
    }

// insert function in heap.
    void insert(int key){
        size =  size +1;
        int index = size;
        arr[index] = key;
        while(index >1){
           int parent = index/2;
            if(arr[parent] < arr[index]){
                swap(arr[index], arr[parent]);
                index = parent;
            }else{
                return;
            }
        }
    };

// delete from the heap.
    void deletekey(){
        if(size==0){
            cout<<"nothing to delete"<<endl;
            return;
        }
        int i= 1;
        arr[i] = arr[size];
        size--;
        while(i<size){
            int lchild = 2*i;
            int rchild = 2*i + 1;
            if(lchild<size && arr[i] < arr[lchild]){
                swap(arr[i], arr[lchild]);
                i = lchild;
            }else if(rchild<size && arr[i] < arr[rchild]){
                swap(arr[i], arr[rchild]);
                i = rchild;
            }else{
                return;
            }
        }
    };

// print function for heap.
    void print(){
        for(int i=1; i<=size; i++){
            cout<<arr[i]<<" " ;
        }cout<<endl;
    }


};


//  heapify algo ..
void heapify(int arr[], int size, int i) {
    int largest = i;
    int lchild = 2*i+1;
    int rchild = 2*i+2;
    if(lchild<=size && arr[largest]<arr[lchild]){
            // swap(arr[i], arr[lchild]);
           largest= lchild;
            // heapify(arr, size, i);
    }
    if(rchild<=size && arr[largest]<arr[rchild]){
            // swap(arr[i], arr[rchild]);
           largest= rchild;
            // heapify(arr, size, i);
    }

    if(largest != i){
            swap(arr[largest],arr[i]);
            heapify(arr, size, largest);
    }
};

//  main programe starts from here.
int main()
{
    heap h;
    // h.print();
    int n;
    cout<<"enter the no of heap entries:"<<endl;
    cin>>n;
    // int data[n];
    // cout<< "enter data for heap:"<<endl;
    // for(int i=0; i<n; i++){
    //     cin>>data[i];
    // }
    // for(int i=0; i<n; i++){
    //     h.insert(data[i]);
    // }
    int arr[5]= {40,50,20,60,30};

    for(int i=4/2; i>=0; i--){
       heapify(arr,n,i); 
    }
    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }cout<<endl;
    // h.print();
    // h.deletekey();
    // h.print();
    // h.deletekey();
    // h.print();
    // h.deletekey();
    // h.print();
    // h.deletekey();
    // h.print();
    // h.deletekey();
    // h.print();
    // h.deletekey();
    // h.print();
    return 0;
}