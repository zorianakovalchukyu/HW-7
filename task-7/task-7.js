const country = document.getElementById("country");
const cities = document.getElementById("cities");
const out = document.querySelector(".out");
const cityData = {
  ger: ["Berlin", "Hamburg", "Munich", "Cologne", "Stuttgart"],
  usa: ["New-York", "Waschington", "Boston", "Chikago"],
  ukr: ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Lviv"],
};

function updateCities() {
  cities.innerHTML = "";
  const selectedCountry = country.value;
  const citiesArray = cityData[selectedCountry] || [];
  citiesArray.forEach((city) => {
    createOption(city, cities);
  });
}
function createOption(text, city) {
  let option = document.createElement("option");
  option.value = text;
  option.textContent = text;
  city.append(option);
}
function display() {
  const selectedOption = country.options[country.selectedIndex];
  out.innerHTML = `${selectedOption.textContent}, ${cities.value}`;
}
updateCities();
display();
country.addEventListener("change", updateCities);
country.addEventListener("change", display);
cities.addEventListener("change", display);
