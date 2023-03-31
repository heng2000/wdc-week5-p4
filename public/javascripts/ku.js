function gettime(){
    var r=document.getElementById("ddd");
 var xhttp = new XMLHttpRequest();
/* 4. Handle response (callback function) */
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {

r.innerText="This page was last viewed "+this.responseText;
console.log(this.responseText);

}
};
/* 2. Open connection */
xhttp.open("GET", "/last.txt", true);
/* 3. Send request */
xhttp.send();
}




function getcolor(){
    var k=document.getElementById("lll");
 var xhttp = new XMLHttpRequest();
/* 4. Handle response (callback function) */
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {

k.innerHTML=this.responseText;
k.style.color=this.responseText;

}
};
/* 2. Open connection */
xhttp.open("GET", "/color.txt", true);
/* 3. Send request */
xhttp.send();
}


function sisi(){
    var oo=document.getElementById("oo");
    var xhttp = new XMLHttpRequest();
/* 4. Handle response (callback function) */
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
console.log(this.responseText);
var qqq=JSON.parse(this.responseText);
for (let index = 0; index < qqq.length; index++) {
    oo.innerHTML+= "<li>"+qqq[index]+"</li>";

}
}
};
/* 2. Open connection */
xhttp.open("GET", "/log.json", true);
/* 3. Send request */
xhttp.send();
}

setInterval(myGreeting, 10000);

function myGreeting() {
    var qwe=document.getElementById("oo");
    var xhttp = new XMLHttpRequest();
/* 4. Handle response (callback function) */
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
console.log(this.responseText);
var rrr=JSON.parse(this.responseText);
qwe.innerHTML="";
for (let l = 0; l < rrr.length; l++) {
    qwe.innerHTML+= "<li>"+rrr[l]+"</li>";

}
}
};
/* 2. Open connection */
xhttp.open("GET", "/log-ro.json", true);
/* 3. Send request */
xhttp.send();

}


function zuihou(){
    var xhttp = new XMLHttpRequest();
/* 4. Handle response (callback function) */
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 403) {
var e=document.getElementById("fff");
e.innerHTML=`<p>ni bu xing a</p>
<button type="button" onclick="button()">click me! </button>`;



} else if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
    var b=document.getElementById("fff");
    b.innerHTML=this.responseText;


    }
};
/* 2. Open connection */
xhttp.open("GET", "/content.ajax", true);
/* 3. Send request */
xhttp.send();






}

function button(){
    var xhttp = new XMLHttpRequest();
/* 4. Handle response (callback function) */
xhttp.onreadystatechange = function() {
zuihou();

};
/* 2. Open connection */
xhttp.open("GET", "/accept", true);
/* 3. Send request */
xhttp.send();






}
