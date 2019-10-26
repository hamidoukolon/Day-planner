// get time on the header 

var headerdate = "";
$(window).on("load", function () {
    headerdate = moment().format("dddd MMMM DD YYYY");
    console.log(headerdate);
    $("#currentDay").append(headerdate)
    console.log("test");
    var timeData = JSON.parse(localStorage.getItem("timeSlots"));
    
    if(!timeData){
        timeData = {};

        $(".timeOfDay").each(function(){
            timeData[$(this).attr("data-time")] = null
        })
        localStorage.setItem("timeSlots", timeData)
    }

    console.log(timeData)
    for(var key in timeData){
        console.log(key, timeData[key]);
        var keyTime = moment(key, "h-a");
        var isSameHour = moment().isSame(keyTime, 'hour');
        var isBefore = moment().isAfter(keyTime)
        var isAfter = moment().isBefore(keyTime)
        console.log(keyTime.format("HH:mm"), isSameHour)

        var inputBox = $("[data-time="+key+"]").siblings('input')
        inputBox.val(timeData[key]);
        if(isSameHour){
            inputBox.addClass("present")
        }
        else if(isBefore){
            inputBox.addClass("past")
        }
        else if(isAfter){
            inputBox.addClass("future")
        }
    }
});


var textbox = "";
var timeoncalendar = "";

$(document).ready(function () { });
$(".save").on("click", function () {
    textbox = $(this).siblings('input').val();
    console.log(textbox);
    timeoncalendar = $(this).siblings('.timeOfDay').attr("data-time");
    console.log(timeoncalendar);

    var timeData = JSON.parse(localStorage.getItem("timeSlots"));
    timeData[timeoncalendar] = textbox;

    localStorage.setItem('timeSlots', JSON.stringify(timeData));
    //localStorage.setItem('timeSlots', JSON.stringify({ time: timeoncalendar, details: textbox }));
    // $(this).siblings('input').replaceWith(+textbox+);


});




