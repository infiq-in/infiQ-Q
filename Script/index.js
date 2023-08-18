document.querySelectorAll("#close-btn")[0].addEventListener("click", closeOpenBtn);

X = document.querySelectorAll(".show-menu")[0];
function closeOpenBtn() {
  setTimeout(() => {
    if (X.style.display == "none") {
      X.style.display = "grid";
    } else {
      X.style.display = "none";
    }
  });
}

// for image changing events for 1st imgage
document.querySelectorAll("#huey")[0].addEventListener("click", function () {
  document.querySelectorAll(".banner-img-fluid")[0].src = "images/software-company-1-small.jpg";
})

// for image changing events for 2nd imgage
document.querySelectorAll("#dewey")[0].addEventListener("click", function () {
  document.querySelectorAll(".banner-img-fluid")[0].src = "images/doMore.jpg";
})

// for image changing events for 3rd imgage
document.querySelectorAll("#louie")[0].addEventListener("click", function () {
  document.querySelectorAll(".banner-img-fluid")[0].src = "images/punchOnTheFace.jpg";
})