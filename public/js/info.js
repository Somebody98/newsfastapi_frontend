class1 = document.querySelector(".class1");
classinfo = document.querySelector(".classinfo")

let cart = localStorage.getItem('cart')
console.log(cart,'- Новость')

async function post2(url = 'http://127.0.0.1:8000/news', data = {}) {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
  });
  const dannie = await response.json(); // parses JSON response into native JavaScript objects
  for (let sef = 0; sef < 1000; sef++) {
    if (sef == cart){class1.innerHTML = dannie[cart].name;
      classinfo.innerHTML = dannie[cart].information;break;}
  }
}
post2()