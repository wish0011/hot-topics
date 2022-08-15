const dd = document.getElementById('dynamic-data');
const btns = document.querySelectorAll('nav ul li a');

let url = './partials/page-1.html';

function loadContent(url) {
    fetch(url)
        .then(function (rsp) {
            return rsp.text();
        })
        .then(function (data) {
            dd.innerHTML = data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

loadContent(url);

function handleClick(e) {
    e.preventDefault();
    let currentClick = e.target;

    loadContent(currentClick.href);
}

for (let btn of btns) {
    btn.addEventListener("click", handleClick)
}


