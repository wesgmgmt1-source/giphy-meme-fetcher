const apiKey = "ociZQDz9HflTzPNU5qbsMYDTUVODpiw5";
const defaultQuery = "chill guy";

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-btn");
const searchInput = document.querySelector("#search-input");

button.addEventListener("click", async () => {
  // Use the search box if it has text, otherwise fall back to the meme
  const query = searchInput.value.trim() || defaultQuery;
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=12`;

  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    const images = json.data.map((gif) => gif.images.original.url);
    console.log(images);

    gifContainer.innerHTML = "";
    for (const url of images) {
      gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
    }
  } catch (error) {
    console.error("Could not fetch GIFs:", error);
  }
});