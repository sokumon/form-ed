var button=document.getElementById("submit")
var form=document.getElementById("form")
if ('caches' in window){
    var url_link="https://script.googleusercontent.com/macros/echo?user_content_key=lBkldZJ7QYYClKFrdRyQrLAKhDBEnziHdlXO4KCbCSo0QKHZJh3WYCbUSbFVjY6EUxAO1fY3E-pogTgdp1jBMMUV9FkYRa1LOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa6AczgQyzEAN_ORygPJ6w_WHdKrzFhCoWcdQ6GACcbGmjQl0OF5NCuasCqqxS9qsu3q6yD0L7KUKGWDMaHsbYsSVphu2KZ56kYeVuGXuy8HsaIE4HadYwTA-wVikGr5B0miBOB2nWMEwPcw9I4F4LgQ&lib=M-vNjVUHXRMB1HiVNztR5eNftRaKOJe7L";
    var url_link_1="https://script.google.com/macros/s/AKfycbz26hpV9uhb9YpiBPFScQ_N5QfPB-VVmdGk5UOiCyM7bdv3-mhirEEZWEl8lXvJyY5p/exec";
    caches.open('v1').then((cache)=>{
        cache.add(url_link_1);
        // cache.keys().then((response)=>{
        //     console.log(response)
        // })
        cache.match(url_link_1).then(function(res){return res.json()})
        .then(function(data){
            // console.log(data.emails[0]);
            for(let i=0;i<data.emails.length;i++){
                    console.log(data.emails[i]);
                // emails_submiteed[i]=data.emails[i];
            }
            setInterval(checkemail,1000);
            console.log("checkmail begins");
            function checkemail(){
                $("#checked").text("");
                button.disabled=false;
                var input_box=$("#email").val()
                console.log(input_box);
                for(var i=0;i<data.emails.length;i++){
                if(input_box==data.emails[i]){
                    $("#checked").text("Welcome back");
                    button.disabled=true;
                }
                }
            }
        })
    })
   
}