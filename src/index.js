document.addEventListener("DOMContentLoaded", () => {
  // Challenge 1: Fetch and display dog images
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const imageContainer = document.getElementById("dog-image-container");
      data.message.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        imageContainer.appendChild(img);
      });
    });

  // Challenge 2: Fetch and display dog breeds
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const breeds = Object.keys(data.message);
      const breedList = document.getElementById("dog-breeds");
      breeds.forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
        breedList.appendChild(li);

        // Challenge 3: Change font color on click
        li.addEventListener("click", () => {
          li.style.color = "blue";
        });
      });

      // Challenge 4: Filter breeds by dropdown selection
      const breedDropdown = document.getElementById("breed-dropdown");
      breedDropdown.addEventListener("change", (event) => {
        const selectedLetter = event.target.value;
        const filteredBreeds = breeds.filter((breed) =>
          breed.startsWith(selectedLetter)
        );
        breedList.innerHTML = ""; // Clear the list
        filteredBreeds.forEach((breed) => {
          const li = document.createElement("li");
          li.textContent = breed;
          breedList.appendChild(li);

          // Reapply font color change on click
          li.addEventListener("click", () => {
            li.style.color = "blue";
          });
        });
      });
    });
});
