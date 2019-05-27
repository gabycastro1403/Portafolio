const desarrollo= document.getElementById("desarrollo");
const skills = document.getElementById("skills");
const desarolloHerramientas = document.getElementById('desarollo-herramientas');
const computadora = document.getElementById('computadora');


desarrollo.addEventListener("click", ()=>{
    skills.classList.remove("hidde-skills");
});

computadora.addEventListener('click', ()=>{
    desarolloHerramientas.classList.remove('hidde-tolls')
})