name1 = document.querySelector(".name1");name2 = document.querySelector(".name2");
name3 = document.querySelector(".name3");name4 = document.querySelector(".name4");
name5 = document.querySelector(".name5");name6 = document.querySelector(".name6");
name7 = document.querySelector(".name7");name8 = document.querySelector(".name8");
ekonomika1 = document.querySelector(".ekonomika1");ekonomika2 = document.querySelector(".ekonomika2");
ekonomika3 = document.querySelector(".ekonomika3");ekonomika4 = document.querySelector(".ekonomika4");
ekonomika5 = document.querySelector(".ekonomika5");ekonomika6 = document.querySelector(".ekonomika6");
ekonomika7 = document.querySelector(".ekonomika7");ekonomika8 = document.querySelector(".ekonomika8");

async function postData(url = 'http://127.0.0.1:8000/news', data = {}) {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
  });
  const dannie = await response.json(); // parses JSON response into native JavaScript objects
  console.log(dannie)
  name1.innerHTML = dannie[0].name;
  name2.innerHTML = dannie[1].name;
  name3.innerHTML = dannie[2].name;
  name4.innerHTML = dannie[3].name;
  name5.innerHTML = dannie[4].name;
  name6.innerHTML = dannie[5].name;
  name7.innerHTML = dannie[6].name;
  name8.innerHTML = dannie[7].name;
}
postData()


name1.addEventListener('click', function(){
  localStorage.setItem('cart', "0");  
});name2.addEventListener('click', function(){
  localStorage.setItem('cart', "1");  
});name3.addEventListener('click', function(){
  localStorage.setItem('cart', "2");  
});name4.addEventListener('click', function(){
  localStorage.setItem('cart', "3");  
});name5.addEventListener('click', function(){
  localStorage.setItem('cart', "4");  
});name6.addEventListener('click', function(){
  localStorage.setItem('cart', "5");  
});name7.addEventListener('click', function(){
  localStorage.setItem('cart', "6");  
});name8.addEventListener('click', function(){
  localStorage.setItem('cart', "7");  
});