"use strict";
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", toggleBtn.bind(toggle));

function toggleBtn(e) {
  const click = e.target.closest(".toggle");
  click.classList.toggle("active");
  click.classList.contains("active")
    ? display()
    : display("199.99", "249.99", "399.99");
}

function display(a = "19.99", b = "24.99", c = "39.99") {
  const price = document.querySelectorAll(".price");
  price[0].textContent = a;
  price[1].textContent = b;
  price[2].textContent = c;
}
