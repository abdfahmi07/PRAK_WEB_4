const valueInput = document.querySelector(".value");
const valueRupiahInput = document.querySelector(".rupiah-value");
const valasValue = document.querySelector(".valas");

valasValue.addEventListener("change", function () {
  if (valasValue.value == "dollar_us") {
    console.log("dollar-us");
    valueRupiahInput.value = valueInput.value * 9.915;
  } else if (valasValue.value == "dollar_singapore") {
    console.log("dollar-singapore");
    valueRupiahInput.value = valueInput.value * 13.472;
  } else if (valasValue.value == "ringgit_malaysia") {
    console.log("ringgit_malaysia");
    valueRupiahInput.value = valueInput.value * 874;
  } else if (valasValue.value == "yen_jepang") {
    console.log("yen_jepang");
    valueRupiahInput.value = valueInput.value * 120;
  } else if (valasValue.value == "euro") {
    console.log("euro");
    valueRupiahInput.value = valueInput.value * 15.888;
  } else if (valasValue.value == "riyal_arab_saudi") {
    console.log("riyal_arab_saudi");
    valueRupiahInput.value = valueInput.value * 3.592;
  }
});
