const helloFunc=(s)=>{
    console.log('hello after '+s+' seconds');
}

const timerId = setTimeout(
    ()=>console.log('you will not see this one'),
    0
);
clearTimeout(timerId);
//setTimeout(helloFunc,4*1000,4);
//setTimeout(helloFunc,8*1000,8);
//setTimeout(helloFunc,2*1000,2);
//setTimeout(helloFunc,0*1000,0);
//setInterval(helloFunc,10*1000,10);


let counter=0;
const helloFunc2=setInterval(()=>{
    console.log('hello after 1 second');
    counter+=1;
    if(counter===5){
        console.log('Done');
        clearInterval(helloFunc2);
    }
},1000);