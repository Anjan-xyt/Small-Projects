const timerElement = document.querySelector(".timer");

const timer = () => {
  // Set the initial value of the timer
  let timeLeft = 2;

  // Function to update the timer every second
  function updateTimer() {
    timerElement.textContent = `${timeLeft}s`;
    timeLeft--;

    // Clear the interval when timeLeft reaches 0
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "";
    }
  }

  // Call the updateTimer function every second
  var timerInterval = setInterval(updateTimer, 1000);
};
