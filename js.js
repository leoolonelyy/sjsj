function prinTline() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSecond();
  var day = d.getDay();
  var date = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  
  switch(day) {
  
    case 0:
      day = "Sunday";
      break;
     case 1:
       day = "Monday";
       break;
      case 2:
        day = "Thuesday";
        break;
      case 3:
         day = "Wednesday";
         break;
      case 4:
         day = "Thursday";
         break;
      case 5: "Friday";
         break;
      case 6:
         day = "saturday";
         break;
  }
  
  
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    
    mins = "0" + mins;
  }
  if (secs < 10) {
    
    secs = "0" + secs;
  }
  
  month = month +1; document.getElementById("test").innerHTML = hours+":"+mins+":"+secs;
  documnet.getElementById("ttt").innerHTML = day +", " + date + "/" + month + "/" +year;
}
setInterval(prinTline,1000);