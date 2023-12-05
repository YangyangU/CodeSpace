s = "abcabcbb"

// var lengthOfLongestSubstring = function(s) {
//     const len=s.length
//     let res= 1;
//     if(len==0) return len;

//     for(let i=0; i<len; i++) {
//         let current=1;
//         let j = i+1;
//         let currentS=s[i]
//         while(!currentS.includes(s[j]) && j<len){
//             current++;
//             currentS = currentS + s[j]
//             j++;
//         }
//         res=Math.max(res,current);
//     }
//     return res;
// };

// console.log(lengthOfLongestSubstring(s));

// var lengthOfLongestSubstring = function(s) {
//     let i =0 ,res =0;
//     for(let j=0; j<s.length; j++) {
//         let index = s.slice(i,j).indexOf(s[j]);
//         if(index===-1){
//             res=Math.max(res,j-i+1);
//         }else{
//             i=index+1+i;
//         }
//     }
//     return res;
// }

// console.log(lengthOfLongestSubstring(s));


console.log([].valueOf());
console.log([].toString());
