// script.js

document.getElementById("searchButton").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchInput").value;
    // Make API request using searchTerm and display photos
    // Example:
    // fetch("https://api.example.com/photos?query=" + searchTerm)
    //   .then(response => response.json())
    //   .then(data => {
    //     // Display photos in #photoDisplay
    //   })
    //   .catch(error => console.error("Error fetching photos:", error));
  });
  