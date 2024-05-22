$('#chanceButton').click(function() {
  window.location.href = './bullsbears.html';
});
$(document).ready(function () {

  // Notes popup
  $('#floating-notes textarea').text(localStorage.getItem("notes") || "");

  $("#floating-button").on("click", function () {
      $("#floating-notes").toggle();
  });

  $('#floating-notes textarea').bind('input propertychange', function () {
      const text = $(this).val();
      localStorage.setItem("notes", text);
  });
});

$('.home-button').click(function() {
  window.location.href = './index.html';
});

$('#profile-button').click(function() {
  window.location.href = './profile.html';

});
