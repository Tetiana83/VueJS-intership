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

// let notifi = document.getElementById("notifNum").innerHTML;
// let notiNum = Number(notifi);
// let pictures = document.querySelectorAll(".image");
// pictures.forEach((p, i) => {
//     p.addEventListener("click", function() {
//         notiNum = i;
//         document.getElementById("notifNum").innerHTML = notiNum;
//     })
// })

let pictures = document.querySelectorAll(".image");
pictures.forEach((p, i) => {
        p.addEventListener("click", function() {
            document.getElementById("notifNum").innerHTML = `${i}`;
        })
    })
