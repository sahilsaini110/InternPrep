#include <bits/stdc++.h>
using namespace std;


class Solution{
    public:
        int height(struct Node* node){
            // base case 
            if(node==NULL){
                return 1;
            }
            // recursion also this is when we considefr single node height == 1;
            return max(height(node->left) ,height(node->right)) + 1;
        }
};
