async function populate() {
    const requestData =
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestData);
  
    const response = await fetch(request);
    const superHeroes = await response.json();
  
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}
