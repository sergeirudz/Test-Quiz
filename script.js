const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const resultContainer = document.querySelector("#result-container");
const resultPercentage = document.querySelector("#result-percentage");

// reveal the results function
function toggleResult() {
  resultContainer.classList.remove("d-none");
}

// form submit event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  // show results and scroll top
  toggleResult();
  scrollTo(0, 0);
  // animate the percentage
  let output = 0;
  const timer = setInterval(() => {
    resultPercentage.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
