import './style.css'

const API_KEY = "7C8DezrVggCwVnkHt7BRyZKyIM8eUgKy";


async function convertCurrency(from, to, amount) {
  const url = `https://api.currencybeacon.com/v1/convert?api_key=${API_KEY}&from=${from}&to=${to}&amount=${amount}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.meta.code !== 200) {
      throw new Error(data.meta.error || "Conversion failed");
    }

    console.log(
      `${amount} ${from} = ${data.response.value} ${to}`
    );
  } catch (error) {
    console.error("Error:", error.message);
  }
}

convertCurrency("AUD", "USD", 500)


const button = document.getElementById("convertBtn");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
  const from = document.getElementById("from").value.toUpperCase();
  const to = document.getElementById("to").value.toUpperCase();
  const amount = document.getElementById("amount").value;

  if (!from || !to || !amount) {
    result.textContent = "Please fill in all fields.";
    return;
  }

  result.textContent = "Converting...";

  try {
    const url = `https://api.currencybeacon.com/v1/convert?api_key=${API_KEY}&from=${from}&to=${to}&amount=${amount}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.meta.code !== 200) {
      throw new Error("Conversion failed");
    }

    result.textContent = `${amount} ${from} = ${data.response.value} ${to}`;
  } catch (error) {
    result.textContent = "Error converting currency";
    console.error(error);
  }
});

