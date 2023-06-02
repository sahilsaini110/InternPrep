// #include <bits/stdc++.h> 
// int missingNumber(vector<int> &arr, int n) 
// {
//     // int ratio =INT_MAX;
//     // for(int i=1; i<n; i++){
//     //    int ans = arr[i]-arr[i-1];
//     //    ratio = min(ans, ratio);
//     // } 
//     // alyternate way to find ratio is 
//     int ratio = min((arr[1]-arr[0]),(arr[2]-arr[1])); 
//     int missnumber =0;
//     for(int i=1; i<n; i++){
//        if(arr[i]-arr[i-1] != ratio){
//            missnumber = arr[i-1] + ratio;
//        }
//     } 
//     return missnumber;
// }

// -************************************************-

#include <bits/stdc++.h> 
int missingNumber(vector<int> &arr, int n) 
{

    // it is increasing sequence
    int d = min((arr[1]-arr[0]),(arr[2]-arr[1]));
    int i = 0;
    int j = n-1;
    // whenever my missing element is occur after that all terms of AP appears one position earlier
    // 5 10 15 20 30 35
    // 25 is missing
    // 30 is appear one step early (at the position of 25)
    // 35 appears one steps early (at the position of 35) and so on.
    while(i<j){
        int mid = i+(j-i)/2;
        int curr = arr[0]+(mid)*d;
        // if condition satisfies that means all element are present upto that positions or there is no inconsistency
        if(curr == arr[mid]){
            i = mid+1;
        }else{
            j = mid;
        }
    }
    return arr[0]+i*d;
    
    
// Method 2
//     for(int i =1;i<n;i++){
//         if((arr[0]+(i)*d) != arr[i]){
//             return (arr[0]+(i)*d);
//         }
//     }
//    return -1;
}