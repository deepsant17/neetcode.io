
var containsDuplicate = function(nums) {
    let counter={}
    for(let i of nums){
        (!counter[i]? counter[i]=1:counter[i]++)
    }
   for(let j in counter){
     if(counter[j]>1)return true;
   } 
   return false;
};