const pokemonBar = document.getElementById('pokemon-info')
const pokemonInput = document.getElementById('pokemon-name')
const button = document.getElementById('fetch-pokemon')



button.addEventListener("click", async () => {
  const apiLink = `https://pokeapi.co/api/v2/pokemon/${pokemonInput.value.toLowerCase().trim()}`
  try {
    const getData = await fetch(apiLink);
    const data = await getData.json();
    
    pokemonBar.innerHTML = `
      <h2>${data.name}<h2>
      <img src=${data.sprites.back_default}>
      <p>Türler:${data['types'][0]['type']['name']}<p> 
    `;
  } catch {
    console.error("Malesef veri çekme işlemi başarısız oldu!");
    
    pokemonBar.innerHTML = `<h3>Lütfen Geçerli Bir Pokemon Giriniz!<h3>`
  }
});


// bu kod sayfada inputa focusluyken enter'a bastığım zaman butonu tetikleyecek bir kod

pokemonInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      button.click()
    }
  })