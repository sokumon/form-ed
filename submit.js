var emails_submiteed=[];
var count=0;
var button=document.getElementById("submit")
var url = "https://script.google.com/macros/s/AKfycbwwEIVmx0NaO_6FbTJRq5kt8_F-CEHAkgxdtNTUzL5jLOF8pmx8q3yKK-XqMhXZD4U/exec/exec?callback=loadData";
// // Make an AJAX call to Google Script
jQuery.ajax({
crossDomain: true,
url: url,
method: "GET",
dataType: "jsonp"
});

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
function request_it(){
    jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
        });
    console.log("in rrequest_it")
}
$("#form").hide().fadeIn('120');
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

