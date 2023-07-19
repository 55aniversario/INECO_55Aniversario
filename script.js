const n1 = document.getElementById("n1");
const b1 = document.getElementById("b1");
Init();
//Mouse Wheel event : jQuery Mouse Wheel Plugin
$(".pane,.scrzone").mousewheel(function (event) {
  event.preventDefault();
  if ($ScrollState == false) {
    $ScrollState = true;
    if (event.deltaY < 0) {
      UpdateScreen("+");
    } else if (event.deltaY > 0) {
      UpdateScreen("-");
    } else {
      $ScrollState = false;
    }
  }
});

//Init
function Init() {
  $ScrollSpeed = 0.3; //Vitesse animation
  $ScrollState = false; //Scroll possible si True - Si False anim déjà en cours //
  $ActualSlide = $CibleSlide = $(".pane").first().attr("data-id"); //Première slide
  $ListSlides = new Array();
  $(".pane").each(function () {
    $ListSlides.push($(this).attr("data-id"));
  }); //Liste des slides (.pane)
  console.log($ListSlides);
  TweenMax.to(window, 0, { scrollTo: 0 });
  TweenMax.to(".spane", 0, { scrollTo: { y: 0, x: 0 } });
  $(".visible").removeClass("visible");
}

//ANIMATE
function UpdateScreen(operator) {
  $ActualSlide = $CibleSlide;

  

  // console.log($ActualSlide);
  // console.log($CibleSlide);
  // console.log($CibleSlideDOM);
  //Scroll To : Greensock GSAP
  if (operator == "+") {
    $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) + 1];
    console.log($CibleSlide);  
    if ($CibleSlide === undefined || $CibleSlide == "Conclusion") {
      $(".numeracion").html(0);
    } else {
      $(".numeracion").html(`${$CibleSlide}`);
    }
  } else {
    $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) - 1];  
    if ($CibleSlide === undefined || $CibleSlide == "Welcome") {
      $(".numeracion").html(`0`);
    } else {
      $(".numeracion").html(`${$CibleSlide}`);
    }
  } //Si + slide suivante / si - slide précédente
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  // if (!$CibleSlide) {
  //   $ScrollState = false;
  //   $("#Helper").html("Break");
  //   $CibleSlide = $ActualSlide;
  //   return;
  // }
  if (
    $ActualSlideDOM.closest(".prt").find(".spane").length &&
    ((operator == "+" && $ActualSlideDOM.next(".pane").length) ||
      (operator == "-" && $ActualSlideDOM.prev(".pane").length))
  ) {
    TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
      scrollTo: ".pane[data-id=" + $CibleSlide + "]",
      ease: Power2.easeOut,
      onComplete: function () {
        $ScrollState = false;
        $CibleSlideDOM.addClass("visible");
      },
    }); //Horizontal ou vertical
  } else {
    TweenMax.to(window, $ScrollSpeed, {
      scrollTo: ".pane[data-id=" + $CibleSlide + "]",
      ease: Power2.easeOut,
      onComplete: function () {
        $ScrollState = false;
        $CibleSlideDOM.addClass("visible");
      },
    }); //Normal
  }
}

//Init() On Resize
// $(window).resize(function () {
//   Init();
// });

const botonMenu = document.getElementById("botonMenu");
const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const abrirMenu = document.getElementById("abrirMenu");
const enlaces = document.getElementsByClassName("enlace");
botonMenu.addEventListener("click", () => {
  nav.style.display = "none";
  abrir.style.display = "block";
});

abrirMenu.addEventListener("click", () => {
  abrir.style.display = "none";
  nav.style.display = "block";
});

n1.addEventListener("click", function (e) {
  UpdateScreen("+");
});

b1.addEventListener("click", function (e) {
  UpdateScreen("-");
});

$(".enlace").click(() => {
  $("#nav").css("display", "none");
  $("#abrir").css("display", "block");
});

