$("h1").css("color", "red");
$("body").css("background-color", "purple");

$("h1").text("Good Bye");
$("button").html("Don't Click Me");

$("button").click(function () {
  $("h1").css("color", "green");
});

$("input").keypress(function (event) {
  $("h1").text(event.key);
  console.log(event.key);
});

$(".new").click(function () {
  $(".last").after("<button>New Button</button>");
});

$("button").on("click", function () {
  $("h1").slideToggle();
});
