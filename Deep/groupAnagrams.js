/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // intialize obj
    let obj={}
   // sort and add keys and values into the obj
    for (let str of strs){
      let chars=str.split("").sort().join("")
      if(obj[chars]){
          obj[chars].push(str)
      }
      else{
          obj[chars] = [str];
      }
     
    }
     console.log(obj)
    // return values from Object object
    return Object.values(obj)
};
