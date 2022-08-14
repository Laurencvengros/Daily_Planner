//To Display Today's Date At The Top Of The Page.
var digitalClock = function(){

var todayDate = moment();
$("#currentDay").text(todayDate.format('dddd MMM Do, YYYY, H:mm:ss'));

};

digitalClock();
setInterval(digitalClock, 1000);

$(document).ready(function(){
    trackHours();
    
    $("#800am .text").val(localStorage.getItem("800am"));
    
    $("#900am .text").val(localStorage.getItem("900am"));
   
    $("#1000am .text").val(localStorage.getItem("1000am"));
    
    $("#1100am .text").val(localStorage.getItem("1100am"));
    
    $("#1200pm .text").val(localStorage.getItem("1200pm"));
    
    $("#1300pm .text").val(localStorage.getItem("1300pm"));
    
    $("#1400pm .text").val(localStorage.getItem("1400pm"));
   
    $("#1500pm .text").val(localStorage.getItem("1500pm"));
    
    $("#1600pm .text").val(localStorage.getItem("1600pm"));
    
    $("#1700pm .text").val(localStorage.getItem("1700pm"));
   
    
   
});

function trackHours(){
        var currentTime = moment().hour();

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
  
        
        