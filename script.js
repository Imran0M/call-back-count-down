setTimeout(()=>{
    console.log(10);
     setTimeout(()=>{
     console.log(9)
     },1000)
     setTimeout(()=>{
        console.log(8)
     },2000)
     setTimeout(()=>{
        console.log(7)
     },3000)
     setTimeout(()=>{
        console.log(6)
     },4000)
     setTimeout(()=>{
        console.log(5)
     },5000)
     setTimeout(()=>{
        console.log(4)
     },6000)
     setTimeout(()=>{
        console.log(3)
     },7000)
     setTimeout(()=>{
        console.log(2)
     },8000)
     setTimeout(()=>{
        console.log(1)
     },9000)
     setTimeout(()=>{
        console.log('Happy Independance Day')
     },10000)
},1000)

let logData= document.getElementById('display');
console.log = function (count) {
  logData.textContent = count + '\n';
};