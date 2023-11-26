//write a program showing atm functionalities using oops   

#include <bits/stdc++.h>;
#include <conio.h>

using namespace std;


class atm{        //class atm
    private:
        double balance;
        long int account_No;
        string name;
        int pin;
        string mobile_No;


    public:

    void setData(double balance,
        long int account_No,
        string name,
        int pin,
        string mobile_No){
        balance = balance;
        account_No= account_No;
        name=name; 
        pin=pin;
        mobile_No = mobile_No;
    }

    long int getAccountNo(){
        return account_No;
    }

    string getName(){
        return name;
    }

    int getPin(){
        return pin;
    }

    double getBalance(){
        return balance;
    }

    string getMobile(){
        return mobile_No;
    }

    void setMobile(string mob_prev, string mob_new){
        if(mob_prev == mobile_No){
            mobile_No = mob_new;
            cout<<endl<<"updated success";
            _getch();
        }else{
            cout<<endl<<"error provide correct no.";
        }
    }

    void cashWithDraw(int amt){
        if(amt>0 && amt<balance){
            balance -= amt;
            cout<<endl<<"done"<<"remaining:"<<balance;
        }else{
            cout<<endl<<"pls enter correct amt;";
        }
    }



};

int main(){

    int choice = 0, enterPin;
    long int enterAccountNo;

    system("cls");

    atm user1;

    user1.setData(4500.0, 1234567, "sahil",1234, "8949676260");

    do{
        system("cls");
        cout<<"account";
        cin>>enterAccountNo;
        cout<<endl<<"enterpin";
        cin>>enterPin;

        if((enterAccountNo == user1.getAccountNo()) && (enterPin == user1.getPin())){
            do{
                int amt = 0;
                string oldmob, newmob;
                system("cls");
                cin>>choice;

                switch(choice){
                    case 1:{
                        user1.getBalance();
                        _getch();
                    } 
                    case 2:{
                        cout<<"amt"<<endl;
                        cin>>amt;
                        user1.cashWithDraw(amt);
                        _getch()
                    }
                    case 3:{
                        user1.setMobile(oldmob, newmob);
                    }
                    case 4:{
                        user1.getName();
                    }
                    case 5:{
                        exit(0);
                    }
                    default:{
                        break;
                    }

                }


            }
        }

    }while(1);

    return 0;
}