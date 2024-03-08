const BASE_URL =
  "https://v6.exchangerate-api.com/v6/24833b8e5d10a3a1ee18c316/latest";
const dropdowns = document.querySelectorAll("select");
const exchangeBtn = document.querySelector("button");
const from = document.querySelector("#country1 select");
const to = document.querySelector("#country2 select");
const msg = document.querySelector("#msg");

for (let dropdown of dropdowns) {
  for (let code in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    dropdown.append(newOption);
    if (dropdown.name === "from" && code === "USD") {
      newOption.selected = "selected";
    } else if (dropdown.name === "to" && code === "INR") {
      newOption.selected = "selected";
    }
  }

  dropdown.addEventListener("change", (evnt) => {
    updateFlag(evnt.target);
  });
}
const updateFlag = (element) => {
  let countryCode = countryList[element.value];
  let flag = element.parentElement.querySelector("img");
  flag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

exchangeBtn.addEventListener("click", async (evnt) => {
  evnt.preventDefault();
  let amount = document.querySelector("#amount").value;
  let url = `${BASE_URL}/${from.value}`;
  let response = await fetch(url);
  let responseJson = await response.json();
  let rate = (Math.round((responseJson.conversion_rates[to.value]*amount) * 100) / 100).toFixed(2);
  
  msg.value=`${rate}`
  
});
