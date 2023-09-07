function toggleMode() {
 const html = document.documentElement
 html.classList.toggle('light')

 //tem que pegar a tag img
 const img= document.querySelector("#profile img")
 
 //subistituir a imagem
 if(html.classList.contains("light")) {
     //se tiver light mode , adicionar a imagem light
     img.setAttribute("src","./assets/IMG_0079.jpeg")
    } else {
        //se tiver sem light mode, mater a imagem normal
  img.setAttribute("src","./assets/IMG_2505.png")     
}


}