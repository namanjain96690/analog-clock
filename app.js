
setInterval(function(){
    let date= new Date();
let hourv= date.getHours();
let minv= date.getMinutes();
let secv=  date.getSeconds();
let hval= hourv*30+minv/2;
let mval= minv*6;
let sval= secv*6;
document.querySelector('.hour').style.transform=`rotate(${hval}deg)`;
document.querySelector('.minute').style.transform=`rotate(${mval}deg)`;
document.querySelector('.seconds').style.transform=`rotate(${sval}deg)`;
},1000);