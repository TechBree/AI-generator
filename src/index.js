function displayFact(response) {
  new Typewriter("#food", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
  });
}

function createFact(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "bbfa370443fe49feaa41t631d604c6oa";
  let prompt = `Generate facts about ${instructionInput.value}`;
  let context =
    "You are a food expert with knowledge about any dish, write 4 very very short sentences about history of the dish using basic HTML, remove the title and bullet points, sign 'Bridgit SheCode' inside <strong> element at the bottom";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let foodBoxElement = document.querySelector("#food");
  foodBoxElement.classList.remove("hidden");
  foodBoxElement.innerHTML = `<div class="searching">Generate a food fact about ${instructionInput.value}</div>`;

  axios.get(apiUrl).then(displayFact);
}

let foodFactGenerator = document.querySelector("#food-generator");
foodFactGenerator.addEventListener("submit", createFact);
