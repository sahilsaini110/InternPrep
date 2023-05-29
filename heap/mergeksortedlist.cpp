/* struct Node
{
	int data;
	Node* next;
	
	Node(int x){
	    data = x;
	    next = NULL;
	}
	
};
*/ 
class compare{
    public:
    bool operator()(Node* a, Node* b){
        return a->data >b->data;
    }
};

class Solution{
  public:
    //Function to merge K sorted linked list.
    Node * mergeKLists(Node *arr[], int K)
    {
        priority_queue<Node*, vector<Node*>, compare> pq;
        
        if(K==0){
            return NULL;
        }
        
        for(int i=0; i<K; i++){
            if(arr[i] != NULL){
               pq.push(arr[i]); 
            }
        }
        
        Node* head = NULL;
        Node* tail = NULL;
        while(pq.size()>0){
            Node* temp = pq.top();
            pq.pop();
             if(temp->next != NULL){
                    pq.push(temp->next);                    
            }
            if(head==NULL){
                head = temp;
                tail = temp;
            }else{
                tail->next = temp;
                tail = tail->next;
            }
        }   
        return head;
    }
};
