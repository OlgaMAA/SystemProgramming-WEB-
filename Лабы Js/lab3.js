// ..1
// let admin;
// let myname;
// myname = 'Джон';
// admin=myname;
// console.log(admin);
// ..2
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(parseInt(a) + parseInt (b)); // 3
// ..3
// for(let i=1;i<=10;i++){
//   if(i%2==0){
//   console.log(i)
//   }
// }
// ..4
// let u=0;
// while (u<3){
// alert( `number ${u}!` );
// u++;
// }
// ..5
// let x=true;

// while (x){
// let num= prompt("число");
// if(num>100){
// x=false;
// break;
// }
// else {
// continue;
// }
// }

// ..6
// let n = 10;

// next:
// for (let i = 2; i <= n; i++) {

// for (let j = 2; j < i; j++) {
// if (i % j == 0) continue next;
// }

// console.log( i );
// }



// ..7
// function reverseNumber(number) {

// let result = 0;
// while (number) {
// result = result * 10 + number % 10;
// number = Math.floor(number / 10);
// }

// return result;

// }
// let number=123;
// let rev=reverseNumber(number);
// console.log(rev)




// ..8
// function povt(num){
// let arr=num.split('');
// for(let i=0;i<arr.length;i++){
//   if(arr[i]==arr[i+1]){
//     arr.splice(i, 1);
//     i--;
//   }
  
// }
// return arr;
// }

// let num='111333456';
// let res=[];
// aaa=povt(num);
// console.log(res);


// ..9
// function countDigit(n, k) {
//   let count=0;
//   let arr=n.split('');
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]==k){
//       count++;
//     }
//   }
//   return count;
// }
// 
// let n='1355567';
// let k=5;
// console.log(countDigit(n,k));

// ..9
// function countNum(n){
//   let count1=0;
//   let count0=0;
//   let arr=n.split('');
//   let d=0;
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//       d++;
//     }
//     else{
//       if(count0<d){
//         count0=d;
//       }
//       d=0;
//     }
//   }
//   return count0;
// }
// let n='11000001000010';
// console.log(countNum(n));
// ..10
// function countSTR(n){
//   let s;
//   let flag=false;
//   for(let i=0;i<n.length;i++){
//     flag = false;
//     s = n[i];
//     for(j=0;j<n.length;j++){
//       if(n[j]==n[i] && j!=i){
//         flag = true;
//         break;
//       }
//     }
//     if(!flag){
//       return s;
//     }
//   }
// }
// let n='фыйвфавыапрс';
// console.log(countSTR(n));
// ..11
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min) + min)
// } 
// let s = "1234567890qwertyuioplkjhgfdsazxcvbnm"
// function randNumb(n){
//   let str="";
//   for(i=0;i<n;i++){
//     str+=s[getRandomNumber(0,36)];
//   }
//   return str;
// }
// let n=5;
// console.log(randNumb(n));
// ..12
// function unic(n){
//   let s;
//   let arr =n.split('');
//   for(i=0;i<arr.length;i++){
//     s=n[i];
//     for(j=i+1;j<arr.length;j++){
//       if(arr[j]==s){
//         arr.splice(j, 1)
//       }
//     }
//   }
//   return arr;
// }
// let n='позволяеткопироватьтекстиз';
// console.log(unic(n));