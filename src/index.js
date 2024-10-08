function displayPoem(response) {
  let waiting = document.querySelector("#thePoem");
  waiting.innerHTML = `Generating a poem for you `;
  new Typewriter("#thePoem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatingPoem(events) {
  events.preventDefault();
  let theTopic = document.querySelector("#topic");
  let prompt = ` Write a poem about ${theTopic} `;
  //let context = `you are an AI professinal poem writer who writes a poem based on ${prompt} in HTMLS format separating each line with break sstatment <br> and signing the poem at the end of the poem as <strong> SheCodes AI  </strong>`;
  let context = `you are a romantic poem expert who love to write short poems. your mission is to genertes a four line poem about ${theTopic} in basic HTML and separate each line with </br>.you must not write outside the ${theTopic}. make sure to follow ${prompt}. Do not include a title to the poem.The poem must not be greater the 4 lines. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem`;
  let apiKey = "4f4b7dfae223376b869d41110t4o0071";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}
33;
let jsForm = document.querySelector("#theForm");
jsForm.addEventListener("submit", generatingPoem);
