
function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}
function checkCookie(){
	var user=getCookie("12");
	if (user!=""){
		/* alert("欢迎 " + user + " 再次访问"); */
		
		spd();
		if (user=="22p")
		{document.title=("SVIP致😀年轻的自己👍")}
        
      
	}
	else {
		window.location.assign("404.html");
	}
}
function dc()
{ 

 window.location.assign("https://cdn.jsdelivr.net/npm/arcio@1.0.2/fnaka.apk")
 }
 
 function  spd(){
         k=localStorage.getItem("mkl");
          if  (k==null){
a=$.get("https://cdn.jsdelivr.net/npm/arcio@1.0.2/la.html");
a.done(function(){
var  b=a.responseText;
let m=document.getElementById("p1");
 m.innerHTML=b;
 window.localStorage.setItem("mkl",b);
 
})}
else {
let kch=document.getElementById("p1");
 kch.innerHTML=k;
 a=$.get("https://cdn.jsdelivr.net/npm/arcio@1.0.2/la.html");
a.done(function(){
var  b=a.responseText;
 window.localStorage.setItem("mkl",b);

 })}}
