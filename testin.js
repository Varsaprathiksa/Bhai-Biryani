// function addtoCart(){
//     let counter = 1;
//   return{ 
//     function1() {
//     counter++;
//     return counter;
//   },
//   itemsadd() {
//     return counter;
//   },
//   function2(){
//     if(counter>0){
//       counter--;
//     }
//     return counter;
//   },
//   itemssub(){
//     return counter;
//   }
// }
// }

// const add = addtoCart();
// console.log(add.function1())
// console.log(add.itemsadd())


// function spanFn(){
//    document.getElementById('count').innerHTML = add.function1();
//    let amount = 3000;
//    document.getElementById('sub-total').innerHTML = `
//     <span>SubTotal(${add.itemsadd()} items ):</span> 
//     <span><b>Rs.${add.itemsadd()*amount}<b></span>`
// }
// function spanFn2(){
//     document.getElementById('count').innerHTML = add.function2();
//     let amount = 3000;
//     document.getElementById('sub-total').innerHTML = `
//     <span>SubTotal(${add.itemssub()} items ):</span> 
//     <span><b>Rs.${add.itemsadd()*amount}<b></span>`
// }

const thisisObject = {
  1: "chennai",
  2: "ooty",
  3: "Shimla"
}
let tobechecked = "Chennai";
let changecase = tobechecked.toLowerCase();
 function checkreceive(key){
  return key
 }
if(thisisObject[1].includes(changecase)){
  console.log(checkreceive(thisisObject[1]))
}
else{
  console.log("no use")
}


