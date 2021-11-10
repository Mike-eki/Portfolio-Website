
//Seleccionamos las etiquetas a las cuales les queremos poner el 'active' alado
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');


//Hacemos una función que nos coloque los 'active'
    menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})