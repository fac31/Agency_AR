import data from "./hunters.json" assert { type: "json" };
const hunters = data.hunters;
// console.log(hunters);

// console.log(hunters[0])
function displayHunters() {

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
      </div>
      <button>
        <span class="material-symbols-rounded"> arrow_right_alt </span>Work with AR
      </button>
      
      `;

  document.body.main.appendChild(galleryContainer);
}

displayHunters();

