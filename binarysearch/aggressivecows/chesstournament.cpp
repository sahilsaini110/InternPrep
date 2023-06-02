#include <bits/stdc++.h>

bool ispossible(vector<int>& positions , int n ,  int c, int mid){
	int player =1;
	int ans = positions[0];
	for (int i=1; i<n;i++){	
		if((positions[i] - ans) >= mid){
			// agar condition sahi aa rahi h to player bitha de and agle player ko bula le.
			player++;
			// or aisa krte krte tu saare player bitha deta h to mast true return krde.
			if(player==c){
				return true; 
			}
			ans = positions[i];
			// lekin mmanle ki nhi bitha paya saare to player ==m hoga hi nhi or nhih hua to flalse return krde.
		}
	}
	return false;
}

int chessTournament(vector<int> positions , int n ,  int c){
	sort(positions.begin(), positions.end());
	int start =1; 
	int end = positions[n-1] - positions[0];
	int mid = start +(end-start)/2;
	int ans=0;
	while(start<=end){
		if(ispossible(positions,n,c,mid)){
			ans = mid;
			start = mid+1;
		}else{
			end = mid-1;
		}
		mid = start +(end-start)/2;
	} 
	return ans;
}