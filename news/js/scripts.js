const hb = document.querySelector('#hamburgerBtn');
const pn = document.querySelector('#primaryNav');

hb.addEventListener('click', () =>{
    hb.classList.toggle('open');
    pn.classList.toggle('open');
});








//favorite hamburger menu solution

/*function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

console.log("it worked");
*/

