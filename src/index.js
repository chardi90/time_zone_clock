const citySelectElement = document.querySelector("#city-dropdown");

function displayCityOne() {
  let cityOneElement = document.querySelector("#city-one");
  if (cityOneElement) {
    let cityOneDateElement = cityOneElement.querySelector(".date");
    let cityOneTimeElement = cityOneElement.querySelector(".time");
    let cityOneDate = moment().tz("America/Los_Angeles").format("Do MMMM YYYY");
    let cityOneTime = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");

    cityOneDateElement.innerHTML = cityOneDate;
    cityOneTimeElement.innerHTML = cityOneTime;
  }
}

function displayCityTwo() {
  let cityTwoElement = document.querySelector("#city-two");
  if (cityTwoElement) {
    let cityTwoDateElement = cityTwoElement.querySelector(".date");
    let cityTwoTimeElement = cityTwoElement.querySelector(".time");
    let cityTwoDate = moment().tz("Europe/Paris").format("Do MMMM YYYY");
    let cityTwoTime = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss [<small>]A[</small>]");

    cityTwoDateElement.innerHTML = cityTwoDate;
    cityTwoTimeElement.innerHTML = cityTwoTime;
  }
}

function displayCityThree() {
  let cityThreeElement = document.querySelector("#city-three");
  if (cityThreeElement) {
    let cityThreeDateElement = cityThreeElement.querySelector(".date");
    let cityThreeTimeElement = cityThreeElement.querySelector(".time");
    let cityThreeDate = moment().tz("Asia/Tokyo").format("Do MMMM YYYY");
    let cityThreeTime = moment()
      .tz("Asia/Tokyo")
      .format("h:mm:ss [<small>]A[</small>]");

    cityThreeDateElement.innerHTML = cityThreeDate;
    cityThreeTimeElement.innerHTML = cityThreeTime;
  }
}

function getCityTimeZoneName(cityKey) {
  const cityTimezones = {
    // North America
    New_York: "America/New_York",
    Los_Angeles: "America/Los_Angeles",
    Chicago: "America/Chicago",
    Toronto: "America/Toronto",
    Mexico_City: "America/Mexico_City",
    Denver: "America/Denver",
    Vancouver: "America/Vancouver",
    Montreal: "America/Montreal",
    Phoenix: "America/Phoenix",

    // South America
    Buenos_Aires: "America/Argentina/Buenos_Aires",
    Sao_Paulo: "America/Sao_Paulo",
    Lima: "America/Lima",
    Bogota: "America/Bogota",
    Santiago: "America/Santiago",
    Caracas: "America/Caracas",
    Quito: "America/Guayaquil",
    Montevideo: "America/Montevideo",

    // Europe
    London: "Europe/London",
    Paris: "Europe/Paris",
    Berlin: "Europe/Berlin",
    Madrid: "Europe/Madrid",
    Rome: "Europe/Rome",
    Amsterdam: "Europe/Amsterdam",
    Oslo: "Europe/Oslo",
    Athens: "Europe/Athens",
    Warsaw: "Europe/Warsaw",
    Zurich: "Europe/Zurich",

    // Africa
    Cairo: "Africa/Cairo",
    Johannesburg: "Africa/Johannesburg",
    Nairobi: "Africa/Nairobi",
    Lagos: "Africa/Lagos",
    Casablanca: "Africa/Casablanca",
    Algiers: "Africa/Algiers",
    Accra: "Africa/Accra",
    Addis_Ababa: "Africa/Addis_Ababa",

    // Asia
    Tokyo: "Asia/Tokyo",
    Beijing: "Asia/Shanghai", // Shanghai timezone is used for Beijing
    Seoul: "Asia/Seoul",
    Bangkok: "Asia/Bangkok",
    Singapore: "Asia/Singapore",
    Jakarta: "Asia/Jakarta",
    Kuala_Lumpur: "Asia/Kuala_Lumpur",
    Mumbai: "Asia/Kolkata",
    Manila: "Asia/Manila",
    Dubai: "Asia/Dubai",

    // Oceania
    Sydney: "Australia/Sydney",
    Melbourne: "Australia/Melbourne",
    Auckland: "Pacific/Auckland",
    Brisbane: "Australia/Brisbane",
    Perth: "Australia/Perth",
    Port_Moresby: "Pacific/Port_Moresby",
    Suva: "Pacific/Fiji",

    // Antarctica
    McMurdo: "Antarctica/McMurdo",
    Palmer: "Antarctica/Palmer",
    Casey: "Antarctica/Casey",
  };
  const tz = cityTimezones[cityKey];
  if (!tz) return null;
  const date = new Date();
  const full = date.toLocaleDateString("en-US", {
    timeZone: tz,
    timeZoneName: "long",
  });
  const short = date.toLocaleDateString("en-US", { timeZone: tz });
  const tzName = full
    .replace(short, "")
    .replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, "");
  return tzName;
}

function updateTime() {
  let cityElement = document.querySelector("div.city");
  let cityTimeZoneName = getCityTimeZoneName("cityName");
  let cityDateElement = cityElement.querySelector("div.date");
  let cityTimeElement = cityElement.querySelector("div.time");

  let cityDate = moment().tz(`${cityTimeZoneName}`).format("Do MMMM YYYY");
  let cityTime = moment()
    .tz(`${cityTimeZoneName}`)
    .format("h:mm:ss [<small>]A[</small>]");

  cityDateElement.innerHTML = cityDate;
  cityTimeElement.innerHTML = cityTime;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone).format("Do MMMM YYYY");
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("h:mm:ss [<small>]A[</small>]");
  let citiesElement = document.querySelector("#cities-displayed");
  let clickId = Math.random();
  citiesElement.innerHTML += `
    <div class="city" id="extra-city-${clickId}">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityDate}</div>
      </div>
      <div class="right-side">
        <div class="time">${cityTime}</div>
        <div class="delete">
          <button class="small-button delete-button">X</button>
        </div>
      </div>
    </div>
  `;
}

displayCityOne();
displayCityTwo();
displayCityThree();

updateTime();
setInterval(updateTime, 1000);

citySelectElement.addEventListener("change", updateCity);

document
  .querySelector("#cities-displayed")
  .addEventListener("click", function (event) {
    if (event.target && event.target.matches("button.delete-button")) {
      const cityDiv = event.target.closest(".city");
      if (cityDiv) {
        cityDiv.remove();
      }
    }
  });