function scrollToSection(sectionId) {
  const $CibleSlideDOM =$(".pane[data-id=" + 2 + "]");

  if ($CibleSlideDOM.length === 0) {
    console.error("Sección no encontrada: " + sectionId);
    return;
  }
  // Realizar la animación de scroll
  TweenMax.to(window, $ScrollSpeed, {
    scrollTo: $CibleSlideDOM,
    ease: Power2.easeOut,
    onComplete: function () {
      $ScrollState = false;
      $CibleSlideDOM.addClass("visible");
    },
  });
}
// $(".enlace a").on("click", function(event) {
//   // event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
//   const sectionId = parseInt($(this).attr("href").substring(1)) + 1; // Obtener el número después del "#" y sumarle 1
//   console.log(sectionId); // Obtener el valor de data-diapositiva
//   const firstDataId = $(".scr.prt.tab").find("[data-id]:first").attr("data-id");
//   // console.log("Primer data-id encontrado:", firstDataId);  
//   scrollToSection(firstDataId);
// });
$("#enlace1").click(()=>{
  $ActualSlide = "Welcome2";
  $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide)];
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
     scrollTo: ".pane[data-id=" + $CibleSlide + "]",
    ease: Power2.easeOut,
    onComplete: function () {
      $ScrollState = false;
      $CibleSlideDOM.addClass("visible");
    }});    
})
$("#enlace2").click(()=>{
  $ActualSlide = "Welcome3";
  $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) ];
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
     scrollTo: ".pane[data-id=" + $CibleSlide + "]",
    ease: Power2.easeOut,
    onComplete: function () {
      $ScrollState = false;
      $CibleSlideDOM.addClass("visible");
    }});
});
$("#enlace3").click(()=>{
  $ActualSlide = "Welcome4";
  $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) ];
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
     scrollTo: ".pane[data-id=" + $CibleSlide + "]",
    ease: Power2.easeOut,
    onComplete: function () {
      $ScrollState = false;
      $CibleSlideDOM.addClass("visible");
    }});
});
$("#enlace4").click(()=>{
  $ActualSlide = "Welcome5";
  $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) ];
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
     scrollTo: ".pane[data-id=" + $CibleSlide + "]",
    ease: Power2.easeOut,
    onComplete: function () {
      $ScrollState = false;
      $CibleSlideDOM.addClass("visible");
    }});
});
$("#enlace5").click(()=>{
  $ActualSlide = "Welcome6";
  $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) ];
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
     scrollTo: ".pane[data-id=" + $CibleSlide + "]",
    ease: Power2.easeOut,
    onComplete: function () {
      $ScrollState = false;
      $CibleSlideDOM.addClass("visible");
    }});
});

$("#enlace6").click(()=>{
  $ActualSlide = "Welcome7";
  $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) ];
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
     scrollTo: ".pane[data-id=" + $CibleSlide + "]",
    ease: Power2.easeOut,
    onComplete: function () {
      $ScrollState = false;
      $CibleSlideDOM.addClass("visible");
    }});
});

$("#enlace7").click(()=>{
  $ActualSlide = "Welcome8";
  $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) ];
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
     scrollTo: ".pane[data-id=" + $CibleSlide + "]",
    ease: Power2.easeOut,
    onComplete: function () {
      $ScrollState = false;
      $CibleSlideDOM.addClass("visible");
    }});
});

$("#enlace8").click(()=>{
  $ActualSlide = "Welcome9";
  $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) ];
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
     scrollTo: ".pane[data-id=" + $CibleSlide + "]",
    ease: Power2.easeOut,
    onComplete: function () {
      $ScrollState = false;
      $CibleSlideDOM.addClass("visible");
    }});
});

$("#enlace9").click(()=>{
  $ActualSlide = "Welcome10";
  $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) ];
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
     scrollTo: ".pane[data-id=" + $CibleSlide + "]",
    ease: Power2.easeOut,
    onComplete: function () {
      $ScrollState = false;
      $CibleSlideDOM.addClass("visible");
    }});
});

$("#enlace10").click(()=>{
  $ActualSlide = "Welcome11";
  $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) ];
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
     scrollTo: ".pane[data-id=" + $CibleSlide + "]",
    ease: Power2.easeOut,
    onComplete: function () {
      $ScrollState = false;
      $CibleSlideDOM.addClass("visible");
    }});
});
$("#enlace11").click(()=>{
  $ActualSlide = "Welcome12";
  $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) ];
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
     scrollTo: ".pane[data-id=" + $CibleSlide + "]",
    ease: Power2.easeOut,
    onComplete: function () {
      $ScrollState = false;
      $CibleSlideDOM.addClass("visible");
    }});
});
$("#enlace12").click(()=>{
  $ActualSlide = "Welcome13";
  $CibleSlide = $ListSlides[$ListSlides.indexOf($ActualSlide) ];
  $ActualSlideDOM = $(".pane[data-id=" + $ActualSlide + "]");
  $CibleSlideDOM = $(".pane[data-id=" + $CibleSlide + "]");
  TweenMax.to($ActualSlideDOM.closest(".spane"), $ScrollSpeed, {
     scrollTo: ".pane[data-id=" + $CibleSlide + "]",
    ease: Power2.easeOut,
    onComplete: function () {
      $ScrollState = false;
      $CibleSlideDOM.addClass("visible");
    }});
});
