class Solution{
    public:
    long long findMinDiff(vector<long long> a, long long n, long long m){
        sort(a.begin(), a.end());
        
        int i=0;
        int j=m-1;
        
        int maxi =-1;
        int mini = a[n-1]+1;
        vector<long long> ans;
        while(j<n){
            mini = a[i];
            maxi = a[j];
            ans.push_back((maxi-mini));
            maxi =-1;
            mini = a[n-1]+1;
            i++;
            j++;
        }
    sort(ans.begin(),ans.end());
    return ans[0];
    } 
    
    /*
    sort(a.begin(),a.end());
    long long ans = INT_MAX;
    for(int i = 0;i <= n-m;i++) ans = min(ans,a[i+m-1]-a[i]);
    return ans;
    */
};