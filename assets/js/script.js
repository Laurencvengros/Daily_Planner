//To Display Today's Date At The Top Of The Page.
var digitalClock = function(){

var todayDate = moment();
$("#currentDay").text(todayDate.format('dddd MMM Do, YYYY, H:mm:ss'));

};

digitalClock();
setInterval(digitalClock, 1000);



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