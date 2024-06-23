let button = document.getElementById('getJoke')
button.addEventListener('click',getJokeData);

async function getJokeData(){
    const apiURL = 'https://official-joke-api.appspot.com/random_joke';

    try{
        let response = await fetch(apiURL);
        if(response.ok){
            let jokeData = await response.json();
            displayJoke(jokeData);
        }
        else{
            alert("Failed tp fetch joke. Please try again");
            throw new Error("Api request failed");
        }
    }
    catch(error){
        console.error(error);
    }
}

function displayJoke(joke){
    let setup = document.getElementById('setup');
    setup.innerHTML = "Joke: "+joke.setup;

    let punchline = document.getElementById('punchline');
    punchline.innerHTML = "Punchline :" +joke.punchline;
}