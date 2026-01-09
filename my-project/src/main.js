import './style.css'


/* const api = "https://currencybeacon.com/";

const jit = document.querySelector('.apibutton');
jit.addEventListener('click', ()=> {
  window.alert('Copy and Paste this Link:     ' + api);
}) */


const apikey = "7C8DezrVggCwVnkHt7BRyZKyIM8eUgKy";
async function getData() {
  try {
    const response = await fetch(`/api/v1/latest?api_key=${apikey}`);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch(error) {
    console.log(error);
  }
}
getData();

function moreOption(data) {
  const breh1 = document.getElementById('breh1');
  const breh2 = document.getElementById('breh2');
  Object.entries(data.rates).forEach(([name, rate]) => {
    const option1 = document.createElement(`option`);
    option1.text = name;
    breh1.add(option1);
    const option2 = document.createElement(`option`);
    option2.text = name;
    breh2.add(option2);

  });
}
convertCurrency();
async function main() {
  const data = await getData();
  moreOption(data);
}
main();



const click = document.getElementById('jit');
const idk = document.getElementById('why')
click.addEventListener('click', ()=> {
  
  idk.value = 'Conversion Error'

})