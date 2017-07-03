let makeFavoritesArray = localStorage.setItem("favorites", "[]")
let favoritesArray = localStorage.favorites

function handleClick() {
  let currentGem = document.getElementById("selectedGem")
  if favoritesArray.includes(currentGem) {
    favoritesArray.splice(0, 0, currentGem);
  }
  else {
    favoritesArray.push(currentGem);
  }
}
