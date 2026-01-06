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

