/*
I have explained how can we apply binary search even though the array is not sorted and explained my code in depth. So if you like this then please UPVOTE as it motivates me to post future explanations. 

 

Approach

If we go with the binary search approach then basically the logic is that if I add element1 + element2 ….. and so on of the vector then the addition of that should be less than or equal to the middle value. If the addition is greater, then we need to do count++ and then start allocating the board to the second painter. Later on I have written how will we find the middle value using the start and end values.

 

Now you would be wondering how will we get mid and how can we apply binary search as the vector is not sorted?

Well if I can find the smallest element in the vector then I can consider that as the start point. 
If I add all the elements then that is the maximum value of “end” that we can get.
Let's consider the testcase [23,12,42,7] k(painters) = 2

For the above mentioned testcase, the start =

12. End = 23+12+42+7 = 83.

We got the mid as (12+83)/2 = 47

The above will be the initial values for that testcase. 

Now I implemented the isAns function. So what that will do is if the addition of the elements before the mid value is ≤ mid, then we can add that element and store that value in the add variable.

Or else if add + arr[i] is greater than the mid value then we will move on to the next painter.

 

Now you'd be wondering that why add + arr[i] ?

Well let me tell you that if we do if(add>mid) then the next element's value that is greater than mid will also be added to the add variable and we don't want that as it will cause the value of add to be more than mid. Hence prior to that we will check that if we add the next element to add will it be greater than mid.
 

As we are moving to the next painter, we will also update the value of add to arr[i]. This is because we will be moving to the next iteration and in the next iteration we will of course add the value of the next element in the variable add.

 

Now your next question would be that why are we writing if(add>mid)?

Well let me tell you that as the elements in this vector are the pages, it is possible that, that element(page) is greater than the mid value. So we need to cover this edge case.
 

Now back to the findLargestMinDistance() function:-

The isAns function will return us true or false.
So if the ans is true then we will do end = mid-1, because if we set the mid value (limit) to high then it is allowing, so as we want the least of all the maximum answers that we got, we will do end = mid-1 or else we will do start = mid+1.
In this way we will keep changing the mid value and we can find the correct allocation of boards. Remember this is a continuous process as there is loops.
In the end we will print start.
 */

bool ispossible(vector<int> &boards, int k, int mid){

    int painter = 1;
    int time = 0;

    for(int i=0; i<boards.size(); i++){
        if((time + boards[i]) <= mid){
            time = time + boards[i];
        }else{
            painter++;
            if(painter>k || boards[i]>mid){
                return false;
            }
            time = boards[i];
        }
    }
    return true;
}

int findLargestMinDistance(vector<int> &boards, int k)
{
    int sum = 0;
    for(int i=0; i<boards.size(); i++){
        sum += boards[i];
    }
    int ans = 0;
    int start = 0;
    int end = sum;
    int mid = start + (end - start)/2;
    while(start<=end){
        if(ispossible(boards, k, mid)){
            ans = mid;
            end = mid-1;
        }else{
            start = mid+1;
        }
        mid = start + (end - start)/2;
    }
    return ans;
}