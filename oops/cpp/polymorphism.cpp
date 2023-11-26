#include<bits/stdc++.h>
using namespace std;


// virtual function 
// class base{
//     public:
//     void show(){
//         cout<<"base"<<endl;

//     };

//     virtual void fun(){
//         cout<<"base"<<endl;
//     }
// };

// class dr1:public base{
//     public:
//         void show(){
//             cout<<"dr1"<<endl;
//         }
//         void fun(){
//             cout<<"dr1"<<endl;
//         }
// };

// class dr2: public base{
// public:
//         void show(){
//             cout<<"dr2"<<endl;
//         }
//         void fun(){
//             cout<<"dr2"<<endl;
//         }
// };



// abstract class
class base{
    public:
    base(){
        cout<<"hello"<<endl;
    }
    // virtual void show() = 0; // this means we dont want object os base class to instantiate.
// yahi h pure virtual function
    virtual void fun()=0; // aisa function jo common h baki se usse aisa krdo 
    // ye class bass ek parent ki trha act krti h or kisis kaam ki nhi h isliye isse khte h abstract class.
};

class dr1:public base{
    public:

        void fun(){
            cout<<"dr1"<<endl;
        }
};

class dr2: public base{
public:

        void fun(){
            cout<<"dr2"<<endl;
        }
};

int main(){

    base *ptr = new dr1();
    ptr->fun();
    ptr = new dr2();
    ptr->fun();
    return 0;
}