$(".devour-button").on("click", function(event) {
    let id = $(this).data("id");
    console.log("pushed");
    let burgerDevoured = {
      id: id
    };

    // Send the PUT request.
    $.ajax("/home/devour/" + id, {
      type: "PUT",
      data: burgerDevoured
    }).then(
      function() {
        console.log("updated" + id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

