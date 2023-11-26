#include <bits/stdc++.h>
using namespace std;

class rect{
    public:
    int len;
    int brth;

    rect(){
        len = 0;
        brth = 7;
        cout<<"rect default"<<endl;
    }
    // rect(int x=32,int y=6){
    //     len = x;
    //     brth =y;
    // }
    void show(){
        cout<<0<<5<<endl;
    }
};

class cuboid:public rect{
    public:
    int height;

    cuboid(int x=2){
        height =x;
    }
    //function overriding.
    // void show(){
    //     cout<<len<<height<<brth<<endl;
    // }

     void show(){
        cout<<len<<height<<brth<<endl;
        rect::show();
    }
};



int  main(){
    // base class ka cdefault constructor chalega hi dono case m 
    rect r1;
    r1.show();
    // base class ka cdefault constructor chalega hi dono case m 
    cuboid c2;
    // base class ka cdefault constructor chalega hi dono case m 
    cuboid c1(4);
    c2.show();
    r1.show();
    return 0;
}