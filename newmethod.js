var all_cookies=[];
var emails_recieved=[];
var newe_emails;
var button=document.getElementById("submit")
var form=document.getElementById("form")
// var arr=[4,6,50];
// localStorage.setItem('myCat',arr);
// console.log(localStorage.getItem('myCat')[0])
all_cookies=document.cookie.split(";");
var query_param;
for(var i=0;i<all_cookies.length;i++){
    if(all_cookies[i].indexOf("username")!=-1){
        query_param=all_cookies[i]
    }else{
        query_param="username=0";
    }
}
console.log(query_param);
// console.log(query_param);
var no_of_emails=parseInt(query_param.split("=")[1]);
// console.log(parseInt(no_of_emails[1]));
var count=0;
var url = "https://script.google.com/macros/s/AKfycbyqad9jc_M8rawLUWFooE_5iwxZw2JxpveR3ernVJ5qh9ftQMQ3niK4KHe6SDgxrjDA/exec?";
var url_with_query=url+query_param;
// final_url=url_with_query.split("%20")
var final_url=url_with_query.replace(/ /g,'');
jQuery.getJSON(final_url,takeData);
function takeData(e){
    // console.log("In takedata"+no_of_emails);
    // console.log(e.emails);
    if(e.emails.length>no_of_emails){
        emails_recieved=e.emails;
        // console.log(emails_recieved[0]);
        for(var i=0;i<emails_recieved.length;i++){
            localStorage.setItem(i.toString(),emails_recieved[i]);
        }        
        // localStorage.setItem("emails",emails_recieved);
        // temp_emails=localStorage.getItem('emails').split(",");
    }else if(e.emails.length==0){
        newe_emails=0;
    }else if(e.emails.length<no_of_emails){
        for(var i=0;i<e.emails.length;i++){
            console.log(e.emails[i]);
            emails_recieved.push(e.emails[i]);
            localStorage.setItem((i+no_of_emails).toString(),e.emails[i]);
        }
        newe_emails=e.emails.length;
        // localStorage.setItem("emails",emails_recieved);
        // temp_emails=localStorage.getItem('emails').split(",");
    }
    document.cookie = "username="+(e.number)+"; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
    // console.log(temp_emails[0])
    setInterval(checkEmail,750);
    
}
function checkEmail(){
    console.log(no_of_emails+newe_emails);
    $("#checked").text("");
    button.disabled=false;
    var input_box=$("#email").val();
    // console.log(localStorage.getItem("0"));
    for(var i=0;i<no_of_emails+newe_emails;i++){
        var name=i.toString();
        if(input_box==localStorage.getItem(name)){
            $("#checked").text("Welcome back");
            button.disabled=true;
        }
        // console.log(localStorage.getItem(name));
    }
    }
