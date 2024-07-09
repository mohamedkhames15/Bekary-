let nums =document.querySelectorAll(".nums .num");
let section=document.querySelector(".js")


function startCount(el)
{
    let goal =el.dataset.goal;
    let count= setInterval(() =>{
        el.textContent++;

    },10)
}
startCount(document.querySelectorAll(".nums .num"[0]))