$(".devour-form button").on("click", function(event) {
   event.preventDefault();
   var id = $(this).siblings("input").val();
   
   $.ajax({
       method: "PUT",
       url: `/burgers/update/${id}` 
   }).then(function(response) {
      self['location'].assign(location.href); 
   });   
});