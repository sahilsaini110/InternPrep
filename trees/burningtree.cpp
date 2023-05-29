// this will create parent mapping and return target node.
Node* createParentMapping(Node* root, int target, map<Node*, Node*>& nodeToParent){
    
    Node* res=NULL;
    queue<Node*> q;
    q.push(root);
    // since root have no parent to marking it to null.
    nodeToParent[root] = NULL;
    // using level order traversal to do mapping.
    while(!q.empty()){
        Node* front = q.front();
        q.pop();
        // yha we are checking ki node ka data agar target k equal ho gya to we will update our res.
        if(front->data == target){
            res = front;
        }
        // if front left exist krta h to uski mapping kr denege
        if(front->left){
            nodeToParent[front->left] = front;
            q.push(front->left);
        }
        // if front right exist krta h to uski mapping kr denege
        if(front->right){
            nodeToParent[front->right] = front;
            q.push(front->right);
        }
    }
    return res;
}
// yha hum basically mapping and level order traversal ko use krke ans or time nikal rhe h.
void burnTree(map<Node*, Node*>& nodeToParent, Node* root,int &ans ){
// yha hume ek map chhaiye hoga to keep record ki hum uss node ko visit kiye ya nhi.
    map<Node*,bool> visited;
    queue<Node*> q;
    ans = 0;
    q.push(root);
    // level odrder traversal kr rhe h yha
    while(!q.empty()){
        int n = q.size();
        // ye flag hume btayega ki iss particular move m kuch add hua ya nhi queue m agar ye 1 hua to mtlb add hua wrna nhi.
        bool flag =0;
        // ye for loop hume ek particukar level m move krne ki opportunity deta h.
        for(int i=0; i<n;i++){
            Node* front = q.front();
            q.pop();
            // yha humne check kiya ki left exist krta h and kya usse isse phle visit kiya h gar nhi to usse queue m dalo
            // and mark flag 1 and visited true.
            if(front->left && !visited[front->left]){
                flag =1;
                q.push(front->left);
                visited[front->left] = 1;
            }
            // similar as we have done for left we are doing it for right.
            if(front->right && !visited[front->right]){
                flag =1;
                q.push(front->right);
                visited[front->right] = 1;
            }
            // same thing we are doing fro parent.
            if(nodeToParent[front] && !visited[nodeToParent[front]]){
                flag =1;
                q.push(nodeToParent[front]);
                visited[nodeToParent[front]] = 1;
            }
        }
        if(flag){
            ans++;
        }  
    }
}
class Solution {
  public:
    int minTime(Node* root, int target) 
    {
        int ans =0;
        map<Node*, Node*> nodeToParent;
        Node* targetNode = createParentMapping(root, target, nodeToParent);
        burnTree(nodeToParent, targetNode, ans);
        return ans;
    }
};