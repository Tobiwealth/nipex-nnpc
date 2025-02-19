const slider = document.getElementById("slider");
const indicators = document.querySelectorAll(".indicator");

let index = 0;

// Function to update slider position
function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach((dot, i) => {
    dot.classList.toggle("opacity-100", i === index);
    dot.classList.toggle("opacity-50", i !== index);
  });
}

// Event listeners for indicators
indicators.forEach((dot) => {
  dot.addEventListener("click", () => {
    index = parseInt(dot.getAttribute("data-index"));
    updateSlider();
  });
});

// Auto-slide every 3 seconds
setInterval(() => {
  index = (index + 1) % 3; // Loop through images
  updateSlider();
}, 3000);


//update this list with the link for each card.
const list = [
  {id: 1, title: "TASK MANAGEMENT", src:"task-01", link:"https://www.google.com/"},
  {id: 2, title: "BUDGET MANAGEMENT", src:"pie-chart-02", link:"https://www.google.com/"},
  {id: 3, title: "CUSTOMER RELATIONSHIP MANAGEMENT", src:"user-settings-02", link:"https://www.google.com/"},
  {id: 4, title: "INVOICE AND PAYMENT MANAGEMENT", src:"invoice-04", link:"https://www.google.com/"},
  {id: 5, title: "VENDOR AND CONTRACT MANAGEMENT", src:"license-draft", link:"https://www.google.com/"},
  {id: 6, title: "HUMAN CAPITAL  MANAGEMENT", src:"user-group", link:"https://www.google.com/"},
  {id: 7, title: "DOCUMENT MANAGEMENT", src:"folder-library", link:"https://www.google.com/"},
  {id: 8, title: "DATA ANALYTICS AND REPORTING", src:"Frame", link:"https://www.google.com/"},
  {id: 9, title: "USER AND SYSTEM ADMINISTRATION", src:"dashboard-square-setting", link:"https://www.google.com/"},
]

const cardContainer = document.getElementById("card-container");

list.forEach(item => {
  const card = document.createElement("a");
  card.className = "bg-primary h-[115px] w-[360px] lg:h-[138.87px] flex flex-col items-center lg:items-start gap-[16px] lg:gap-[40px] px-3 py-6 rounded-[8px]";
  card.href = item.link ; 
  card.target = "_blank"; //if you don't want it to open in another tab, delete this line.
  card.rel = "noopener noreferrer";// and this line

  card.innerHTML = `
    <div class="flex relative text-white">
      <img src="assets/icons/${item.src}.svg" alt="icon" class="w-[35px] h-[35px]">
    </div>
    <div class="flex justify-between items-center text-white">
      <p class="text-base font-medium card-word">${item.title}</p>
    </div>
  `;

  cardContainer.appendChild(card);
});