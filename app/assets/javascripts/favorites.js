function renderFavorites() {
  $('.list').empty()
  const favorites = JSON.parse(localStorage.getItem('favorites')) || "[]";
  for (var i=0; i < favorites.length; i++) {
    $('.list').append($(`<li class="fav" id="${favorites[i]}"> ${favorites[i]} </li>`))
  }
}

$(document).ready(renderFavorites)

function handleClick(e){
  const favorites = JSON.parse(localStorage.getItem('favorites')) || "[]";
       var id = e.target.id,
           item = e.target,
           index = favorites.indexOf(id);
       // item is not favorite
       if (index == -1) {
         favorites.push(id);
       // item is already favorite
       } else {
         favorites.splice(index, 1);
       }
       // store array in local storage
       localStorage.setItem('favorites', JSON.stringify(favorites));
       renderFavorites();
   }

 $(document).on('click','li', handleClick);


 //Note: I would never use localStorage to store user data like this. Most likely I would store it in sessions or have their information sent to the back end depending on the task at hand. If localStorage weren't a requirement, use of the React.js store would have made this a quick job. 
