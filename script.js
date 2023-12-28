document.getElementById("about").style.display = 'none';
document.getElementById("home-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})
document.getElementById("contacts-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})
document.getElementById("services-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})
document.getElementById("blogs-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = 'none';
})

document.getElementById("about-btn").addEventListener('click', () => {
    document.getElementById("about").style.display = '';
})

document.getElementById("about-bmi").addEventListener('click', () => {
    document.getElementById("home-btn").click();
    console.log("lokesh");
})