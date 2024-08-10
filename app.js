/* global bootstrap: false */
(function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})();


window.addEventListener("load", () => {
    const userChecker = document.getElementById("userChecker");
    const blogBtn = document.getElementById("blogBtn");
    if (!localStorage.getItem("user")) {
        blogBtn.className = "hide";
    }
    if (localStorage.getItem("user")) {
        userChecker.className = "hide";
    }
});

const navigateToSigninPage = () => {
    window.location.href = "./pages/signin.html";
}



const uploadBlogHandler = () => {


    const titleInput = document.getElementById("titleInput");
    const inputContentTextarea = document.getElementById("inputContentTextarea");


    const parent = document.getElementById("parent");

    parent.innerHTML += `<div class="card" style="width: 500px;">
            <img src="https://picsum.photos/200" class="card-img-top" alt="...">
            <div class="card-body">
            <h1>Title.</h1>
              <p class="card-text">${titleInput.value}</p>
            <h1>Content.</h1>
              <p class="card-text">${inputContentTextarea.value}</p>
            </div>
          </div>`


    titleInput.value ="";
    inputContentTextarea.value = "";
};











window.navigateToSigninPage = navigateToSigninPage
window.uploadBlogHandler = uploadBlogHandler