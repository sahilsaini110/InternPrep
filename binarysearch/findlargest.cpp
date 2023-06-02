#include <bits/stdc++.h> 
int findTheLargestElement(vector<int> &arr, int n) {
	int start = 0;
	int end = n-1;

	int mid = (end+start)/2;
	int ans=0;
	while(start<end){
		if(arr[mid] >= arr[0]){
			if(arr[mid] > arr[mid+1]){
				return arr[mid];
			}
			ans = mid;
			start =  mid+1;
		}else{
			end = mid -1;
		}
		mid = (end+start)/2;
	}
	if(start == end){
		return arr[start];
	}else
	return arr[ans];
}