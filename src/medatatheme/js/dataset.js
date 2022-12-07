const iconCard = document.querySelector("#icon-card");
const cardBody = document.querySelector("#card-body");
iconCard.addEventListener("click", () => {
  let display = cardBody.style.display;
  cardBody.style.display =
    display == "none" || display == "" ? "block" : "none";
  iconCard.classList.remove("fa-chevron-down", "fa-chevron-up");
  iconCard.classList.add(
    display == "none" || display == "" ? "fa-chevron-up" : "fa-chevron-down"
  );
});
