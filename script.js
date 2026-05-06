console.log("Portfolio Ready");

/* smooth scroll */
document.querySelectorAll("a[href^='#']")
.forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({
behavior:"smooth"
});
});
});

/* reveal animation */
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".reveal")
.forEach(section=>{
observer.observe(section);
});