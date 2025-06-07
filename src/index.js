function sayHello() {
  let helloElement = document.querySelector("#hello");
  helloElement.innerHTML = "Bonjour!";
}

setTimeout(sayHello, 3000);
