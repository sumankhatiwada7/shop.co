let count1=0
let countcart=document.getElementById("count")
function add (){
    count1+=1
    countcart.innerHTML=count1
}
function subtract (){
    if(count1>0){
    count1-=1
    countcart.innerHTML=count1
    }
}