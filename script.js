const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('light');
})

var back_top_button = document.getElementById("scroll_btn");

window.onscroll = function() {scrollfunc()};

function scrollfunc() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	back_top_button.style.display = "block";
  } else {
	back_top_button.style.display = "none";
  }
}

function Scrollback() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}