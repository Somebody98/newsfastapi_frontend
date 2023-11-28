nayka1 = document.querySelector(".nayka1");nayka2 = document.querySelector(".nayka2");
nayka3 = document.querySelector(".nayka3");nayka4 = document.querySelector(".nayka4");
nayka5 = document.querySelector(".nayka5");nayka6 = document.querySelector(".nayka6");
nayka7 = document.querySelector(".nayka7");nayka8 = document.querySelector(".nayka8");

async function postData(url = 'http://127.0.0.1:8000/news', data = {}) {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
  });
  const dannie = await response.json(); // parses JSON response into native JavaScript objects
  console.log(dannie)
  nayka1.innerHTML = dannie[24].name;
  nayka2.innerHTML = dannie[25].name;
  nayka3.innerHTML = dannie[26].name;
  nayka4.innerHTML = dannie[27].name;
  nayka5.innerHTML = dannie[28].name;
  nayka6.innerHTML = dannie[29].name;
  nayka7.innerHTML = dannie[30].name;
  nayka8.innerHTML = dannie[31].name;

}
postData()

nayka1.addEventListener('click', function(){
  localStorage.setItem('cart', "24");  
});nayka2.addEventListener('click', function(){
  localStorage.setItem('cart', "25");  
});nayka3.addEventListener('click', function(){
  localStorage.setItem('cart', "26");  
});nayka4.addEventListener('click', function(){
  localStorage.setItem('cart', "27");  
});nayka5.addEventListener('click', function(){
  localStorage.setItem('cart', "28");  
});nayka6.addEventListener('click', function(){
  localStorage.setItem('cart', "29");  
});nayka7.addEventListener('click', function(){
  localStorage.setItem('cart', "30");  
});nayka8.addEventListener('click', function(){
  localStorage.setItem('cart', "31");  
});