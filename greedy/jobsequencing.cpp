#include <bits/stdc++.h> 

/*
mannlo vector ko sort krna h bor vector int type ka h 
to cmp m int value leni hongi as a argumnet, but agar vector
pair type ka h to cmp m pair lena hoga as an argumnet na ki vector
khud.
similarli agar ek vector of vector h to hum argumnet m 
vector of vector nhi lenge balki ek vector lenge and usko kaise sort krna h 
vo likhenge.
or decreasing order r1>r2;
for increasing order r1<r2;
*/

bool comparator(vector<int>j1,vector<int>j2) {
    return j1[1]>j2[1] || (j1[1]==j2[1] && j1[0]>=j2[0]);
}

int jobScheduling(vector<vector<int>> &jobs) {
    sort(jobs.begin(),jobs.end(),comparator);
    int maxDeadline=-1,profit=0;
    for(int i=0;i<jobs.size();i++) {
        maxDeadline=max(maxDeadline,jobs[i][0]);
    }
    vector<int>dp(maxDeadline+1,-1);
    for(int i=0;i<jobs.size();i++) {
        int d=jobs[i][0];
        for(int j=d;j>0;j--) {
            if(dp[j]==-1) {
                dp[j]=jobs[i][1];
                break;
            }
        }
    }
    for(int i=1;i<=maxDeadline;i++) {
        if(dp[i]!=-1) {
            profit+=dp[i];
        }
    }
    return profit;
}