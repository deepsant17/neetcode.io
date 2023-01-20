/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let str1={}
    let str2={};

    if(s.length!=t.length) return false;
   for(let i of s){
       (!str1[i])?str1[i]=1:str1[i]++;
   }
    for(let j of t){
       (!str2[j])?str2[j]=1:str2[j]++;
   }
   for(let i in str1)
  { if(str1[i]!=str2[i]) return false;}
  return true;
};