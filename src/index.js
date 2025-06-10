const citySelect = document.querySelector("#city-dropdown");

function parisDateTime() {
  let parisTime = moment()
    .tz("Europe/Paris")
    .format("dddd, MMMM D, YYYY h:mm A");
  return `It is ${parisTime} in Paris, France.`;
}

function tokyoDateTime() {
  let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:mm A");
  return `It is ${tokyoTime} in Tokyo, Japan.`;
}

function sydneyDateTime() {
  let sydneyTime = moment()
    .tz("Australia/Sydney")
    .format("dddd, MMMM D, YYYY h:mm A");
  return `It is ${sydneyTime} in Sydney, Australia.`;
}

function alertSelectedCountry(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      alert(parisDateTime());
    }
    if (event.target.value === "tokyo") {
      alert(tokyoDateTime());
    }
    if (event.target.value === "sydney") {
      alert(sydneyDateTime());
    }
  }
}

setInterval(function () {
  function displayCityOne() {
    let cityOneElement = document.querySelector("#city-one");
    let cityOneDateElement = cityOneElement.querySelector(".date");
    let cityOneTimeElement = cityOneElement.querySelector(".time");
    let cityOneDate = moment().tz("America/Los_Angeles").format("Do MMMM YYYY");
    let cityOneTime = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");

    cityOneDateElement.innerHTML = cityOneDate;
    cityOneTimeElement.innerHTML = cityOneTime;
  }

  function displayCityTwo() {
    let cityTwoElement = document.querySelector("#city-two");
    let cityTwoDateElement = cityTwoElement.querySelector(".date");
    let cityTwoTimeElement = cityTwoElement.querySelector(".time");
    let cityTwoDate = moment().tz("Europe/Paris").format("Do MMMM YYYY");
    let cityTwoTime = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss [<small>]A[</small>]");

    cityTwoDateElement.innerHTML = cityTwoDate;
    cityTwoTimeElement.innerHTML = cityTwoTime;
  }

  function displayCityThree() {
    let cityThreeElement = document.querySelector("#city-three");
    let cityThreeDateElement = cityThreeElement.querySelector(".date");
    let cityThreeTimeElement = cityThreeElement.querySelector(".time");
    let cityThreeDate = moment().tz("Asia/Tokyo").format("Do MMMM YYYY");
    let cityThreeTime = moment()
      .tz("Asia/Tokyo")
      .format("h:mm:ss [<small>]A[</small>]");

    cityThreeDateElement.innerHTML = cityThreeDate;
    cityThreeTimeElement.innerHTML = cityThreeTime;
  }

  displayCityOne();
  displayCityTwo();
  displayCityThree();
}, 1000);

citySelect.addEventListener("change", alertSelectedCountry);
