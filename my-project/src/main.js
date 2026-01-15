import './style.css'

const API_KEY = "7C8DezrVggCwVnkHt7BRyZKyIM8eUgKy";
const button = document.getElementById("convertBtn");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;

  try {
    const url = `https://api.currencybeacon.com/v1/convert?api_key=${API_KEY}&from=${from}&to=${to}&amount=${amount}`;
    const response = await fetch(url);
    const data = await response.json();
    result.textContent = `${amount} ${from} = ${data.response.value} ${to}`;
  } catch (error) {
    result.textContent = "Please Fill in All Fields";
  }
});

