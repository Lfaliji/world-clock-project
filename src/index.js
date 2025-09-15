function updateDate() {
  //Brussels
  let brusselsElement = document.querySelector("#brussels");
  let brusselsDateElement = brusselsElement.querySelector(".date");
  let brusselsTimeElement = brusselsElement.querySelector(".time");
  let brusselsDate = moment().tz("Europe/Brussels");
  brusselsDateElement.innerHTML = brusselsDate.format("MMMM Do YYYY");
  brusselsTimeElement.innerHTML = brusselsDate.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Gaza
  let gazaElement = document.querySelector("#gaza");
  let gazaDateElement = gazaElement.querySelector(".date");
  let gazaTimeElement = gazaElement.querySelector(".time");
  let gazaDate = moment().tz("Asia/Gaza");
  gazaDateElement.innerHTML = gazaDate.format("MMMM Do YYYY");
  gazaTimeElement.innerHTML = gazaDate.format("h:mm:ss [<small>]A[</small>]");
}

updateDate();
setInterval(updateDate, 1000);
