var containsText = document.body.textContent.content.indexOf("Oh no!")

if (containsText) {
  var getSearchBar = document.getElementsByClassName("searchBar");
  getSearchBar[0].style.color = "red";
} else {
  getSearchBar[0].style.color = "black";
}
