const headerRef = document.querySelector("header");
console.log(headerRef);
const closeBtn = document.getElementById("close-btn");
console.log(closeBtn);
closeBtn.addEventListener("click", () => {
  headerRef.classList.remove("nav-open");
});
const openBtn = document.getElementById("open-btn");
openBtn.addEventListener("click", () => headerRef.classList.add("nav-open"));
