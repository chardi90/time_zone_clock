const citySelectElement = document.querySelector("#city-dropdown");

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone).format("Do MMMM YYYY");
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("h:mm:ss [<small>]A[</small>]");
  let citiesElement = document.querySelector("#cities-displayed");

  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityDate}</div>
    </div>
    <div class="time">${cityTime}</div>
  </div>
  `;
}

setInterval(function () {
  function displayCityOne() {
    let cityOneElement = document.querySelector("#city-one");
    if (cityOneElement) {
      let cityOneDateElement = cityOneElement.querySelector(".date");
      let cityOneTimeElement = cityOneElement.querySelector(".time");
      let cityOneDate = moment()
        .tz("America/Los_Angeles")
        .format("Do MMMM YYYY");
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

  displayCityOne();
  displayCityTwo();
  displayCityThree();
}, 1000);

citySelectElement.addEventListener("change", updateCity);
