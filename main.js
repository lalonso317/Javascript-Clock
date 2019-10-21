
$(document).ready(function(){
  
    function clock(){
var date = new Date()
var hour = date.getHours()
var min = date.getMinutes()
var sec = date.getSeconds()
var time = 'AM'
    if(min < '10'){
        min = '0' + min
    }else(min)
    if(sec < '10'){
        sec = '0' + sec
    }else(sec)
    var dat = ` ${hour} : ${min} : ${sec} ${time}`
    document.getElementById('mainclock').innerHTML= dat
    var dab = `#${hour}${min}${sec}`
    $('body').css("background-color", dab)
}
     setInterval(()=>{
        clock()
     },1000)
})

// async function clock(){
 
// }
// if(hour == 0){
//     hour = 12
// } if (hour > 12){
//     hour = hour - 12
// } if(hour < 10){
//     hour = 0 + hour
// } else{
//     hour
// }
// if(min < 10){
//     min = 0 + min
// }else {
//     min
// }
// if(sec < 10){
//     min = 0 + sec
// }else{
//     sec
// }if(mil < 10){
//     mil = 0 + mil
// }else{
//     mil
// }


// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";
    
//     if(h == 0){
//         h = 12;
//     }
    
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
    
//     var time = h + ":" + m + ":" + s + " " + session;
//     document.getElementById("mainclock").innerText = time;
//     document.getElementById("mainclock").textContent = time;
    
//     setTimeout(showTime, 1000);
    
// }
// showTime();
// //////////////////////