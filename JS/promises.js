// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
  
  
// setTimeoutPromisified(3000).then(function callback() {
//     console.log("3 seconds have passed");
// })
  
// const p = setTimeoutPromisified(3000)
// console.log(p);

function main(a)
{
    console.log(a);
}

const p = new Promise(resolve => {
    return resolve(1);
})
p.then(main);

