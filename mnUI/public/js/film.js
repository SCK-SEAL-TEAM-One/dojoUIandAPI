$( document ).ready(function() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://ghibliapi.herokuapp.com/films",
        "method": "GET",
        "headers": {
          "Cache-Control": "no-cache",
        }
      }
      
      $.ajax(settings).done(function (response) {
        for(var i=0;i<response.length;i++ ){
            $("#filmlist").append("<div onclick='getByID('aaaa') ><br>"+response[i].description +"<br></div>")
        }


      });
  });

  function getByID(filmID){
    alert(filmID)
  }