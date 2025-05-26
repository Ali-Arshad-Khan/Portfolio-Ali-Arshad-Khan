document.querySelector(".burger")
.addEventListener('click', () => {
    document.querySelector(".card").style.top="0";
    document.querySelector(".card").style.right="0";
});

document.querySelector(".close")
.addEventListener('click', ()=>{
    // document.querySelector(".card").style.top="-1000"+"px";
    // document.querySelector(".card").style.right="0";
    document.querySelector(".card").style.right="-1000"+"px";
});

document.querySelectorAll(".card li").forEach(item => {
    item.addEventListener('click', () => {
        // document.querySelector(".card").style.top="-1000"+"px";
        document.querySelector(".card").style.right="-1000"+"px";
    });
});
   
    
