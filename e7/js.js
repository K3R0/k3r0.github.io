var data

async function getJSON() {
  return fetch('https://static.smilegatemegaport.com/gameRecord/epic7/epic7_user_world_eu.json')
    .then(response => response.json())
    .then(json => {return json});
}
async function load_player() {
  const json = await getJSON();
  data = await JSON.parse(json)
  alert("JSON loaded!");
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
