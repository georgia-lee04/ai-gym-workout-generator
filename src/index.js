function displayWorkout(response) {
  new Typewriter("#generator-output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateWorkout(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "4f9f36e261a3705eo07b4a98ct5b3f15";
  let prompt = `Generate a workout plan for the gym based on ${instructionsInput.value}`;
  let context =
    "You are a knowledgable fitness expert and provide short effective 45 minute gym workouts in ten lines maximum. Your mission is to provide a short 45 minute workout plan that targets the area of the body entered. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let workoutElement = document.querySelector("#generator-output");
  workoutElement.classList.remove("hidden");
  workoutElement.innerHTML = `<div class ="loader"></div><span class ="loader-text">Generating your gym workout...</span>`;

  axios.get(apiUrl).then(displayWorkout);
}

let workoutPlanForm = document.querySelector("#workout-plan-form");
workoutPlanForm.addEventListener("submit", generateWorkout);
