const hamburguer = document.querySelector('.hamburguer');
const sidebar = document.querySelector('.sidebar');

hamburguer.addEventListener('click', () => {
  const menu = hamburguer.classList.toggle("show-menu");

  if(menu === true){
    sidebar.style.display = "block";
  } else {
    if (!hamburguer.classList.contains("show-menu")) {
      sidebar.style.display = "none";
    }
  }
});

