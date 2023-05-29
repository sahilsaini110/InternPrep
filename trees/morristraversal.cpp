// e pointer bnaya jo ki root ko point kr rha h initially.
Node * curr =  root;
// jab tak curr null nhi hota hum loop m jayenge.
while(curr!=NULL){
    if(curr->left == NULL){
        // agar left null h to print kr denege and right part p chale jayenge.
        cout<<curr;
        curr = curr->right;
    }else{
        // but if left is not null to hum predecessor nikalenege, ek baar left gaye and then right right.
       Node *  pred = curr->left;
       while(pred->right != NULL && pred->right != curr){
        pred = pred->right;
       }
        //    pred k right ko curr p point kra diya isse ek temporary link ban gya to traverse back to the root.
        if(pred->right == NULL){
            pred->right = curr;
            curr = curr->left;
        }else{
            // lekin agar pred ka right curr ko pointkrta h to phle hi ek link exist krti h and usse abhi hta do and right move krdo
            // cus agar link exist rti h and hum uspe dobara aaye h to hum left cover kr chuke hai.
            pred->right = NULL;
            curr = curr->right;
        }

    }
}