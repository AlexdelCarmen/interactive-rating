const ratingCard = document.querySelector(".rating-state-container");
const thankYouCard = document.querySelector(".thank-you-card");
const submitButton = document.querySelector(".submit-rating");
const ratings = document.querySelectorAll(".rating");
const ratingText = document.querySelector(".selected-rating");
let selectRate = "";

console.log(ratingCard);
console.log(thankYouCard);
console.log(submitButton);
console.log(ratings);

ratings.forEach((rating) =>
  rating.addEventListener("click", (e) => {
    ratings.forEach((rating) => rating.classList.remove("rate-selected"));
    e.target.classList.toggle("rate-selected");
  })
);

submitButton.addEventListener("click", () => {
  selectRate = document.querySelector(".rate-selected").textContent;
  ratingText.textContent = selectRate;
  ratingCard.classList.add("invisible");
  thankYouCard.classList.remove("invisible");
});
