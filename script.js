const galeria = document.querySelector("#galeria");

for (let index = 1; index <=826; index++) {
 
  
      const div = document.createElement("div");
      div.classList.add("character");

      const elemento = document.createElement("img");
      elemento.setAttribute("src", "https://rickandmortyapi.com/api/character/avatar/" + index + ".jpeg");
      div.append(elemento);

      const btnFavoritos = document.createElement("text");
      btnFavoritos.innerText = "Character " + index;
      div.append(btnFavoritos);

      const btnCharacter = document.createElement("text2");
      btnCharacter.innerText = "Esta es mi publicación número " + index + ". Esto es una prueba de generación de relleno por medio de funciones y ciclos.";
      div.append(btnCharacter);

      galeria.append(div);
    }