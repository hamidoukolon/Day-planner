var textbox = "";
var timeoncalendar = "";





$(document).ready(function () { });
$(".save").on("click", function () {
    textbox = $(this).parent('div').children('div').children('input').val();
    console.log(textbox);
    timeoncalendar = $(this).parent("div").children("p").text();
    localStorage.setItem('textbox', JSON.stringify({ time: timeoncalendar, details: textbox }));
    $(this).parent('div').children('input').replaceWith('<p>'+textbox+'</p>');
    

});

// get time on the header 

var headerdate="";
$(window).on("load", function () {
    headerdate = moment().format("dddd MMMM DD YYYY");
    console.log(headerdate);
    $("#currentDay").append(headerdate)
    console.log("test");
});



