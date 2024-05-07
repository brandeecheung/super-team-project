document.getElementById("searchButton").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchInput").value;
    // Make API request using searchTerm and display photos
    // Example:
//     fetch("https://api.unsplash.com/search/photos?query=" + searchTerm + "&client_id=YOUR_UNSPLASH_ACCESS_KEY")
//       .then(response => response.json())
//       .then(data => {
//         // Clear previous search results
//         document.getElementById("photoDisplay").innerHTML = "";
        
//         // Iterate over the fetched photos and create img elements to display them
//         data.results.forEach(function(photo) {
//             const imgElement = document.createElement("img");
//             imgElement.src = photo.urls.small;
//             imgElement.alt = photo.alt_description;
//             imgElement.classList.add("col-md-4", "mb-3");
//             document.getElementById("photoDisplay").appendChild(imgElement);
//         });
//       })
//       .catch(error => console.error("Error fetching photos:", error));
});
