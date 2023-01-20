var productExceptSelf = function(nums) {
    const pre=[];
    for(let i=0;i<nums.length;i++){
      if(nums[i-1]==undefined){
          pre[i]=nums[i]
      }
      else{
          pre[i]=nums[i]*pre[i-1]
      }
    }
 let post =1;
 for(let j =nums.length-1;j>=0;j--){
         if(nums[j+1]==undefined){
             pre[j]=pre[j-1];
             post=nums[j];
         }
          else{
              pre[j]=(pre[j-1]==undefined?1:pre[j-1])*post;
              post=post*nums[j]
          }
 }
 return pre;
 };