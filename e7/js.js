let jsonData = fetch('https://static.smilegatemegaport.com/gameRecord/epic7/epic7_user_world_eu.json')
.then((response)=>{
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error('Something went wrong!');
    }
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.error(error);
});

let data = JSON.parse(jsonData)

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
