function active(elem) {
    const activElement = document.getElementsByClassName("active");
    if(activElement.length > 0) {
        activElement[0].classList.remove("active");
        const el = document.getElementById(elem.id);
        el.classList.add("active");        
    }
}

 let wrap = document.getElementById("windowWrapper");
 let button = document.getElementById("button");
 let btnNo = document.getElementById("btnNo");
 let btnYes = document.getElementById("btnYes");
 let doneTask = +document.getElementById("done-task").innerHTML;
 let openTask = +document.getElementById("open-task").innerHTML;
 
 button.onclick = function() {
    if (openTask === 0) {
        alert("There are no tasks to complete!") 
    } else {wrap.style.display = "flex"};
 }
 btnNo.onclick = function() {
    wrap.style.display = "none";
 }
 btnYes.onclick = function() {
    wrap.style.display = "none";
    doneTask = doneTask + 1;
    openTask = openTask - 1;
    document.getElementById("done-task").innerHTML = doneTask;
    document.getElementById("open-task").innerHTML = openTask;
 }
 window.onclick = function(event) {
    if (event.target == wrap) {
        wrap.style.display = "none";
    }
 }
 let pic1 = document.getElementById("pic1");
 let pic2 = document.getElementById("pic2");
 let pic3 = document.getElementById("pic3");
 let pic4 = document.getElementById("pic4");
 let pictures = [pic1, pic2, pic3, pic4];
 let index1 = pictures.indexOf(pic1);
 let index2 = pictures.indexOf(pic2);
 let index3 = pictures.indexOf(pic3);
 let index4 = pictures.indexOf(pic4);
 let notifi = document.getElementById("notifNum").innerHTML;
 let notiNum = Number(notifi);

function activeImg1() {
    notiNum = index1;
    document.getElementById("notifNum").innerHTML = notiNum;
}
function activeImg2() {
    notiNum = index2;
    document.getElementById("notifNum").innerHTML = notiNum;
}
function activeImg3() {
    notiNum = index3;
    document.getElementById("notifNum").innerHTML = notiNum;
}
function activeImg4() {
    notiNum = index4;
    document.getElementById("notifNum").innerHTML = notiNum;
}
