//prime number
let N=1635;
let count=0;
for(i=0;i<N;i++){
if(N%i=0){
count++
}
}if(count==2){
console.log("Prime");
}else{
console.log("Not Prime");
}

//palindrome

let str=["level"];
 let bag = "";
   for(i=str.length-1;0>=i;i--){
       bag = bag + str[i];
   }if(bag == str){
       console.log("Yes");
   }else{
       console.log("No");
   }

