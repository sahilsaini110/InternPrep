 // optimal solutionIn this i am using two pointer approach so i am checking arr1 last value and arr2 first value if arr1 is 
//  greater than arr2 then we swap arr1 value and arr2 value then we sort our both the arrays so we find our ans
            int left=n-1,right=0;
            while(left>=0 && right<m){
                if(arr1[left]>arr2[right]){
                    swap(arr1[left],arr2[right]);
                    left--,right++;
                }else{
                    break;
                }
            }
            sort(arr1,arr1+n);
            sort(arr2,arr2+m);