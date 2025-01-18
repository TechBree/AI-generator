function createFact(event) {
  event.preventDefault();

  new Typewriter("#food", {
    strings: ["Pizza is orginally italian"],
    autoStart: true,
    delay: 20,
  });
}

let foodFactGenerator = document.querySelector("#food-generator");
foodFactGenerator.addEventListener("submit", createFact);
