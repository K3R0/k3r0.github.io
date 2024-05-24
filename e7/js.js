var data

async function getJSON() {
  return fetch('https://static.smilegatemegaport.com/gameRecord/epic7/epic7_user_world_eu.json')
    .then(response => response.json())
    .then(json => {return json});
}
async function load_player() {
  data = await getJSON();
  data = data.users
}

window.onload = load_player;


function search_player() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.querySelector('#list-holder');
  x.innerHTML = ""
  let list_size = 0;

  for (i = 0; i < data.length; i++) {
    let obj = data[i];

    if (obj.nick_nm.toLowerCase().includes(input) && list_size < 6) {
      const elem = document.createElement("li")
      elem.innerHTML = `${obj.nick_nm} - ${obj.nick_no}`
      x.appendChild(elem)
      list_size++;
    }
  }
}
