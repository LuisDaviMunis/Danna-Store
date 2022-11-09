class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

function executar() {
  let texto = document.getElementById("search-txt").value;
  let historico = document.getElementById("historico");
  let adicionar = true;

  var opt = document.createElement("option");

  for (i = 0; i < historico.options.lenght; i++) {
    if (texto == historico.options[i].value) {
      adicionar = false;
    }
  }
  if (adicionar == true) {
    opt.value = texto;
    historico.appendChild(opt);
  }
}

mobileNavbar.init();

const password = document.getElementById("password");
const icon = document.getElementById("icon");

function showHide() {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    icon.classList.add("hide");
  } else {
    password.setAttribute("type", "password");
    icon.classList.remove("hide");
  }
}
