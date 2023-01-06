const searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	open(window.location.origin + "/wireframes/search.html", "_self");
});
