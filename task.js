const opportunitiesList = [
  { opportunity: "Havuz", imagePath: "./Havuz.png" },
  { opportunity: "Plaj", imagePath: "./plaj.png" },
  { opportunity: "Türk Hamamı", imagePath: "./hamam.png" },
  { opportunity: "Masaj", imagePath: "./masaj.png" },
  { opportunity: "Aqua Park", imagePath: "./Aqua-Park.png" },
  { opportunity: "Fitness", imagePath: "./Fitness.png" },
  { opportunity: "Yoga", imagePath: "./Shape 2.png" },
  { opportunity: "Restaurant", imagePath: "./Restaurant-ikon.png" },
  { opportunity: "Pilates", imagePath: "./Pilates-ikon.png" },
  { opportunity: "Tenis", imagePath: "./Tenis.png" },
  { opportunity: "Bar", imagePath: "./Bar-ikon.png" },
  { opportunity: "Voleybol", imagePath: "./Voleybol.png" },
  { opportunity: "Jet Ski", imagePath: "./jet Ski.png" },
  { opportunity: "Kids Club", imagePath: "./Kids-Club-ikon.png" },
];

const opportunityDiv = document.querySelector(".opportunity");

opportunitiesList.forEach((opportunity) => {
  const opportunityElement = document.createElement("div");
  opportunityElement.classList.add("opportunity-item");
  opportunityElement.innerHTML = `
  <div class="opportunity-content">
      <img src="${opportunity.imagePath}"/>
      <span>${opportunity.opportunity}</span>
  </div>`;
  opportunityDiv.appendChild(opportunityElement);
});

function changeMainImage(imagePath) {
  document.getElementById("mainImage").src = imagePath;
}

function showForm() {
  document.getElementById("popupForm").style.display = "block";
}

function hideForm() {
  document.getElementById("popupForm").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const bilgiAlButton = document.querySelector(".Bilgi_Al_Btn");
  bilgiAlButton.addEventListener("click", showForm);

  const closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener("click", hideForm);
});
