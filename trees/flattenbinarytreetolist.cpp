// we need to solve this in O(n) T.C and O(1) S.C 
// no traversal will work here except morris as all other take o(n), O(n).
// also if we try recuersion that will too take space.

Node *curr = root;

while(curr!==NULL){
// check kro yrr ki curr ka left exist krta h ya nhi agar nhi krta to aage badjao.
    if(curr->left==NULL){
        curr = curr->right;
    }else{
        // agar krta h to prev node nikalo to create link or kaise nikaloge is , ek baar left jao and fir right jaate rho until right is null
         prev = curr->left;
         while(pre->right !=NULL){
            prev = prev->right;
         }
        //  fir prev ko curr k right p point kro do and curr k right ko curr k left p
            prev->right = curr->right;
            curr->right = curr->left;
            // also left part ko null krdo ban gayi linked list hurrrey
            curr->left = NULL;
        curr = curr->right;
    }
}