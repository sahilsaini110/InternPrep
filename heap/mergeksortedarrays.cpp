// #include <bits/stdc++.h> 
// vector<int> mergeKSortedArrays(vector<vector<int>>&kArrays, int k)
// {
//     //  vector<int> v;
//     // for(int i=0;i<k;i++){ 
//     //     v.insert(v.end(),karr[i].begin(),karr[i].end());
//     // }
//     // sort(v.begin(),v.end());
//     // return v;
// ******************************************************** alternate ****************************************
//     // vector<int>ans;
//     // for(int i=0;i<k;i++){
//     //     for(int j=0;j<kArrays[i].size();j++){
//     //         ans.push_back(kArrays[i][j]);
//     //     }
//     // }
//     // sort(ans.begin(),ans.end());
//     // return ans;
// }

// *************************************************************************************************************


#include <bits/stdc++.h> 
class node{
    public:
    int data;
    int row;
    int col;
    node(int data,int row,int col){
        this->data=data;
         this->col=col;
            this->row=row;        
    }
};
class compare{              
    public:
    bool operator()(node* a,node *b){
        return a->data>b->data;
    }
};
vector<int> mergeKSortedArrays(vector<vector<int>>&kArrays, int k)
{
  priority_queue<node*,vector<node*>,compare>minheap;
  vector<int>ans;
  for(int i=0;i<k;i++)  {
      node* temp=new node(kArrays[i][0],i,0);
      minheap.push(temp);
  }
  while (minheap.size() > 0) {
    node *temp = minheap.top();
    ans.push_back(temp->data);
    minheap.pop();
        int i=temp->row;
        int j=temp->col;
        if (j + 1 < kArrays[i].size()) {
          node *nextnode = new node(kArrays[i][j + 1], i, j+1);
          minheap.push(nextnode);
        }
  }
  return ans;
} 



/***************************** ******************************fastest sol *********************************
void merge(vector<int>& res, vector<int>& tmp, int start, int mid, int end) {
    int i = start;
    int j = mid + 1;
    int k = 0;
    while (i <= mid && j <= end) {
        if (res[i] <= res[j]) {
            tmp[k++] = res[i++];
        } else {
            tmp[k++] = res[j++];
        }
    }
    while (i <= mid) {
        tmp[k++] = res[i++];
    }
    while (j <= end) {
        tmp[k++] = res[j++];
    }
    for (i = start, k = 0; i <= end; i++, k++) {
        res[i] = tmp[k];
    }
}
void mergeSort(vector<int>& res, vector<int>& tmp, int start, int end) {
    if (start >= end) return;
    int mid = start + (end - start) / 2;
    mergeSort(res, tmp, start, mid);
    mergeSort(res, tmp, mid + 1, end);
    merge(res, tmp, start, mid, end);
}
vector<int> mergeKSortedArrays(vector<vector<int>>& kArrays, int k) {
    vector<int> res;
    for (int i = 0; i < k; i++) {
        for (int j = 0; j < kArrays[i].size(); j++) {
            res.push_back(kArrays[i][j]);
        }
    }
    vector<int> tmp(res.size());
    mergeSort(res, tmp, 0, res.size() - 1);
    return res;
}