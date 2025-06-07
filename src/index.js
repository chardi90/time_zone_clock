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

citySelect.addEventListener("change", alertSelectedCountry);
