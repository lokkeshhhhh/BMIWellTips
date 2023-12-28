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
})

document.getElementById("about-developer").addEventListener('click', () => {
    document.getElementById("blogs-btn").click();
})


document.getElementById("f-home").addEventListener('click', () => {
    document.getElementById("home-btn").click();
})
document.getElementById("f-services").addEventListener('click', () => {
    document.getElementById("services-btn").click();
})
document.getElementById("f-contacts").addEventListener('click', () => {
    document.getElementById("contacts-btn").click();
})

let linksAbout = document.querySelectorAll("#f-about");

for(let i=0; i<linksAbout.length; i++){
    linksAbout[i].addEventListener('click', () => {
        document.getElementById("about-btn").click();
    })
}
let linksBlogs = document.querySelectorAll("#f-blogs");
for(let i=0; i<linksBlogs.length; i++){
    linksBlogs[i].addEventListener('click', () => {
        document.getElementById("blogs-btn").click();
    })
}
