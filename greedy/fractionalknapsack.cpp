#include <bits/stdc++.h>
/*
mannlo vector ko sort krna h bor vector int type ka h 
to cmp m int value leni hongi as a argumnet, but agar vector
pair type ka h to cmp m pair lena hoga as an argumnet na ki vector
khud.
or decreasing order r1>r2;
for increasing order r1<r2;
*/
static bool cmp(pair<int, int> a, pair<int, int> b) {

    double r1 = (double) a.second / (double) a.first;
    double r2 = (double) b.second / (double) b.first;

    return r1 > r2;
}

double maximumValue (vector<pair<int, int>>& items, int n, int w)
{
    sort(items.begin(), items.end(), cmp);
    double value =0.0;
    for(int i=0; i<n;i++){
        if(items[i].first <= w){
            value += items[i].second;
            w = w - items[i].first;
        }else{
            value += w*((1.0)*items[i].second/items[i].first);
            break;
        }
    }
    return value;
}