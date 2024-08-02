let musicDropdown = document.getElementById("favorite_blank");
let favBands = document.getElementById("favBand");
let favArtists = document.getElementById("favArtist");
let favSongs = document.getElementById("favSong");
let musicButton = document.getElementById("favMusicButton");

let apcspButton = document.getElementById("apcsp_button");
let apcspScore = document.getElementById("apcsp_score");
let appcButton = document.getElementById("appc_button");
let appcScore = document.getElementById("appc_score");
let appButton = document.getElementById("app_button");
let appScore = document.getElementById("app_score");

favBands.style.display = "none";
favArtists.style.display = "none";
favSongs.style.display = "none";

apcspScore.style.display = "none";
appcScore.style.display = "none";
appScore.style.display = "none";

function showapcspScore(event){
    event.preventDefault();  
    apcspScore.style.display = "block";
}

function showappcScore(event){
    event.preventDefault();  
    appcScore.style.display = "block";
}

function showappScore(event){
    event.preventDefault();  
    appScore.style.display = "block";
}


apcspButton.addEventListener("click", showapcspScore);
appcButton.addEventListener("click", showappcScore);
appButton.addEventListener("click", showappScore);


function showMusic(event){
    event.preventDefault();

    let userInput = musicDropdown.value;

    if(userInput == "Favorite Bands"){
        favBands.style.display = "flex";
        favArtists.style.display = "none";
        favSongs.style.display = "none";
    }else if(userInput == "Favorite Artists"){
        favArtists.style.display = "flex";
        favSongs.style.display = "none";
        favBands.style.display = "none";
    }else if(userInput == "Favorite Songs"){
        favSongs.style.display = "flex";
        favArtists.style.display = "none";
        favBands.style.display = "none";
    }

}
musicButton.addEventListener("click", showMusic);


/*     <div id="academics">
        <h1>Academics</h1>
        <h2 id ="taken_ap_classes">Here are some AP Classes I have taken!
            <ul>
                <li>AP Computer Science Principles (2022-2023)
                    <br>
                    <button id="apcsp_button">Click to reveal score</button>
                    <h5 id="apcsp_score">Score: 3</h5>
                </li>
                <li>AP Precalculus (2023-2024)
                    <br>
                    <button id="appc_button">Click to reveal score</button>
                    <h5 id="appc_score">Score: 5</h5>
                </li>
                <li>AP Psychology (2023-2024)
                    <br>
                    <button id="app_button">Click to reveal score</button>
                    <h5 id="app_score">Score: 4</h5>
                </li>
            </ul>
        </h2>

        <h2 id="future_ap_classes">Here are some AP Classes that I will take in the 2024-2025 school year!
            <ul>
                <li>AP Calculus BC</li>
                <li> AP Chemistry</li>
                <li>AP English Language</li>
                <li>AP Italian</li>
                <li>AP United States History</li>
            </ul>
        </h2>

    </div>
>*/