
int countNodes(BinaryTreeNode<int>* root){
    // Time Complexity: O(N)
    // Space Complexity: O(Height)
    if(root == NULL) return 0;
    return (1 + countNodes(root->left) + countNodes(root->right));
}


bool isCBT(BinaryTreeNode<int>* root, int index, int size){
    // Approach: 0 based Indexing
    // Time Complexity: O(N)
    // Space Complexity: O(Height)
    // Base Case
    if(root == NULL) return true;
    if(index >= size) return false;
    bool left = isCBT(root->left, 2*index + 1, size);
    bool right = isCBT(root->right, 2*index + 2, size);
    return left && right;
}


bool isMaxHeap(BinaryTreeNode<int>* root){
    // Approach: Recursive + Case
    // Using the fact that it will come here only if the BT is CBT.
    // Time Complexity: O(N)
    // Space Complexity: O(Height)
    // Base Case
    if(root == NULL) return true;
    // Leaf Node
    if(root->left == NULL && root->right == NULL) return true;
    // Only Left Node
    if(root->right == NULL){
        return (root->data >= root->left->data);
    }
    // Both Child
    return ((root->data >= root->left->data) && (root->data >= root->right->data) && isMaxHeap(root->left) && isMaxHeap(root->right));
}


bool isBinaryHeapTree(BinaryTreeNode<int>* root) 
{   
    // Time Complexity: O(N)
    // Space Complexity: O(Height)
    int n = countNodes(root);
    return (isCBT(root, 0, n) && isMaxHeap(root));
}