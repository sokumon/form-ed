var emails_submiteed=[];
console.log("console.log")
var count=0;
var name=0;
var button=document.getElementById("submit")
var form=document.getElementById("form")
var url = "https://script.google.com/macros/s/AKfycbzzSOh1tDjV1TIzFLjR4_vtQb9LEaJe2MRKOyim/exec?callback=?";
// // Make an AJAX call to Google Script
// jQuery.ajax({
// crossDomain: "true",
// url: url,
// method: "POST",
// dataType: "jsonp",
// xhrFields: {
//     withCredentials: true
// },
// });
jQuery.getJSON(url,loadData);
// var fetchRe=fetch(url,{
//     crossDomain: "true",
//     url: url,
//     method: "GET",
//     dataType: "jsonp",
//     }
//     )
// fetchRe.then(res=>console.log(res))

//  // log the returned data
function loadData(e){
// for (let i = 0; i < 9; i++) {
//     e.pop()
// cleaning the data 
for (let i = 0; i < e.length; i++) {
    if (e[i]==""){
        count++;
    }
}
// for(let i=0;i<=count;i++){
//     e.pop()
// }
// adding it into a new array for local use
for(let i=0;i<e.length;i++){
    emails_submiteed[i]=e[i];
}
// for(let i=0;i<emails_submiteed.length;i++){
//     console.log(emails_submiteed[i]);
// }
setInterval(checkemail,1000);
function checkemail(){
    $("#form-success").text("");
    button.disabled=false;
    var input_box=$("#email").val()
    for(var i=0;i<emails_submiteed.length;i++){
    if(input_box==emails_submiteed[i]){
        $("#form-success").text("Welcome back");
        button.disabled=true;
    }
    }
}
}
// function request_it(){
//     jQuery.ajax({
//         crossDomain: true,
//         url: url,
//         method: "GET",
//         dataType: "jsonp"
//         });
//     console.log("in rrequest_it")
// }
// $("#form").hide().fadeIn('120');
$("#form").submit(function(event){
event.preventDefault();
$.ajax({
    url:'https://docs.google.com/forms/d/e/1FAIpQLSe5-qw4rGIbf-ltewOBv-groKU6gsWHX041v6_qQFAViLealQ/formResponse',
    data:$("#form").serialize(),
    type:'POST',
    dataType:'json',
    statusCode:{
    0:function(data){
        $("#form-success").text("Thanks for Submitting");
    },
    200:function(data){
        $("#form-success").text("Thanks for Submitting");
    },
    403:function(data){
        alert("Sorry something bad has happened on our end");
    }
    }
});
document.getElementById("form").reset();
request_it();
});

