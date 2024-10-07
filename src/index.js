function displayPoem(events) {
  events.preventDefault();
  new Typewriter("#thePoem", {
    strings: "Nature's first green is gold,",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let jsForm = document.querySelector("#theForm");
jsForm.addEventListener("submit", displayPoem);
