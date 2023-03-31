function findex(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 &&xhr.status == 200)
        {
            document.getElementById("timer").innerText =`This page was last viewed ${xhr.response}`;
        }
    }
    xhr.open("get","/last.txt");
    xhr.send();
}




function sendRequest(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState==4 && xhr.status==200)
        {
            let h1 =document.getElementById("heading");
            h1.innerText =xhr.responseText;
            h1.style.color =xhr.response;
            // console.log(xhr.responseText);
        }
    }
    xhr.open("get",'/color.txt');
    xhr.send();

}


function flog2(){
    let ul = document.getElementById("ul");
    let xhr =new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            ul.innerHTML ="";
            let res  =JSON.parse(xhr.response);
            for (let i = 0; i < res.length; i++)
            {
                let li =document.createElement("li");
                li.innerHTML = res[i];
                ul.appendChild(li);

            }
        }
    }
    xhr.open('GET',"/log.json");
    xhr.send();

    setInterval(function(){
        xhr.open("get","/log-ro.json")
        xhr.send()
    },10000)
}