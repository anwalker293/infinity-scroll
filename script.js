const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 10;
// Normally, don't display but public website anyways/getting public data
const apiKey = "xc2NStKeUM79mHt2uNlLQCxN6IIGs1uNVxBtq8ANsls";
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
  // Run function for each object in photoArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    // Create <img> for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    // Put <img> inside of <a>, then put both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    console.log(photosArray);
    displayPhotos();
  } catch (error) {
    // Catch error here
  }
}

// On Load
getPhotos();
