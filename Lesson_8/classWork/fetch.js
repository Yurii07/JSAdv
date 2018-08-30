

// var array = [];
// for( i=0; i < array.length; i++){
//   array[i]...
// }
//
// var array = [];
//     array.forEach( ()=>{...})



let url = "http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2";
const convertToJson = ( res ) => res.json();
fetch( url )
  .then(convertToJson)
  .then( res =>{
    console.log('json:', res[1]);
    return res[1];
  })
  .then( res => {
      let friendsUrl = "http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2";
      return fetch( friendsUrl )
        .then(convertToJson)
        .then( resFriends => {
          console.log( 'friendlist:', resFriends[0].friends );
          return {
            username: res.name,
            friend: resFriends[0].friends
          }
      })
  })
  .then( res => {
    console.log('after combine:', res);
    const target = document.getElementById('target');
    let div = document.createElement('div');
        div.innerHTML = `
        <div>
          <h2>${res.username}</h2>
          <ul>${res.friend.map( friend => `<li>${friend.name}</li>`)}</ul>
        </div>
        `;
        var ul = div.querySelector('ul');
        console.log(ul);
        res.friend.map( friend => {
          let li = document.createElement('li');
              li.innerText = friend.name;
              ul.appendChild(li);
        });

    target.appendChild(div);
    // console.log(div);
  })

  console.log(2);
  console.log(3);
