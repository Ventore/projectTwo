// Check Off specific ToDo by clicking
$('ul').on("click", "li", function() {
  $(this).toggleClass("completed")
});

// Click on X to delete ToDo
$('ul').on("click", "span", function(event) {
  $(this).parent().fadeOut(function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// Adding new ToDo by Keypress
$('input[type = "text"]').keypress(function(key) {
  if (key.which === 13) {
    var todoText = ($(this).val());
    $('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + todoText + '</li>')
    $(this).val("");
  };
});

// Toggling input
$('.fa-plus').click(function() {
  $('input[type = "text"]').fadeToggle(0.2);
});
