//To Display Today's Date At The Top Of The Page.
var digitalClock = function(){

var todayDate = moment();
$("#currentDay").text(todayDate.format('dddd MMM Do, YYYY, H:mm:ss'));

};

digitalClock();
setInterval(digitalClock, 1000);

$(document).ready(function(){
    trackHours();
    
    $("#hour9 .text").val(localStorage.getItem("hour9"));
    console.log(localStorage.getItem("hour9"));
    
   
});

function trackHours(){
        var currentTime = 10 //moment().hour();

        $(".text").each(function(){
            var calendarHour = parseInt($(this).attr("id"));

            console.log(calendarHour);

            if (calendarHour === currentTime){
                $(this).addClass("current");

            }else if( calendarHour < currentTime){
                $(this).addClass("past");

            }else{
                $(this).addClass("future");
            }


        })
    }

    
        
$(".saveBtn").on("click",function(){

    localStorage.setItem($(this).parent().attr("id"), $(this).prev().val());
   



 });
  
        
        