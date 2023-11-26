#include <bits/stdc++.h>
using namespace std;
// by default access specifier is private
class house{
// now my member variables are private but functions are public this is how i am able to hide my member variables. 
    int len;
    int brth;
public:
    void setData(int x, int y){
        len = x;
        brth = y;
    }

    void area(){
        cout<<len*brth<<endl;
    }
};


// constructor 

class you{
    int age;
public:
    you(int y){
        age = y;
    }

    void get(){
        cout<<age<<endl;
    }
};

class shoe{
    int type;
    int size;
    int brand;
public:

// non- parametrised constructor this will call by default when object is created.
    // shoe(){
    //     type=0;
    //     size=2;
    //     brand=5;
    // }

// parameterised  constructor
    shoe(int a=0 , int b=2, int c=5){
        type = a;
        size = b;
        brand = c;
    }

// copy constructor we pass refrence of any other object here 
    shoe (shoe &a){ 
        type = a.type;
        size = a.size;
        brand = a.brand;
    }

    void get(){
        cout<<type<<size<<brand<<endl;
    }
};

int  main(){
    
    house h1; // memory allocated here;
    h1.setData(3, 4);
    h1.area();

    you y1(5);
    y1.get();

    shoe s1;
    s1.get();

    shoe s2(5,6,9);
    s2.get();

    shoe s3(s2);
    s3.get();

    return 0;
}