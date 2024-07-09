// const Http = new XMLHttpRequest();
// const url = 'https://jsonplaceholder.typicode.com/posts';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//   if (this.readystate == 4 && this.status == 200) {
//      console.log(Http.responseText );
//   }
// }

$(document).ready(function() {
    const Url = 'https://jsonplaceholder.typicode.com/posts';
    $('#ajax').click(function() {
    $.ajax({
      url: Url,
      type: "GET",
      success: function(result) {
        console.log(result);
      },
      error: function(error) {
        console.log(`Error ${error}`);
      }
    });
    });
      
      $('#get').click(function() {
      $.get(Url, function(data, status) {
        console.log(`${data}`)
      });
      });
      
      
      const data = {
          name: "TestPost",
          id: 18
      } 
      $('#post').click(function() {
       
      $.post(Url, data, function(data, status) {
        console.log(`${data} and status is ${status}`)
      });
      });
      
      $('#GET_JSON').click(function() {
      $.getJSON(Url, function(result) {
        console.log(result);
      });
      });
       
  });
