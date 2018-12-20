// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".delquote").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/games/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var ids = $('#send').attr('data-id');
    var pickedwinner = {
     
      winner: $("[name=team]:checked").val().trim()
      
    };
  console.log (pickedwinner);
    // Send the POST request.
    $.ajax("/api/user_pick", {
      type: "POST",
      data: pickedwinner
    }).then(
      function() {
        console.log("created Winner");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  // $(".create-form").on("submit", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();

  //   var newQuote = {
  //     author: $("#auth").val().trim(),
  //     quote: $("#quo").val().trim()
  //   };

  //   // Send the POST request.
  //   $.ajax("/api/quotes", {
  //     type: "POST",
  //     data: newQuote
  //   }).then(
  //     function() {
  //       console.log("created new quote");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

  $("#update-form").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // var ids = $('.send').attr("data-id");

    
    var updatewinner = {
      winner: $("[name=team]:checked").val().trim()
      
    };

    var id = $(this).data("id");


    console.log(id);
    // Send the POST request.
    $.ajax("/api/user_pick/" + id, {

      type: "PUT",

      data: updatewinner

    }).then(

      function() {

        console.log("updated quote");

        // Reload the page to get the updated list

        location.assign("/");

      }

    );

  });

});