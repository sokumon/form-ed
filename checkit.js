var emails_submiteed=[];
var count=0;
var button=document.getElementById("submit")
var url = "https://script.google.com/macros/s/AKfycbwwEIVmx0NaO_6FbTJRq5kt8_F-CEHAkgxdtNTUzL5jLOF8pmx8q3yKK-XqMhXZD4U/exec?callback=loadData";
// Make an AJAX call to Google Script
jQuery.ajax({
crossDomain: true,
url: url,
method: "GET",
dataType: "jsonp"
});

 // log the returned data
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
for(let i=0;i<emails_submiteed.length;i++){
    console.log(emails_submiteed[i]);
}
setInterval(checkemail,1000);
function checkemail(){
    $("#checked").text("");
    button.disabled=false;
    var input_box=$("#email").val()
    console.log(input_box);
    for(var i=0;i<emails_submiteed.length;i++){
    if(input_box==emails_submiteed[i]){
        $("#checked").text("Welcome back"+" "+emails_submiteed[i]);
        button.disabled=true;
        console.log(button.disabled);
    }
    }
}
}