const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Looping through images */

for (var i = 0; i < images.length; i++) {
    thumbBar.innerHTML += '<img class="thumb-image" src="images/'+ images[i] + '">';
}

const thumbImage = document.querySelector('.thumb-image');

function imageChange (e) {
    displayedImage.setAttribute('src', e.target.src);
}

thumbBar.addEventListener('click', imageChange);

/* Wiring up the Darken/Lighten button */

function darken (e) {
    const btnClass = btn.getAttribute('class');
    if (btnClass === "dark") {
    btn.setAttribute('class', "light");
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
    btn.setAttribute('class', "dark");
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}

btn.addEventListener('click', darken)

