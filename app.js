const slider = document.getElementById("slider_selector")
const button1 = document.getElementById("id1")
const button2 = document.getElementById("id2")
const button3 = document.getElementById("id3")
const button4 = document.getElementById("id4")

button1.addEventListener("click", () => { 
    slider.scrollTo(0, 0);
    button1.innerHTML = "<img src='/assets/activeslide.svg' alt='' />"
    button2.innerHTML = "<img src='/assets/inactiveslide.svg' alt='' />"
    button3.innerHTML = "<img src='/assets/inactiveslide.svg' alt='' />"
    button4.innerHTML = "<img src='/assets/inactiveslide.svg' alt='' />"
})
button2.addEventListener("click", () => { 
    slider.scrollTo(300, 0);
    button2.innerHTML = "<img src='/assets/activeslide.svg' alt='' />"
    button1.innerHTML = "<img src='/assets/inactiveslide.svg' alt='' />"
    button3.innerHTML = "<img src='/assets/inactiveslide.svg' alt='' />"
    button4.innerHTML = "<img src='/assets/inactiveslide.svg' alt='' />"
})
button3.addEventListener("click", () => { 
    slider.scrollTo(600, 0);
    button1.innerHTML = "<img src='/assets/inactiveslide.svg' alt='' />"
    button2.innerHTML = "<img src='/assets/inactiveslide.svg' alt='' />"
    button3.innerHTML = "<img src='/assets/activeslide.svg' alt='' />"
    button4.innerHTML = "<img src='/assets/inactiveslide.svg' alt='' />"
})
button4.addEventListener("click", () => { 
    slider.scrollTo(900, 0);
    button1.innerHTML = "<img src='/assets/inactiveslide.svg' alt='' />"
    button2.innerHTML = "<img src='/assets/inactiveslide.svg' alt='' />"
    button3.innerHTML = "<img src='/assets/inactiveslide.svg' alt='' />"
    button4.innerHTML = "<img src='/assets/activeslide.svg' alt='' />"
})


var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
