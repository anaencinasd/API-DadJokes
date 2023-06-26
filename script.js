 const jokeEl = document.querySelector('.joke')
 const jokeBtn = document.querySelector('.btn')
 document.addEventListener('DOMContentLoaded', generateJoke)

 jokeBtn.addEventListener('click', generateJoke)

// async function generateJoke() {
//   const jokeData =  await fetch ('https://icanhazdadjoke.com', {
//     headers: {
//         'Accept': 'application/json',
//       },

//   });
//   const jokeObj = await jokeData.json()
//   console.log(jokeObj.joke)
//   jokeEl.innerHTML = jokeObj.joke;  
//   }

function generateJoke (){
    fetch('https://icanhazdadjoke.com', {
        headers:{
            'Accept':'application/json'
        }
    }).then(data=> data.json())
        .then(obj=>jokeEl.innerHTML = obj.joke )
   
}

  