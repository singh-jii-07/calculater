const place=document.querySelector('.place');
const buttons=document.querySelectorAll('button');
let string='';
let buttonsArray=Array.from(buttons);
buttonsArray.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    if(e.target.innerHTML =='C'){
        string=string.slice(0, string.length-1);
        place.value=string;
    }
    else if(e.target.innerHTML =='AC'){
        string='';
        place.value=string;
    }
    else if(e.target.innerHTML =='='){
        string=eval(string);
        place.value= "Ans"+":"+string;
    }
    else{
        string+=e.target.innerHTML;
        place.value=string;
    }
  })
})
 



    
