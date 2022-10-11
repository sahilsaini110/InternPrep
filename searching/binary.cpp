// MAJORITY ELEMENT
// Given an array A of N elements. Find the majority element in the array. 
// A majority element in an array A of size N is an element that appears more than N/2 times in the array.

// Constraints:
// 1 ≤ N ≤ 107
// 0 ≤ Ai ≤ 106


#include<bits/stdc++.h>
using namespace std;

int majorityElement(int a[], int n){
    int count = 0;
    int candidate = 0;

    for(int i = 0; i < n; i++){
        if(count == 0){
            candidate = a[i];
        }
        if(a[i] == candidate){
            count++;
        }
        else{
            count--;
        }
    }

    int count2 = 0;
    for(int i = 0; i < n; i++){
        if(a[i] == candidate){
            count2++;
        }
    }
    if(count2 > n/2){
        return candidate;
    }
    else{
        return -1;
    }
}

int main(){
    int n;
    cin >> n;
    int arr[n];

    for(int i = 0; i < n; i++){
        cin >> arr[i];
    }
    cout << majorityElement(arr, n) << endl;
    return 0;
}
