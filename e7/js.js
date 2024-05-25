var data = []
var player_list = [
	{region:'Global',json_link:'https://static.smilegatemegaport.com/gameRecord/epic7/epic7_user_world_global.json'},
	{region:'Asia',json_link:'https://static.smilegatemegaport.com/gameRecord/epic7/epic7_user_world_asia.json'},
	{region:'EU',json_link:'https://static.smilegatemegaport.com/gameRecord/epic7/epic7_user_world_eu.json'},
	{region:'JPN',json_link:'https://static.smilegatemegaport.com/gameRecord/epic7/epic7_user_world_jpn.json'},
	{region:'KOR',json_link:'https://static.smilegatemegaport.com/gameRecord/epic7/epic7_user_world_kor.json'}
]
var player_loaded = false

async function getJSON(ply_list) {
  return fetch(ply_list.json_link)
    .then(response => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Error while fetching ${ply_list.region} player list');
	})
	.catch(error => {
		console.log(error);
	})
}
async function load_player() {
  for (i = 0; i < player_list.length; i++) {
	  let region_json = await getJSON(player_list[i]);
	  region_json = region_json.users;
	  region_json = region_json.map(obj => ({ ...obj, region: player_list[i].region}));
	  data = data.concat(region_json);
  }
  player_loaded = true;
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

    if ((obj.nick_no.toLowerCase().includes(input) || obj.nick_nm.toLowerCase().includes(input)) && list_size < 6) {
      const elem = document.createElement("li")
      elem.innerHTML = `${obj.nick_nm} - ${obj.nick_no} - ${obj.region}`
      x.appendChild(elem)
      list_size++;
    }
  }
}
