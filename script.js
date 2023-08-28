function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a img
   
  // se o light mode estiver ativo, trocar a img para o avatar light
  if(html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Personagem Miles morales em seu quarto, com fones de ouvido, ouvindo música e fazendo gestos com a mão.")
   } else {
     // se o dark mode estiver ativo, manter a img normal
    img.setAttribute("src", "./assets/avatar-dark.png")           
    img.setAttribute("alt", "Personagem Miles morales com seu uniforme, fazendo gestos de confuso.")
  }


  


}