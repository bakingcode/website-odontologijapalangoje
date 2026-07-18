const mygtukas = document.querySelector(".meniu-mygtukas");
const meniu = document.querySelector("nav");

mygtukas.addEventListener("click", function(){
    const arAtidaryta = meniu.classList.toggle("rodo");
    mygtukas.setAttribute("aria-expanded", arAtidaryta);
});