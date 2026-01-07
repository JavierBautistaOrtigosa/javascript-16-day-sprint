//-> fetch

//-> fetch in JavaScript is a function
//-> ... used for making HTTP requests to fetch resources such as...
//-> ... JSON style data, images, files, etc...

//-> The fetch function simplifies asynchronous data fetching and is used to:
//-> - Interact with APIs to retrieve and send data asynchronously over the web.

//-> fetch has two parameters. Example: fetch(url, {options}):
//-> - the url of the resouce.
//-> - an object of options such as method:"GET".
//-> - However there are several, will focus on POST, PUT and DELETE.

//-> Let's try fetch...

// // fetch("https://pokeapi.co/api/v2/pokemon/pikachu") //! This is ok...
// fetch("https://pokeapi.co/api/v2/pokemon/dino") //! This throws an error...
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Could not fetch resource");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//-> Let's try fetch with async and await...

async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

  } catch (error) {
    console.log(error);
  }
};
