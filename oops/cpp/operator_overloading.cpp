#include<bits/stdc++.h>
using namespace std;

class A{
    
    public:
    int weight;
    A(int x = 0){
        weight = x;
    }

    // traditional method.
    // A addWeight(A w2){
    //     A temp;
    //     temp.weight = weight + w2.weight;
    //     return temp;
    // }

    // operator overloading.
    A operator +(A w2){
        A temp;
        temp.weight = weight + w2.weight;
        return temp;
    }  

    // write a program to overload preincrement operator ++
    void operator ++(){
        ++weight;
    }

    // write a program to overload postincrement operator ++
    void operator ++(int){
        weight++;
    }

};

int main(){

    A p1(60);
    A p2(74);
    A t = p1 + p2;
    cout<<t.weight<<endl;
    ++p1;
    p2++;
    cout<<p1.weight<<endl;
    cout<<p2.weight<<endl;
    return 0;
}