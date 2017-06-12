var coders = {
  lima: null,
  chile: null,
  mexico: null
};
$(document).ready(function () {
  getJSON('lima.json', function (err, json) {
    if (err) { return alert(err.message);}
    coders.lima = json;
  });
  getJSON('chile.json', function (err, json) {
    if (err) { return alert(err.message);}
    coders.chile = json;
  });
  getJSON('mexico.json', function (err, json) {
    if (err) { return alert(err.message);}
    coders.mexico = json;
  });
  $(".seat select").on("change", function () {
    var current_seat = $(".seat select").val();
    switch (current_seat) {
      case "lima":
        var random_numbers = generate_random_numbers(coders.lima);
        var accountant = 0;
        var current_coder = coders.lima[random_numbers[accountant]];
        Photo_coder(current_seat, current_coder.image);
        $(".to-play button").on("click", load_random_photos (current_coder, $(".to-play input").val()));
        break;
      case "arequipa":
        console.log("no data");
        break;
      case "chile":
        $(".to-play button").on("click", function () {
          console.log("hola chile");
        })
        break;
      case "mexico":
      $(".to-play button").on("click", function () {
        console.log("hola mexico");
      })
        break;
      default:
        console.log("Debe elegir una sede");
    }
  });
});
