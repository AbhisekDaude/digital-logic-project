// colection of the button 
let btn1=document.querySelector(".button1");
let btn2=document.querySelector(".button2");
let btn3=document.querySelector(".button3");
let btn4=document.querySelector(".button4");
let btn5=document.querySelector(".button5");
let btn6=document.querySelector(".button6");
let btn7=document.querySelector(".button7");
let btn8=document.querySelector(".button8");
let btn9=document.querySelector(".button9");
let clear=document.querySelector(".clear");
let zero=document.querySelector(".zero");

//collection of the divs for number 
let f=document.querySelector(".f");
let a=document.querySelector(".a");
let b=document.querySelector(".b");
let gdiv=document.querySelector(".gdiv");
let e=document.querySelector(".e");
let c=document.querySelector(".c");
let ddiv =document.querySelector(".ddiv");

btn1.addEventListener("click",function(){
    expect1();
    b.style.backgroundColor="red";
    c.style.backgroundColor="red";
   
})
btn2.addEventListener("click",function(){
    expect2();
    a.style.backgroundColor="red";
    b.style.backgroundColor="red";
    gdiv.style.backgroundColor="red";
    e.style.backgroundColor="red";
    ddiv.style.backgroundColor="red";
})

btn3.addEventListener("click",function(){
    expect3();
    a.style.backgroundColor="red";
    b.style.backgroundColor="red";
    gdiv.style.backgroundColor="red";
    c.style.backgroundColor="red";
    ddiv.style.backgroundColor="red";
})

btn4.addEventListener("click",function(){
    expect4();
    
    gdiv.style.backgroundColor="red";
    c.style.backgroundColor="red";
    f.style.backgroundColor="red";
    b.style.backgroundColor="red";
   
})

btn5.addEventListener("click",function(){
    expect5();
    a.style.backgroundColor="red";
    gdiv.style.backgroundColor="red";
    c.style.backgroundColor="red";
    f.style.backgroundColor="red";
    ddiv.style.backgroundColor="red";
   
})


btn6.addEventListener("click",function(){
    expect6();
   
    gdiv.style.backgroundColor="red";
    c.style.backgroundColor="red";
    f.style.backgroundColor="red";
    ddiv.style.backgroundColor="red";
    a.style.backgroundColor="red";
    e.style.backgroundColor="red";
   
})

btn7.addEventListener("click",function(){
    expect7();
    c.style.backgroundColor="red";
    b.style.backgroundColor="red";
    a.style.backgroundColor="red"; 
})

btn8.addEventListener("click",function(){
    
    c.style.backgroundColor="red";
    b.style.backgroundColor="red";
    a.style.backgroundColor="red"; 
    gdiv.style.backgroundColor="red";
    e.style.backgroundColor="red";
    ddiv.style.backgroundColor="red";
    f.style.backgroundColor="red";
})

btn9.addEventListener("click",function(){
    expect9()
    c.style.backgroundColor="red";
    b.style.backgroundColor="red";
    a.style.backgroundColor="red"; 
    gdiv.style.backgroundColor="red";
    ddiv.style.backgroundColor="red";
    f.style.backgroundColor="red";
})

zero.addEventListener("click",function(){
    expect0()
    c.style.backgroundColor="red";
    b.style.backgroundColor="red";
    a.style.backgroundColor="red"; 
    e.style.backgroundColor="red";
    ddiv.style.backgroundColor="red";
    f.style.backgroundColor="red";
})

clear.addEventListener("click",function(){
    expect0()
    c.style.backgroundColor="";
    b.style.backgroundColor="";
    a.style.backgroundColor=""; 
    gdiv.style.backgroundColor="";
    e.style.backgroundColor="";
    ddiv.style.backgroundColor="";
    f.style.backgroundColor="";
})
function expect1(){
    a.style.backgroundColor="";
    b.style.backgroundColor="";
    gdiv.style.backgroundColor="";
    e.style.backgroundColor="";
    ddiv.style.backgroundColor="";
    f.style.backgroundColor="";

}
function expect2(){
  
    f.style.backgroundColor="";
    c.style.backgroundColor="";

}
function expect3(){
  
    f.style.backgroundColor="";
    e.style.backgroundColor="";

}

function expect4(){
  
   
    a.style.backgroundColor="";
    b.style.backgroundColor="";
   
    e.style.backgroundColor="";
    ddiv.style.backgroundColor="";

}

function expect5(){
    b.style.backgroundColor="";
    e.style.backgroundColor="";
}

function expect6(){
  
    b.style.backgroundColor="";
}

function expect7(){
  
    gdiv.style.backgroundColor="";
    ddiv.style.backgroundColor="";
    e.style.backgroundColor="";
    f.style.backgroundColor="";
}
function expect9(){
  
   
    e.style.backgroundColor="";
   
}

function expect0(){
  
   
    gdiv.style.backgroundColor="";
   
}



