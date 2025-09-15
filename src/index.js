function updateDate() {
  //Brussels
  let brusselsElement = document.querySelector("#brussels");
  if (brusselsElement) {
    let brusselsDateElement = brusselsElement.querySelector(".date");
    let brusselsTimeElement = brusselsElement.querySelector(".time");
    let brusselsDate = moment().tz("Europe/Brussels");
    brusselsDateElement.innerHTML = brusselsDate.format("MMMM Do YYYY");
    brusselsTimeElement.innerHTML = brusselsDate.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Gaza
  let gazaElement = document.querySelector("#gaza");
  if (gazaElement) {
    let gazaDateElement = gazaElement.querySelector(".date");
    let gazaTimeElement = gazaElement.querySelector(".time");
    let gazaDate = moment().tz("Asia/Gaza");
    gazaDateElement.innerHTML = gazaDate.format("MMMM Do YYYY");
    gazaTimeElement.innerHTML = gazaDate.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div> <a href="/">All cities</a>`;
}

updateDate();
setInterval(updateDate, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
