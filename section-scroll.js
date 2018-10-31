const sections = document.querySelectorAll("section")
const logoTag = document.querySelector("div.logo")
const menuTag = document.querySelector("nav.menu")


document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset

  sections.forEach(section => {
    if (section.offsetTop - 100 <=  pixels) {

      if (section.hasAttribute("data-is-dark")) {
        logoTag.classList.add("logo-white")
        menuTag.classList.add("white")
      } else {
        logoTag.classList.remove("logo-white")
        menuTag.classList.remove("white")
      }
    }
  })

  sections.forEach(section => {
    if (section.offsetTop - 100 <=  pixels) {

      if (section.hasAttribute("data-visible")) {
        menuTag.classList.add("visible")
      } else {
        menuTag.classList.remove("visible")
      }
    }
  })

})

console.log('hello');
