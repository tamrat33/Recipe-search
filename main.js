
let input = document.querySelector(input)

let url = "https://crossorigin.me/http://www.recipepuppy.com/api"

fetch(url).then(
  function(response){
    if(response.status !== 200) {
      console.log(response.status);
      return;
    }
    response.json().then(function(data) {
      // let data = JSON.parse(this.responseText);
      let list = '';

      data.results.forEach( function (input) {

      });

      .innerHTML =input ;~
    });
  }
)
