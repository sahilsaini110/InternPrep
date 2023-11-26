#include<bits/stdc++.h>
using namespace std;

class alpha{
    int a;
    int b;
    public:
        alpha(){
            a = 5;
            b = 5;
        }

        static int stat;

        static int getstat(){
            ++stat;
            return stat;
        }
};

//datatypes, class, scope resolution, nameofvariable
int alpha:: stat = 0;

int main(){

    alpha a1;

    cout<<a1.getstat()<<endl;
    cout<<alpha::getstat()<<endl;

    return 0;
}