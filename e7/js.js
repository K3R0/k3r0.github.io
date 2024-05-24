var data

async function load_player() {
  fetch('https://static.smilegatemegaport.com/gameRecord/epic7/epic7_user_world_eu.json')
    .then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then(json => {
       this.data = json;
       data = JSON.parse(this.data)
       alert("JSON Loaded!")
   })
   .catch(function () {
       this.dataError = true;
   })
  
}
window.onload = load_player;


function search_player() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.querySelector('#list-holder');
  x.innerHTML = ""

  for (i = 0; i < data.length; i++) {
    let obj = data[i];

    if (obj.nick_nm.toLowerCase().includes(input)) {
      const elem = document.createElement("li")
      elem.innerHTML = `${obj.nick_nm} - ${obj.nick_no}`
      x.appendChild(elem)
    }
  }
}
