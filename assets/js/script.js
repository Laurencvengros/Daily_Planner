//To Display Today's Date At The Top Of The Page.
var digitalClock = function(){

var todayDate = moment();
$("#currentDay").text(todayDate.format('dddd MMM Do, YYYY, H:mm:ss A'));
console.log(todayDate);
};

digitalClock();
setInterval(digitalClock, 1000);

