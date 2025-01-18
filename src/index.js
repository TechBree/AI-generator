function displayFact(response) {
  console.log("Food fact");
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

  axios.get(apiUrl).then(displayFact);

  console.log("generate Fact");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
}

let foodFactGenerator = document.querySelector("#food-generator");
foodFactGenerator.addEventListener("submit", createFact);

//setup the API URL
// Display the answer
//input the user interface
//generate the prompt and context using console
