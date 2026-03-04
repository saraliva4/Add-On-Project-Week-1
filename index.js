function alertLocalTime(event) {
  let sydneyTime = moment()
    .tz("Australia/Sydney")
    .format("dddd, MMMM D, YYYY HH:mma ");

  let newYorkTime = moment()
    .tz("America/New_York")
    .format("dddd, MMMM D, YYYY HH:mma ");

  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("dddd, MMMM D, YYYY HH:mma ");

  if (event.target.value === "sydney") {
    alert(`It is ${sydneyTime} in Australia/Sydney`);
  }
  if (event.target.value === "new-york") {
    alert(`It is ${newYorkTime} in America/New York`);
  }
  if (event.target.value === "tokyo") {
    alert(`It is ${tokyoTime} in Asia/Tokyo`);
  }
}

let countrySelector = document.querySelector("#countries");
countrySelector.addEventListener("change", alertLocalTime);
