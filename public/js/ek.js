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
  ekonomika1.innerHTML = dannie[8].name;
  ekonomika2.innerHTML = dannie[9].name;
  ekonomika3.innerHTML = dannie[10].name;
  ekonomika4.innerHTML = dannie[11].name;
  ekonomika5.innerHTML = dannie[12].name;
  ekonomika6.innerHTML = dannie[13].name;
  ekonomika7.innerHTML = dannie[14].name;
  ekonomika8.innerHTML = dannie[15].name;

}
postData()

ekonomika1.addEventListener('click', function(){
  localStorage.setItem('cart', "8");  
});ekonomika2.addEventListener('click', function(){
  localStorage.setItem('cart', "9");  
});ekonomika3.addEventListener('click', function(){
  localStorage.setItem('cart', "10");  
});ekonomika4.addEventListener('click', function(){
  localStorage.setItem('cart', "11");  
});ekonomika5.addEventListener('click', function(){
  localStorage.setItem('cart', "12");  
});ekonomika6.addEventListener('click', function(){
  localStorage.setItem('cart', "13");  
});ekonomika7.addEventListener('click', function(){
  localStorage.setItem('cart', "14");  
});ekonomika8.addEventListener('click', function(){
  localStorage.setItem('cart', "15");  
});