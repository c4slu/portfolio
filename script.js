  // Adiciona uma ação ao clique em um link interno
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      // Obtém a seção do destino do link
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  var elements = document.getElementsByClassName("slide-element");
  var delay = 0;
  
  function checkVisibility() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var rect = element.getBoundingClientRect();
      if (rect.top >= 50 && rect.bottom <= window.innerHeight) {
        element.style.transform = "translateX(0%)";
        element.style.opacity = 1;
      }
    }
  }
  
  window.addEventListener("scroll", checkVisibility);
  
  window.addEventListener("load", function() {
    var loader = document.getElementsByClassName("loader")[0];
    loader.style.opacity = 1;
    setTimeout(function() {
      loader.style.display = "none";
    }, 1000);
  });
  