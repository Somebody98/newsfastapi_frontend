sport1 = document.querySelector(".sport1");
sport2 = document.querySelector(".sport2");
sport3 = document.querySelector(".sport3");
sport4 = document.querySelector(".sport4");
sport5 = document.querySelector(".sport5");
sport6 = document.querySelector(".sport6");
sport7 = document.querySelector(".sport7");
sport8 = document.querySelector(".sport8");

async function postData(url = 'http://127.0.0.1:8000/news', data = {}) {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
  });
  const dannie = await response.json(); // parses JSON response into native JavaScript objects
  console.log(dannie)
  sport1.innerHTML = dannie[16].name;
  sport2.innerHTML = dannie[17].name;
  sport3.innerHTML = dannie[18].name;
  sport4.innerHTML = dannie[19].name;
  sport5.innerHTML = dannie[20].name;
  sport6.innerHTML = dannie[21].name;
  sport7.innerHTML = dannie[22].name;
  sport8.innerHTML = dannie[23].name;
}
postData()

sport1.addEventListener('click', function(){
  localStorage.setItem('cart', "16");  
})
sport2.addEventListener('click', function(){
  localStorage.setItem('cart', "17")  
});
sport3.addEventListener('click', function(){
  localStorage.setItem('cart', "18")  
});
sport4.addEventListener('click', function(){
  localStorage.setItem('cart', "19")  
});
sport5.addEventListener('click', function(){
  localStorage.setItem('cart', "20")  
});
sport6.addEventListener('click', function(){
  localStorage.setItem('cart', "21")  
});
sport7.addEventListener('click', function(){
  localStorage.setItem('cart', "22")  
});
sport8.addEventListener('click', function(){
  localStorage.setItem('cart', "23")  
});