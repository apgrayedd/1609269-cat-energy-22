var button_before = document.querySelector(".range__button--before")
var button_after = document.querySelector(".range__button--after")
var img_before = document.querySelector(".example__img-mobile--before")
var img_after = document.querySelector(".example__img-mobile--after")

button_before.addEventListener('click', function(){
  if (img_before.classList.contains('visually-hidden')){
    img_before.classList.remove("visually-hidden");
  }
  img_after.classList.add("visually-hidden");
})

button_after.addEventListener('click', function(){
  if (img_after.classList.contains('visually-hidden')){
    img_after.classList.remove("visually-hidden");
  }
  img_before.classList.add("visually-hidden");
})
