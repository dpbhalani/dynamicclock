setInterval( ()=> {

   d = new Date();

   hhour = d.getHours();
   mminute = d.getMinutes();
   ssecond = d.getSeconds();

   hrotate = (30*hhour + mminute/2);
   mrotate = (6*mminute);
   srotate = (6*ssecond);

   hour.style.transform = `rotate(${hrotate}deg)`;
   mnt.style.transform = `rotate(${mrotate}deg)`;
   scnd.style.transform = `rotate(${srotate}deg)`;

},1000);



// let balance = arr => {
 
//    const ar1 = arr[0];
//    const ar2 = arr[1];
//    let num = "1234567890";
//    const a1 = [];
//    const a2 = [];
//    for(let i=0;i<ar1.length;i++){
//       if(num.includes(ar1[i])){
//          a1.push(Number(ar1[i]));
//       }
//    }
//    for(let i=0;i<ar2.length;i++){
//       if(num.includes(ar2[i])){
//          a2.push(Number(ar2[i]));
//       }
//    }
//     //console.log(a1); console.log(a2);
//     let n = a2.length;
//     const ans = [];
//    for(let i=0;i<n;i++){
//       if((a1[0]+a2[i]) == (a1[1])){
//          ans.push(a2[i]);
//          break;
//       }
//       for(let j=0;j<n;j++){
//          let n1 = a1[0]+a2[i];
//          let n2 = a1[1]+a2[j];
//          if(n1 == n2){
//             ans.push(a2[i]);
//             ans.push(a2[j]);
//             break;
//          }
//       }
//    }
//   return ans.map(x => console.log(x));
// }

// console.log(balance(["[5,9]","[1,2,6,7]"]));