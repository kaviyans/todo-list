const inputbox = document.getElementById("input-box");
const lc = document.getElementById("list-content");

function toadd(){
    if(inputbox.value === ''){
        alert("there should be content");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        lc.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    savedata();
}

lc.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",lc.innerHTML);
}

function showdata(){
    lc.innerHTML = localStorage.getItem("data");
}

showdata();