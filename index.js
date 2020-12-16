// let m=prompt("nhap vao chuoi");
// let a="";
// let j=0;
// for(let i=m.length-1;i>=0;i--){
//    a+=m[i];
   
// }
// console.log(a);
// let y=prompt("nhap vao chuoi");
// let u="addad";
// u[2]="x"

// // let x=u.charAt(2).toUpperCase();
// console.log(u);
// // console.log(x);
// // let t;
// // for(let i=1;i<y.length;i++){
// //     if(y[i]==" "){
// //          t=y.charAt(i+1).toUpperCase();
// //         y[i+1]=t;
// //         t="";
// //     }
// // }
// // console.log(y);
let Arr=["one","two","three","one","one","four","five","four","five"];
let Irr=[];
for(let i=0;i<Arr.length;i++){
    for(let j=0;j<Irr.length;j++){
        if(Irr[j]!=Arr[i]){
            Irr.push(Arr[i]);

        }
    }
}
console.log(Irr);