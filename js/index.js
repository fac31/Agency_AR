
function displayHunters(hunters) {
  const galleryContainer = document.getElementById("gallery-section");
  galleryContainer.innerHTML = `
      <div class="gallery">
        ${hunters
          .map(
            (hunter) => `
          <div class="card-small">
            <img src="${hunter.image}" alt="${hunter.name}"/>
            <h2>${hunter.name}</h2>
            <h3>${hunter.role}</h3>
            <p>${hunter.description}</p>
          </div>
        `
          )
          .join("")}
      </div>`;
  document.body.main.appendChild(galleryContainer);
}

async function fetchDataAndDisplay() {
  try {
    const response = await fetch("./js/hunters.json");
    if (!response.ok) {
      throw new Error("json didnt load correctly");
    }
    const data = await response.json();
    const hunters = data.hunters;
    displayHunters(hunters);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataAndDisplay();
