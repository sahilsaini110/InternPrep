#include <bits/stdc++.h> 
bool isPossibleToSurvive(int n, int x, int d){
    // // Write your code here
    if(n<x)return false;
    if(d<7)return true;
    if(n>2*x)return true;
    return false;
    // int sunday = d/7;
    // int buyingdays = d-sunday;
    // int totalfoodneeded = x*d;
    // int ans = 0;
    // if(totalfoodneeded%n == 0){
    //     ans = totalfoodneeded/n;
    // }else{
    //     ans = totalfoodneeded/n +1;
    // }
    // if(ans <= buyingdays){
    //     return ans;
    // }else{
    //     return -1;
    // }
}