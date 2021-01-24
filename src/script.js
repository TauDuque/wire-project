window.onload = function () {
  const menuBars = document.getElementById("menu-bars");
  const overlay = document.getElementById("overlay");
  const nav1 = document.getElementById("nav-1");
  const nav2 = document.getElementById("nav-2");
  const nav3 = document.getElementById("nav-3");
  const nav4 = document.getElementById("nav-4");
  const nav5 = document.getElementById("nav-5");
  const nav6 = document.getElementById("nav-6");
  const navItem = [nav1, nav2, nav3, nav4, nav5, nav6];

  //controlar navs
  function navAnimation(side, darkSide) {
    navItem.forEach((nav, i) => {
      console.log(`slide-${side}-${i}`, `slide-${darkSide}-${i}`);
      nav.classList.replace(
        `slide-${side}-${i + 1}`,
        `slide-${darkSide}-${i + 1}`
      );
    });
  }
  function toggleNav() {
    //toggle: menu bars abrir/fechar
    menuBars.classList.toggle("change");
    //ativar: menu ativo
    overlay.classList.toggle("overlay-active");
    if (overlay.classList.contains("overlay-active")) {
      //entrar animação - overlay
      overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
      //entrar animação - items nav
      navAnimation("out", "in");
    } else {
      //sair animação - overlay
      overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
      //tirar animação - items nav
      navAnimation("in", "out");
    }
  }

  //Event Listeners
  menuBars.addEventListener("click", toggleNav);
  navItem.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
  });
};
